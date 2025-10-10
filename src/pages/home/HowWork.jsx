import React from "react";
import { useTranslation } from "react-i18next";

const HowWork = () => {
    const { t } = useTranslation();

    const helps = [
        { id: 1, image: "/images/home/hero/1.png", bg: "bg-[#E8EBA8]" },
        { id: 2, image: "/images/home/hero/2.png", bg: "bg-[#F2F0B0]" },
        { id: 3, image: "/images/home/hero/3.png", bg: "bg-[#E8EBA8]" },
        { id: 4, image: "/images/home/hero/4.png", bg: "bg-[#F6D4D4]" },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                {t("home-page.how_work.title")}
            </h2>

            <div className="flex flex-col gap-8">
                <div
                    className={`flex flex-col md:flex-row items-center justify-between rounded-3xl ${helps[0].bg} shadow-sm p-6 md:p-10`}
                >
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mb-4">
                            {t("home-page.how_work.step1_title")}
                        </h2>
                        <p className="text-gray-700 font-medium leading-relaxed">
                            {t("home-page.how_work.step1_desc")}
                        </p>
                    </div>
                    <img
                        src={helps[0].image}
                        alt="step1"
                        className="w-48 md:w-64 lg:w-72 mt-6 md:mt-0 object-contain"
                    />
                </div>

                <div
                    className={`flex flex-col md:flex-row-reverse items-center justify-between rounded-3xl ${helps[1].bg} shadow-sm p-6 md:p-10`}
                >
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mb-4">
                            {t("home-page.how_work.step2_title")}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t("home-page.how_work.step2_desc")}
                        </p>
                    </div>
                    <img
                        src={helps[1].image}
                        alt="step2"
                        className="w-48 md:w-64 lg:w-72 mt-6 md:mt-0 object-contain"
                    />
                </div>

                <div
                    className={`flex flex-col md:flex-row items-center justify-between rounded-3xl ${helps[2].bg} shadow-sm p-6 md:p-10`}
                >
                    <div className="md:w-2/3 text-center md:text-left">
                        <h2 className="text-gray-800 text-2xl md:text-3xl font-bold mb-4">
                            {t("home-page.how_work.step3_title")}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t("home-page.how_work.step3_desc")}
                        </p>
                    </div>
                    <img
                        src={helps[2].image}
                        alt="step3"
                        className="w-48 md:w-64 lg:w-72 mt-6 md:mt-0 object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default HowWork;
