import { useState, useEffect } from "react";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API } from "../service/api.jsx";
import { SpecialistSections } from "./home/SpecialistSections.jsx";

export default function Clinics() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [topClinics, setTopClinics] = useState([]);
    const [allClinics, setAllClinics] = useState([]);

    const fetchTopClinics = async () => {
        try {
            const res = await axios.get(`${API}/clinic/filter`, {
                params: { page: 0, size: 3, sort: 'id', name: search, direction: "asc" },
            });
            setTopClinics(res.data.content);
        } catch (err) {
            console.error("Error fetching top clinics", err);
        }
    };

    const fetchAllClinics = async () => {
        try {
            const res = await axios.get(`${API}/clinic/filter`, {
                params: { page: 0, size: 20, sort: 'id', name: search, direction: "asc" },
            });
            setAllClinics(res.data.content);
        } catch (err) {
            console.error("Error fetching all clinics", err);
        }
    };

    useEffect(() => {
        fetchTopClinics();
        fetchAllClinics();
    }, [search]);

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
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <h2 className="text-lg font-semibold mb-4">{t("clinics.top3")}</h2>
            <div className="relative px-4 sm:px-6 lg:px-10 rounded-3xl max-w-2xl m-auto">
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
                    {topClinics.map((clinic) => (
                        <SwiperSlide key={clinic.id}>
                            <ClinicCard clinic={clinic} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="clinic-prev absolute top-1/2 left-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronLeft size={18} />
                </div>
                <div className="clinic-next absolute top-1/2 right-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronRight size={18} />
                </div>
            </div>

            <SpecialistSections hasFilter={false} count={6}/>

            {/* <h2 className="text-lg font-semibold mt-10 mb-4">{t("clinics.all")}</h2>
            {allClinics.length === 0 ? (
                <p className="text-center text-gray-500">{t("clinics.noData")}</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {allClinics.map((clinic) => (
                        <ClinicCard key={clinic.id} clinic={clinic} />
                    ))}
                </div>
            )} */}

            <div className="text-center mt-10">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe9iVzU6_Lt2hpoO5m2bFcToienSdbnsiWhlxI-1UFoZX6UrQ/viewform?usp=dialog"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-[#D8F3A2] hover:bg-[#c5dd94] text-black rounded-lg font-medium"
                >
                    {t("clinics.fillForm")}
                </a>
            </div>
        </div>
    );
}

function ClinicCard({ clinic }) {
    const { t } = useTranslation();
    return (
        <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 border border-gray-200 shadow-sm">
            <img
                src={clinic.imageUrl !== null ? API + "/file/files/" + clinic.imageUrl : "/images/clinic.png"}
                alt={clinic.name}
                className="w-full h-96 object-cover rounded-2xl"
            />

            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{clinic.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-2">
                    <span className="font-semibold">{t("clinics.direction")}:</span>{" "}
                    {clinic.directions?.map((d) => d.direction).join(", ")}
                </p>

                <p className="text-sm text-gray-700">
                    <span className="font-semibold">{t("clinics.address")}:</span> {clinic.address}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">{t("clinics.phone")}:</span> {clinic.phoneNumber}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-semibold">{t("clinics.website")}:</span>{" "}
                    <a
                        href={clinic.website}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {clinic.website}
                    </a>
                </p>
            </div>
        </div>
    );
}
