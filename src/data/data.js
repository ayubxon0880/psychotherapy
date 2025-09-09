export const TESTS = [
    {
        id: "phq9",
        category: "depression",
        i18nKey: "test-page.tests.phq9",
        questionsCount: 9,
        scoring: "sum",
        pdf: "/pdfs/phq9.pdf",
        ranges: [
            { id: "minimal", labelKey: "test-page.ranges.minimal", min: 0, max: 4 },
            { id: "mild", labelKey: "test-page.ranges.mild", min: 5, max: 9 },
            { id: "moderate", labelKey: "test-page.ranges.moderate", min: 10, max: 14 },
            { id: "moderately_severe", labelKey: "test-page.ranges.moderately_severe", min: 15, max: 19 },
            { id: "severe", labelKey: "test-page.ranges.severe", min: 20, max: 27 }
        ]
    },
    {
        id: "gad7",
        category: "anxiety",
        i18nKey: "test-page.tests.gad7",
        questionsCount: 7,
        scoring: "sum",
        pdf: "/pdfs/gad7.pdf",
        ranges: [
            { id: "minimal", labelKey: "test-page.ranges.minimal", min: 0, max: 4 },
            { id: "mild", labelKey: "test-page.ranges.mild", min: 5, max: 9 },
            { id: "moderate", labelKey: "test-page.ranges.moderate", min: 10, max: 14 },
            { id: "severe", labelKey: "test-page.ranges.severe", min: 15, max: 21 }
        ]
    }
];

export const QUESTIONS = {
    depression: {
        phq9: [
            {
                ru: "За последние 2 недели, часто ли у вас было плохое настроение?",
                uz: "Oxirgi 2 haftada ko‘p hollarda kayfiyatingiz tushganmi?",
                en: "Over the past 2 weeks, have you often felt down or depressed?"
            },
            {
                ru: "Чувствовали ли вы потерю интереса к привычным делам?",
                uz: "Oddiy ishlaringizga qiziqishni yo‘qotdingizmi?",
                en: "Have you lost interest in your usual activities?"
            },
            {
                ru: "Были ли у вас трудности со сном?",
                uz: "Uyqu bilan muammolaringiz bo‘ldimi?",
                en: "Have you had trouble sleeping?"
            }
        ]
    },
    anxiety: {
        gad7: [
            {
                ru: "Как часто за последние 2 недели вы чувствовали тревогу?",
                uz: "Oxirgi 2 haftada tez-tez xavotir his qildingizmi?",
                en: "Over the past 2 weeks, how often have you felt anxious?"
            },
            {
                ru: "Насколько сильно тревога мешала вашей жизни?",
                uz: "Xavotir hayotingizga qanchalik xalaqit berdi?",
                en: "How much has anxiety interfered with your life?"
            },
            {
                ru: "Были ли у вас приступы паники?",
                uz: "Sizda vahima xurujlari bo‘ldimi?",
                en: "Have you experienced panic attacks?"
            }
        ]
    }
};
