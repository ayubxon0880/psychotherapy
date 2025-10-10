import {useTranslation} from "react-i18next";

const Extramission = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div
                className="w-full rounded-[40px] md:rounded-[72px] mt-10 flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl bg-[#FFE0E6] container px-5 py-10 md:py-0">
                <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                    <img
                        src="/images/home/hero/5.png"
                        alt=""
                        className="w-48 mt-[-30px] md:w-[350px] md:mt-[-70px] object-contain"
                    />
                </div>

                <div className="w-full md:w-[60%] text-center md:text-left px-3">
                    <h1 className="text-3xl md:text-6xl text-gray-700 font-bold mb-4">
                        {t("home-page.spec_mission.mission_title")}
                    </h1>
                    <p className="text-lg md:text-3xl text-gray-700 font-semibold leading-snug md:leading-normal mb-6">
                        {t("home-page.spec_mission.mission_desc")}
                    </p>
                    <button
                        className="w-full md:w-auto px-10 md:px-[162px] py-4 md:py-[35px] text-lg md:text-3xl mt-2 bg-[#FF6AB2] text-white rounded-lg hover:bg-pink-400 duration-300">
                        {t("home-page.spec_mission.mission_btn")}
                    </button>
                </div>

            </div>
        </div>


    )
}

export default Extramission