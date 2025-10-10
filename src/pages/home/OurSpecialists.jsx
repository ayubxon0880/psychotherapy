import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API } from "../../service/api.jsx";
import Loading from "../../components/Loading.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurSpecialists = () => {
    const { t } = useTranslation();
    const [specialists, setSpecialists] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchSpecialists = async () => {
        try {
            const res = await axios.get(`${API}/specialist/filter`, {
                params: { page: 1, size: 3, sort: "FIO" },
            });
            setSpecialists(res.data.content || []);
        } catch (error) {
            console.error("Failed to fetch specialists:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpecialists();
    }, []);

    if (loading) return <Loading />;

    return (
        <section className="py-16 bg-white relative">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#545453] mb-3">
                    {t("home-page.ourSpecialists.title")}
                </h1>
                <p className="text-lg md:text-xl text-[#545453]">
                    {t("home-page.ourSpecialists.subtitle") ||
                        "Выберите подходящего специалиста"}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {specialists.map((spec, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="h-64 w-full overflow-hidden">
                                    <img
                                        src={`${API}/file/files/` + spec.imageUrl}
                                        alt={spec.fio}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h2 className="font-semibold text-gray-800">
                                        {spec.fio}
                                    </h2>
                                    <p className="text-gray-500 mt-1">{spec.fio}</p>
                                </div>
                            </div>
                            <br/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default OurSpecialists;
