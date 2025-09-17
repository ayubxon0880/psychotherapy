import {useTranslation} from "react-i18next";

export const HeroSection = ({setOverlay}) => {
    const {t} = useTranslation();


    return(
        <section
            className="relative min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center px-4"
            style={{backgroundImage: "url('/images/bg-hero.png')"}}
        >
            <div className="max-w-6xl mx-auto">
                <div className="w-full md:w-2/3 text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                        {t("home-page.hero.title")}
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setOverlay(true)}
                            className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                        >
                            {t("home-page.hero.findSpecialist")}
                        </button>
                        <button
                            onClick={() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                        >
                            {t("home-page.hero.bookConsultation")}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}