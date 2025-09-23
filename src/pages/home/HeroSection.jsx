import { useTranslation } from "react-i18next";
import { useState } from "react";

export const HeroSection = ({ setOverlay }) => {
    const { t } = useTranslation();
    const [moved, setMoved] = useState(false);

    return (
        <section
            className="relative min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center px-4"
            style={{
                backgroundImage: `
      url('/images/bghero.png'),
      linear-gradient(to bottom, #F2F3A2 0%, rgba(255,255,255,0.8) 100%)
    `,
            }}
        >
            <div className="wrapper max-w-7xl w-full m-auto">
                <div className="relative z-10 max-w-[90%] ml-2">
                    <div className="max-w-6xl w-full md:w-2/3 text-black">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-md">
                            {t("home-page.hero.title")}
                        </h1>
                        <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 max-w-[28rem]">
                            {t("home-page.hero.title2")}
                        </h3>

                        <div className="flex flex-col items-center md:items-start gap-4">
                            {/* Toggle Switch */}
                            <div
                                className="flex bg-gray-300 w-64 relative h-14 rounded-xl cursor-pointer"
                                onClick={() => setMoved(prev => !prev)}
                            >
                                <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 text-lg">
                                    {t("home-page.hero.count")}
                                </div>
                                <div className="absolute right-1/4 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 text-lg">
                                    {t("home-page.hero.count2")}
                                </div>

                                <div
                                    className={`bg-white absolute top-1/2 -translate-y-1/2 w-1/2 h-full border-4 rounded-xl border-gray-300 transition-all duration-500 ease-in-out`}
                                    style={{
                                        left: moved ? "50%" : "0",
                                    }}
                                />
                            </div>

                            {/* Button */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => setOverlay(true)}
                                    className="px-6 py-3 bg-[#D8F3A2] hover:bg-[#c8e096] text-black rounded-lg font-medium"
                                >
                                    {t("home-page.hero.findSpecialist")}
                                </button>
                            </div>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <button
                                    className="px-6 py-3 bg-[#e5ffb1e3] hover:bg-[#c8e096] text-gray-800 rounded-lg font-medium"
                                >
                                    129900 somdan
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
