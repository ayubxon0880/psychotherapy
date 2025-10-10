import React from "react";
import {useTranslation} from "react-i18next";

const HowWork = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 1,
            title: t("home-page.how_work.step1_title"),
            text: t("home-page.how_work.step1_desc"),
            image: "/images/home/hero/3.png",
            bg: "bg-[#E8EBA8]",
        },
        {
            id: 2,
            title: t("home-page.how_work.step2_title"),
            text: t("home-page.how_work.step2_desc"),
            image: "/images/home/hero/newpushti.png",
            bg: "bg-[#F6D4D4]",
        },
        {
            id: 3,
            title: t("home-page.how_work.step3_title"),
            text: t("home-page.how_work.step3_desc"),
            image: "/images/home/hero/3.png",
            bg: "bg-[#E8EBA8]",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t("home-page.how_work.title")}
            </h2>

            <div className="flex flex-col gap-24 relative">
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`w-full flex flex-col relative ${
                            index % 2 === 1 ? "items-end" : "items-start"
                        }`}
                    >
                        <div
                            className={`
                relative w-full md:w-[48%] rounded-[32px] shadow-lg overflow-hidden
                p-8 transition-transform duration-300 hover:scale-[1.02]
                ${step.bg}
              `}
                        >

                            <div
                                className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-100"
                                style={{backgroundImage: `url(${step.image})`}}
                            ></div>


                            <div className="relative z-10 md:w-2/3">
                                <h3 className="text-gray-800 text-2xl md:text-3xl font-bold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    {step.text}
                                </p>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWork;
