import {useTranslation} from "react-i18next";
import {useState} from "react";

export const HeroSection = ({ setOverlay }) => {
    const { t } = useTranslation();
    const [moved, setMoved] = useState(false);

    return (
        <section
            className="relative min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center px-4"
            style={{ backgroundImage: "url('/images/Vector3.svg')" }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="w-full md:w-2/3 text-black">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                        {t("home-page.hero.title")}
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl mb-4">
                        {t("home-page.hero.title2")}
                    </h3>

                    <div
                        className="flex bg-gray-300 w-64 relative h-20 rounded-2xl mb-2 mt-6 cursor-pointer"
                        onClick={() => setMoved(prev => !prev)}
                    >
                        <div className="absolute left-1/4 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-lg">
                            {t("home-page.hero.count")}
                        </div>
                        <div className="absolute right-1/4 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-lg">
                            {t("home-page.hero.count2")}
                        </div>

                        <div
                            className={`bg-white absolute top-1/2 -translate-y-1/2 w-1/2 h-full border-4 rounded-2xl border-gray-300 transition-all duration-500 ease-in-out`}
                            style={{
                                left: moved ? "50%" : "0",
                            }}
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setOverlay(true)}
                            className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                        >
                            {t("home-page.hero.findSpecialist")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
