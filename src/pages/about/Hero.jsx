import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div
            className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: "#F2F3A2" }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                {t("about-page.hero.title")}
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t("about-page.hero.description")}
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src="/images/about/hero.png"
                                alt="About Us"
                                className="rounded-lg w-full max-w-sm lg:max-w-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
