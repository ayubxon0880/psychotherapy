import { useState, useMemo } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { topClinics } from "../data/topClinics.js";
import { useTranslation } from "react-i18next";

export default function Clinics() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");

    const filteredClinics = useMemo(
        () =>
            topClinics.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            ),
        [search]
    );

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder={t("clinics.searchPlaceholder")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
            </div>

            <h2 className="text-lg font-semibold mb-4">{t("clinics.top3")}</h2>
            <div className="relative px-10 rounded-3xl">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".clinic-next",
                        prevEl: ".clinic-prev",
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="mb-8"
                >
                    {filteredClinics.map((clinic) => (
                        <SwiperSlide key={clinic.id}>
                            <div className="bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-200">
                                <img
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className="w-full max-w-96 object-cover rounded-2xl"
                                />

                                <div className="flex flex-col justify-between flex-1">
                                    <h3 className="text-xl font-semibold">{clinic.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1 mb-4">
                                        <span className="font-semibold">{t("clinics.direction")}:</span>
                                        <br/>
                                        {clinic.direction}
                                    </p>

                                    <div className="border-t border-gray-200 pt-4">
                                        <h4 className="font-semibold mb-2">{t("clinics.main")}:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {clinic.description.map((item, index) => (
                                                <li key={index}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                                        <p>
                                            <span className="font-semibold">{t("clinics.address")}:</span>{" "}
                                            {clinic.contacts.address}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{t("clinics.phone")}:</span>{" "}
                                            {clinic.contacts.phone}
                                        </p>
                                        <p>
                                            <span className="font-semibold">{t("clinics.website")}:</span>{" "}
                                            <a
                                                href={clinic.contacts.website}
                                                className="text-blue-600 hover:underline"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {clinic.contacts.website}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="clinic-prev absolute top-1/2 left-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronLeft size={18}/>
                </div>
                <div className="clinic-next absolute top-1/2 right-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronRight size={18}/>
                </div>
            </div>

            <div className="text-center mt-10">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe9iVzU6_Lt2hpoO5m2bFcToienSdbnsiWhlxI-1UFoZX6UrQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                >
                    {t("clinics.fillForm")}
                </a>
            </div>
        </div>
    );
}
