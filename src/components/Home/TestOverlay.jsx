import { useState } from "react";

export default function TestOverlay({ onClose }) {
    const tests = [
        {
            title: "Мини-тест «К какому специалисту обратиться?»",
            questions: [
                {
                    question: "Что для вас сейчас важнее всего?",
                    answers: [
                        { text: "Чувства, стресс, отношения", code: "PSY" },
                        { text: "Хочу практические советы и техники", code: "PTH" },
                        { text: "Может понадобиться медицинская помощь или лекарства", code: "PSYCH" },
                        { text: "Вопросы интимной жизни", code: "SEX" },
                        { text: "Вопросы, связанные с употреблением веществ", code: "NAR" },
                    ],
                },
                {
                    question: "Насколько это мешает в жизни?",
                    answers: [
                        { text: "Немного мешает", code: "PSY" },
                        { text: "Мешает в работе/доме", code: "PTH" },
                        { text: "Очень мешает, тяжело справляться", code: "PSYCH" },
                        { text: "Не знаю", code: "PSY" },
                        { text: "Есть трудности с контролем употребления", code: "NAR" },
                    ],
                },
                {
                    question: "Чего вы ждёте от специалиста?",
                    answers: [
                        { text: "Поговорить и лучше понять себя", code: "PSY" },
                        { text: "Получить конкретные методы и упражнения", code: "PTH" },
                        { text: "Проверить, нужна ли медицинская помощь или лекарства", code: "PSYCH" },
                        { text: "Разобраться в интимной сфере", code: "SEX" },
                        { text: "Помощь в снижении или прекращении употребления веществ", code: "NAR" },
                    ],
                },
                {
                    question: "Что ещё вы замечаете у себя?",
                    answers: [
                        { text: "Плохой сон, тревога, паника", code: "PSY" },
                        { text: "Конфликты, выгорание, прокрастинация", code: "PTH" },
                        { text: "Подозрение на психическое расстройство или опыт приёма препаратов", code: "PSYCH" },
                        { text: "Трудности с либидо, эрекцией, оргазмом", code: "SEX" },
                        { text: "Употребление мешает жить", code: "NAR" },
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

        let res = Object.keys(counts).reduce((a, b) => (counts[a] >= counts[b] ? a : b));

        if (Object.values(answers).includes("NAR")) res = "NAR";
        else if (Object.values(answers).includes("PSYCH") && answers[1] === "PSYCH") res = "PSYCH";
        else if (Object.values(answers).includes("SEX")) res = "SEX";
        else if (Object.values(answers).includes("PTH")) res = "PTH";
        else res = "PSY";

        setResult(res);
    };

    const mapping = {
        PSY: "Психолог 💬",
        PTH: "Психотерапевт 🛠️",
        PSYCH: "Психиатр 💊",
        SEX: "Сексолог ❤️",
        NAR: "Нарколог 🚭",
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
                                Закрыть
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <h2 className="text-2xl font-bold mb-4">Ваш результат</h2>
                        <p className="text-xl mb-6">Рекомендуемый специалист: {mapping[result]}</p>
                        <button
                            className="px-6 py-2 bg-[#d5beb0] text-white rounded-lg hover:bg-[#7A5240] transition"
                            onClick={onClose}
                        >
                            Закрыть
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
