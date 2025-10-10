import {useState} from "react";
import {useTranslation} from "react-i18next";

const FindSpecialist = () => {
    const { t } = useTranslation();
    const [forTwo, setForTwo] = useState(false);

    return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                Найдите специалиста в области <br /> психического здоровья
            </h2>

            <div className="flex flex-col items-center gap-4">
                <div className="flex bg-[#9BAB4B] rounded-md pl-[.9px] p-[.5px] overflow-hidden w-full max-w-md shadow-sm">
                    <button
                        className={`flex-1 py-1 rounded-md font-medium transition ${
                            !forTwo ? "bg-white text-black" : "text-white"
                        }`}
                        onClick={() => setForTwo(false)}
                    >
                        {t("home-page.hero.count") || "для себя"}
                    </button>
                    <button
                        className={`flex-1 py-3 rounded-md font-medium transition ${
                            forTwo ? "bg-white text-black" : "text-white"
                        }`}
                        onClick={() => setForTwo(true)}
                    >
                        {t("home-page.hero.count2") || "для двоих"}
                    </button>
                </div>

                <button className="w-full max-w-md py-3 bg-[#9BAB4B] hover:bg-[#a8c55d] text-white font-semibold rounded-lg transition">
                    {t("home-page.hero.findSpecialist") || "подобрать специалиста"}
                </button>
            </div>
        </section>
    )
}

export default FindSpecialist;