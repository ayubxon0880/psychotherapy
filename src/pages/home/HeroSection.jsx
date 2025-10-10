import { useTranslation } from "react-i18next";
import { useState } from "react";

export const HeroSection = ({ setOverlay }) => {
    const { t } = useTranslation();
    const [forTwo, setForTwo] = useState(false);

    return (
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center px-4 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-b from-[#F2F3A2]/90 to-white z-10">
                <div
                    className="absolute inset-0 bg-center bg-contain md:bg-cover bg-no-repeat z-10 opacity-90"
                    style={{ backgroundImage: `url('/images/bghero.png')` }}
                ></div>

                <div
                    className="hidden lg:block absolute top-0 right-0 w-[180px] h-[180px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url('/images/vector5.png')`, top: "10%", right: "10%" }}
                ></div>
                <div
                    className="hidden lg:block absolute bottom-10 right-[5%] w-[200px] h-[200px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url('/images/vector6.png')` }}
                ></div>
                <div
                    className="hidden lg:block absolute top-[15%] right-[20%] w-[150px] h-[150px] bg-no-repeat bg-contain opacity-70"
                    style={{ backgroundImage: `url('/images/vector6.png')` }}
                ></div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-12 relative z-20">
                <div className="max-w-xl md:max-w-2xl text-gray-900 text-center md:text-left mt-16 md:mt-0">
                    <p className="text-lg md:text-2xl text-gray-600 mb-4 md:mb-6">
                        {t("home-page.hero.subtitle1")}
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-2">
                        {t("home-page.hero.title")}
                    </h1>

                    <h2 className="text-lg md:text-2xl font-semibold mb-8 leading-snug">
                        {t("home-page.hero.subtitle2")}
                    </h2>

                    <div className="flex mb-6 bg-[#E0E6A2] rounded-lg overflow-hidden w-full sm:w-72 h-14 shadow-sm mx-auto md:mx-0">
                        <button
                            className={`flex-1 text-base sm:text-lg font-medium transition ${
                                !forTwo
                                    ? "bg-white text-black"
                                    : "bg-transparent text-gray-700"
                            }`}
                            onClick={() => setForTwo(false)}
                        >
                            {t("home-page.hero.count") || "для себя"}
                        </button>
                        <button
                            className={`flex-1 text-base sm:text-lg font-medium transition ${
                                forTwo
                                    ? "bg-white text-black"
                                    : "bg-transparent text-gray-700"
                            }`}
                            onClick={() => setForTwo(true)}
                        >
                            {t("home-page.hero.count2") || "для двоих"}
                        </button>
                    </div>

                    <button
                        onClick={() => setOverlay(true)}
                        className="w-full sm:w-72 py-3 bg-[#BFD76F] hover:bg-[#a8c55d] text-white font-semibold rounded-lg transition shadow-md"
                    >
                        {t("home-page.hero.findSpecialist") ||
                            "подобрать специалиста"}
                    </button>

                    <p className="mt-4 text-gray-700 text-lg md:text-xl">
                        {t("home-page.hero.price1")}
                    </p>
                </div>
            </div>
        </section>
    );
};
