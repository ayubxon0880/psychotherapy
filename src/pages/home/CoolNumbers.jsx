import React from "react";
import { useTranslation, Trans } from "react-i18next";

const CoolNumbers = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white py-12 px-4 md:px-10 lg:px-20 font-bold">
            <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#FFE0E6] rounded-3xl p-6 shadow-md flex flex-col justify-center text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl text-[#FF6AB2] mb-2">
                            {t("home-page.coolNumbers.specialistsTitle")}
                        </h3>
                        <p className="text-[#172934] font-semibold text-base sm:text-lg">
                            {t("home-page.coolNumbers.specialistsText")}
                        </p>
                    </div>

                    <div className="bg-[#F2F3A2] rounded-3xl p-6 shadow-md flex flex-col justify-center text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl text-[#9BAB4B] mb-2">
                            {t("home-page.coolNumbers.resultTitle")}
                        </h3>
                        <p className="text-[#172934] font-semibold text-base sm:text-lg">
                            {t("home-page.coolNumbers.resultText")}
                        </p>
                    </div>

                    <div className="bg-[#F2F3A2] rounded-3xl p-6 shadow-md flex flex-col justify-center text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl text-[#9BAB4B] mb-2">
                            {t("home-page.coolNumbers.experienceTitle")}
                        </h3>
                        <p className="text-[#172934] font-semibold text-base sm:text-lg">
                            {t("home-page.coolNumbers.experienceText")}
                        </p>
                    </div>

                    <div className="bg-[#FFE0E6] rounded-3xl p-6 shadow-md flex flex-col justify-center text-center sm:text-left">
                        <h3 className="text-2xl sm:text-3xl text-[#FF6AB2] mb-2">
                            {t("home-page.coolNumbers.availabilityTitle")}
                        </h3>
                        <p className="text-[#172934] font-semibold text-base sm:text-lg">
                            {t("home-page.coolNumbers.availabilityText")}
                        </p>
                    </div>
                </div>

                {/* O‘ngdagi katta blok */}
                <div className="bg-[#F2F3A2] rounded-3xl p-8 flex flex-col justify-center items-center md:items-start shadow-md text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#9BAB4B] mb-4">
                        {t("home-page.coolNumbers.foundTitle")}
                    </h2>
                    <p className="text-[#172934] font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug max-w-[90%] md:max-w-[400px]">
                        <Trans i18nKey="home-page.coolNumbers.foundText" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CoolNumbers;
