import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TESTS, QUESTIONS } from "../data/data";

function getRangeForScore(ranges, score) {
    return ranges.find((r) => score >= r.min && score <= r.max) || null;
}

function suggestReferral(rangeId) {
    const highRisk = ["moderately_severe", "severe"];
    if (highRisk.includes(rangeId)) return "psychiatrist_or_narcologist";
    return "psychotherapist_or_psychologist";
}

export default function TestsPage() {
    const { t, i18n } = useTranslation();
    const [selectedTest, setSelectedTest] = useState(TESTS[0]);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [showResultModal, setShowResultModal] = useState(false);

    function startTest(test) {
        setSelectedTest(test);
        const initial = {};
        for (let i = 0; i < test.questionsCount; i++) initial[`q${i}`] = 0;
        setAnswers(initial);
        setResult(null);
        setShowResultModal(false);
        document.getElementById("test-area")?.scrollIntoView({ behavior: "smooth" });
    }

    function setAnswer(qIndex, value) {
        setAnswers((prev) => ({ ...prev, [`q${qIndex}`]: Number(value) }));
    }

    function computeScore(test, answersObj) {
        const values = Object.keys(answersObj)
            .filter((k) => k.startsWith("q"))
            .map((k) => Number(answersObj[k]) || 0);
        return values.reduce((a, b) => a + b, 0);
    }

    function submitTest() {
        const score = computeScore(selectedTest, answers);
        const range = getRangeForScore(selectedTest.ranges, score);
        const referral = suggestReferral(range?.id);
        const interpretation = range
            ? `${t("test-page.result.interpretationPrefix")}: ${t(range.labelKey)}`
            : t("test-page.result.noInterpretation");
        setResult({ score, range, referral, interpretation, testId: selectedTest.id });
        setShowResultModal(true);
    }

    // 🔹 Savollarni olish
    const localizedQuestions = QUESTIONS[selectedTest.category]?.[selectedTest.id] || [];

    function connectWithSpecialist(result) {
        if (!result) return;

        // Natijaga qarab qaysi mutaxassisga yo‘naltirish
        if (result.referral === "psychiatrist_or_narcologist") {
            window.location.href = "/specialists?type=psychiatrist";
        } else {
            window.location.href = "/specialists?type=psychologist";
        }
    }

    function sendEmailReport(result, selectedTest, t) {
        if (!result) return;

        const subject = encodeURIComponent(
            `${t("test-page.result.title")}: ${t(selectedTest.i18nKey + ".title")}`
        );

        const body = encodeURIComponent(
            `${t("test-page.result.title")}: ${t(selectedTest.i18nKey + ".title")}\n` +
            `${t("test-page.result.score")}: ${result.score}\n` +
            `${result.interpretation}\n` +
            `${t("test-page.referral." + result.referral)}\n\nPsychotherapy.uz`
        );

        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }


    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#7A5240]">
                    {t("test-page.pageTitle")}
                </h1>
                <p className="text-sm text-gray-700 mb-6">{t("test-page.pageSubtitle")}</p>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {TESTS.map((tst) => (
                        <div key={tst.id} className="bg-[#d5beb0] rounded-2xl p-6 shadow-md">
                            <h3 className="text-xl font-semibold">{t(tst.i18nKey + ".title")}</h3>
                            <p className="text-sm mt-2">{t(tst.i18nKey + ".description")}</p>
                            <div className="mt-4 flex items-center gap-3">
                                <button
                                    onClick={() => startTest(tst)}
                                    className="px-4 py-2 bg-[#D8F3A2] text-black rounded-lg font-medium hover:bg-[#c4dd93]"
                                >
                                    {t("test-page.buttons.start")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Test Area */}
                <div id="test-area" className="mt-10">
                    {selectedTest && (
                        <div className="bg-white rounded-2xl p-6 border border-gray-300">
                            <h2 className="text-2xl font-semibold text-[#7A5240]">
                                {t(selectedTest.i18nKey + ".title")}
                            </h2>

                            <div className="mt-6 space-y-4">
                                {localizedQuestions.map((q, i) => (
                                    <div key={i} className="flex items-center justify-between bg-gray-100 rounded-lg p-3">
                                        <div className="text-sm">{q[i18n.language]}</div>
                                        <select
                                            className="bg-white text-black px-3 py-1 rounded-md border border-gray-300"
                                            value={answers[`q${i}`] ?? 0}
                                            onChange={(e) => setAnswer(i, e.target.value)}
                                        >
                                            <option value={0}>{t("test-page.options.0")}</option>
                                            <option value={1}>{t("test-page.options.1")}</option>
                                            <option value={2}>{t("test-page.options.2")}</option>
                                            <option value={3}>{t("test-page.options.3")}</option>
                                        </select>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    onClick={submitTest}
                                    className="px-5 py-2 bg-[#D8F3A2] text-black rounded-lg font-semibold hover:bg-[#c9e297]"
                                >
                                    {t("test-page.buttons.finish")}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Result Modal */}
                {showResultModal && result && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-black/70"
                            onClick={() => setShowResultModal(false)}
                        />
                        <div className="relative max-w-xl w-full bg-white rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-xl font-bold mb-2 text-[#7A5240]">
                                {t("test-page.result.title")}: {t(selectedTest.i18nKey + ".title")}
                            </h3>
                            <p className="text-sm text-gray-700">
                                {t("test-page.result.score")}: <strong>{result.score}</strong>
                            </p>
                            <p className="text-sm text-gray-700 mt-2">{result.interpretation}</p>

                            <div className="mt-4 bg-gray-100 rounded-md p-3 border border-gray-300">
                                <div className="text-sm">{t("test-page.result.readyDiscuss")}</div>
                                <div className="text-xs text-gray-600 mt-1">
                                    {t("test-page.result.helpText")}
                                </div>

                                {/* Yangi tugmalar */}
                                <div className="mt-3 flex gap-3">
                                    <a
                                        onClick={() => connectWithSpecialist(result)}
                                        className="px-4 py-2 bg-[#D8F3A2] text-black rounded-md hover:bg-[#cce699] cursor-pointer"
                                    >
                                        {t("test-page.buttons.book")}
                                    </a>

                                    <button
                                        onClick={() => sendEmailReport(result, selectedTest, t)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-200"
                                    >
                                        {t("test-page.buttons.sendEmail")}
                                    </button>

                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={() => setShowResultModal(false)}
                                    className="text-sm text-gray-500 hover:text-[#7A5240]">
                                    {t("test-page.buttons.close")}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
