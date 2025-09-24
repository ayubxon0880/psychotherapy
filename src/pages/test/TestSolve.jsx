import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {TESTS_ENG, TESTS_RU, TESTS_UZ} from "../../data/TESTS_UZ.js";
import {useTranslation} from "react-i18next";

export default function TestSolve() {
    const {t, i18n} = useTranslation();
    const { id } = useParams();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [test,setTest] = useState();

    useEffect(() => {
        if (i18n.language === "ru"){
            setTest(TESTS_RU.find(t => t.id === id));
        } else if (i18n.language === "en"){
            setTest(TESTS_ENG.find(t => t.id === id));
        } else {
            setTest(TESTS_UZ.find(t => t.id === id));
        }
    }, [i18n.language, id]);

    if (!test) return <div className="p-6">Test topilmadi.</div>;

    const handleChange = (qIndex, value) => {
        const parsedValue = isNaN(value) ? value : Number(value);
        setAnswers(prev => ({ ...prev, [qIndex]: parsedValue }));
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const score = Object.values(answers).reduce(
        (a, b) => (typeof b === "number" ? a + b : a),
        0
    );

    const getInterpretation = () => {
        switch (id) {
            case "phq9":
                if (score <= 4) return "Minimal depressiya";
                if (score <= 9) return "Yengil depressiya";
                if (score <= 14) return "O‘rtacha depressiya";
                if (score <= 19) return "O‘rtacha og‘ir depressiya";
                return "Og‘ir depressiya";

            case "gad7": // Tashvish
                if (score <= 4) return "Minimal tashvish";
                if (score <= 9) return "Yengil tashvish";
                if (score <= 14) return "O‘rtacha tashvish";
                return "Og‘ir tashvish";

            case "pcl5": // PTSD
                if (score < 33) return "PTSB ehtimoli past";
                return "PTSB ehtimoli yuqori, mutaxassisga murojaat qiling";

            case "scoff": // Ovqatlanish
                const yesCount = Object.values(answers).filter(a => a === "Ha").length;
                return yesCount >= 2
                    ? "Ovqatlanish buzilishi ehtimoli mavjud"
                    : "Ovqatlanish buzilishi ehtimoli past";

            case "mchat": // Autizm skriningi
                const riskCount = Object.values(answers).filter(a => a === "Ha").length;
                if (riskCount >= 8) return "Yuqori xavf: mutaxassisga murojaat qiling";
                if (riskCount >= 3) return "O‘rtacha xavf: qo‘shimcha tekshiruv zarur";
                return "Past xavf";

            default:
                return "Javoblaringiz qayd qilindi.";
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-4">{test.title}</h1>
            <p className="mb-6 text-gray-600">{test.description}</p>

            {!submitted ? (
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className="space-y-6"
                >
                    {test.questions.map((q, i) => (
                        <div key={i} className="border-b pb-4">
                            <p className="mb-2 font-medium">
                                {i + 1}. {q}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {test.options.map(opt => {
                                    const value = typeof opt === "object" ? opt.value : opt;
                                    const label = typeof opt === "object" ? opt.label : opt;

                                    return (
                                        <label
                                            key={value}
                                            className="flex items-center gap-2 text-sm"
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${i}`}
                                                value={value}
                                                checked={answers[i] === value}
                                                onChange={e => handleChange(i, e.target.value)}
                                                className="accent-indigo-600"
                                            />
                                            {label}
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow"
                    >
                        Yakunlash
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Natija</h2>

                    {score > 0 && (
                        <p className="text-lg mb-2">
                            Umumiy ball: <span className="font-semibold">{score}</span>
                        </p>
                    )}

                    <p className="text-lg">{getInterpretation()}</p>

                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-4 py-2 bg-gray-200 rounded"
                    >
                        Qayta ishlash
                    </button>
                </div>
            )}
        </div>
    );
}
