import { useTranslation } from "react-i18next";

const TestSection = () => {
    const { t } = useTranslation();
    const helps = [
        {
            id: 1,
            text: t("help.card1") || "выйти из депрессии и восстановить силы",
            image: "/images/home/hero/1.png",
            bg: "bg-[#E8EBA8]",
        },
        {
            id: 2,
            text: t("help.card2") || "выйти из депрессии и восстановить силы",
            image: "/images/home/hero/2.png",
            bg: "bg-[#F2F0B0]",
        },
        {
            id: 3,
            text: t("help.card3") || "решать сексуальные трудности",
            image: "/images/home/hero/3.png",
            bg: "bg-[#E8EBA8]",
        },
        {
            id: 4,
            text: t("help.card4") || "справляться с тревогой и паническими атаками",
            image: "/images/home/hero/4.png",
            bg: "bg-[#F6D4D4]",
        },
        {
            id: 5,
            image: "/images/testImg.png",
        },
        {
            id: 6,
            image: "/images/testImg2.png",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <section className="max-w-6xl mx-auto px-4 md:px-6 py-16"   >
                <div className="bg-[#F2F3A2] rounded-3xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Тесты
                            </h2>
                            <p className="text-gray-800 font-medium leading-relaxed mb-8">
                                Ответьте на несколько простых вопросов, чтобы лучше понять
                                состояние вашего психического здоровья. Узнайте уровень вашего
                                беспокойственного состояния.
                            </p>
                            <button
                                onClick={() => console.log("Тест")}
                                className="w-full md:w-72 py-3 bg-[#a8c55d] text-white font-semibold rounded-lg transition hover:bg-[#94b352]"
                            >
                                пройти тест
                            </button>
                            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                                Результаты носят ориентировочный характер и не заменяют
                                консультацию специалиста.
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img
                                src={helps[4].image}
                                alt="help"
                                className="w-60 md:w-80 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TestSection;
