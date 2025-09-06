import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function TestOverlay({ onClose }) {
    const { t } = useTranslation();

    const tests = [
        {
            title: t("test-overlay.title"),
            questions: [
                {
                    question: t("test-overlay.q1.question"),
                    answers: [
                        { text: t("test-overlay.q1.a1"), code: "PSY" },
                        { text: t("test-overlay.q1.a2"), code: "PTH" },
                        { text: t("test-overlay.q1.a3"), code: "PSYCH" },
                        { text: t("test-overlay.q1.a4"), code: "SEX" },
                        { text: t("test-overlay.q1.a5"), code: "NAR" },
                    ],
                },
                {
                    question: t("test-overlay.q2.question"),
                    answers: [
                        { text: t("test-overlay.q2.a1"), code: "PSY" },
                        { text: t("test-overlay.q2.a2"), code: "PTH" },
                        { text: t("test-overlay.q2.a3"), code: "PSYCH" },
                        { text: t("test-overlay.q2.a4"), code: "PSY" },
                        { text: t("test-overlay.q2.a5"), code: "NAR" },
                    ],
                },
                {
                    question: t("test-overlay.q3.question"),
                    answers: [
                        { text: t("test-overlay.q3.a1"), code: "PSY" },
                        { text: t("test-overlay.q3.a2"), code: "PTH" },
                        { text: t("test-overlay.q3.a3"), code: "PSYCH" },
                        { text: t("test-overlay.q3.a4"), code: "SEX" },
                        { text: t("test-overlay.q3.a5"), code: "NAR" },
                    ],
                },
                {
                    question: t("test-overlay.q4.question"),
                    answers: [
                        { text: t("test-overlay.q4.a1"), code: "PSY" },
                        { text: t("test-overlay.q4.a2"), code: "PTH" },
                        { text: t("test-overlay.q4.a3"), code: "PSYCH" },
                        { text: t("test-overlay.q4.a4"), code: "SEX" },
                        { text: t("test-overlay.q4.a5"), code: "NAR" },
                    ],
                },
            ],
        },
    ];

    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (qIndex, code) => {
        setAnswers((prev) => ({
            ...prev,
            [qIndex]: code,
        }));

        if (qIndex < tests[0].questions.length - 1) {
            setCurrentQuestion(qIndex + 1);
        } else {
            finishTest();
        }
    };

    const finishTest = () => {
        const counts = { PSY: 0, PTH: 0, PSYCH: 0, SEX: 0, NAR: 0 };
        Object.values(answers).forEach((code) => {
            counts[code] += 1;
        });

        let res = Object.keys(counts).reduce((a, b) =>
            counts[a] >= counts[b] ? a : b
        );

        if (Object.values(answers).includes("NAR")) res = "NAR";
        else if (Object.values(answers).includes("PSYCH") && answers[1] === "PSYCH")
            res = "PSYCH";
        else if (Object.values(answers).includes("SEX")) res = "SEX";
        else if (Object.values(answers).includes("PTH")) res = "PTH";
        else res = "PSY";

        setResult(res);
    };

    const mapping = {
        PSY: t("test-overlay.results.psy"),
        PTH: t("test-overlay.results.pth"),
        PSYCH: t("test-overlay.results.psychiatrist"),
        SEX: t("test-overlay.results.sex"),
        NAR: t("test-overlay.results.nar"),
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center shadow-xl relative">
                {!result ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4">{tests[0].title}</h2>
                        <div className="space-y-4 text-left">
                            <p className="mb-2 font-medium">
                                {tests[0].questions[currentQuestion].question}
                            </p>
                            <ul className="space-y-2">
                                {tests[0].questions[currentQuestion].answers.map((ans, idx) => (
                                    <li key={idx}>
                                        <button
                                            className={`w-full px-4 py-2 rounded-lg border text-left transition ${
                                                answers[currentQuestion] === ans.code
                                                    ? "bg-[#d5beb0] text-white"
                                                    : "bg-gray-100 hover:bg-gray-200"
                                            }`}
                                            onClick={() => handleAnswer(currentQuestion, ans.code)}
                                        >
                                            {ans.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button
                                className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                                onClick={onClose}
                            >
                                {t("common.close")}
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-2xl font-bold mb-4">{t("test-overlay.resultTitle")}</h2>
                        <p className="text-xl mb-6">
                            {t("test-overlay.recommended")}: {mapping[result]}
                        </p>
                        <button
                            className="px-6 py-2 bg-[#d5beb0] text-white rounded-lg hover:bg-[#7A5240] transition"
                            onClick={onClose}
                        >
                            {t("common.close")}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
