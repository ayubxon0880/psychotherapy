import { useTranslation } from "react-i18next";

export default function SpecialistsAndMission() {
    const { t } = useTranslation();

    return (
        <section className="py-16 px-4 md:px-10 bg-white flex justify-center">
            <div className="w-full max-w-7xl">
                <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                    {t("home-page.spec_mission.title")}
                </h2>

                <div className="flex justify-center">
                    <div className="w-full flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 justify-center rounded-3xl max-w-7xl">
                        <div className="w-full lg:w-[462px] h-auto lg:h-[450px] shadow rounded-2xl flex flex-col justify-between bg-[#F2F3A2] items-center p-4">
                            <p className="text-center font-semibold text-gray-700 mb-3 text-sm md:text-base">
                                {t("home-page.spec_mission.card1")}
                            </p>
                            <img
                                src="/images/home/hero/1.png"
                                alt="Image 1"
                                className="w-full h-64 md:h-72 object-contain rounded-lg"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-8">
                            <div className="flex flex-col sm:flex-row items-stretch gap-8">
                                <div className="bg-[#FFE0E6] w-full shadow rounded-2xl flex items-center justify-start p-6 h-48 bg-[url('/images/home/hero/2.png')] bg-no-repeat bg-right-bottom bg-contain">
                                    <p className="text-left font-semibold text-gray-700 max-w-[60%] text-sm md:text-base">
                                        {t("home-page.spec_mission.card2")}
                                    </p>
                                </div>

                                <div className="bg-[url('/images/home/hero/3.png')] bg-[#F2F3A2] w-full bg-cover bg-center bg-no-repeat shadow rounded-2xl flex items-center justify-center h-48">
                                    <p className="text-center font-semibold text-white bg-black/40 px-3 py-1 rounded-lg text-sm md:text-base">
                                        {t("home-page.spec_mission.card3")}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#FFE0E6] shadow rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 gap-4 h-auto">
                                <div className="w-full md:w-1/2 flex justify-center items-center">
                                    <img
                                        src="/images/home/hero/4.png"
                                        alt="Image 4"
                                        className="max-w-full max-h-48 object-contain rounded-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center items-center">
                                    <p className="text-center font-semibold text-gray-700 text-sm md:text-base">
                                        {t("home-page.spec_mission.card4")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


