import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { API } from "../../service/api.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function TopSpecialistCard() {
    const [loading, setLoading] = useState(true);
    const [specialists, setSpecialists] = useState([]);

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                const params = { page: 1, size: 3, sort: "id" };
                const res = await axios.get(`${API}/specialist/filter`, { params });
                setSpecialists(res.data.content || []);
            } catch (err) {
                console.error("Failed to fetch specialists", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSpecialists();
    }, []);

    const settings = {
        dots: true,
        infinite: specialists.length > 1,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: specialists.length > 1,
        autoplaySpeed: 4000,
        arrows: true,
        adaptiveHeight: true,
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
                Загрузка...
            </div>
        );
    }

    if (!specialists.length) {
        return (
            <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
                Нет специалистов для отображения
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button
                className={`${className} bg-gray-200 hover:bg-gray-300 text-gray-800 w-10 h-10 rounded-full flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 z-10`}
                style={{ ...style }}
                onClick={onClick}
            >
                ➡
            </button>
        );
    }

    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-12 text-center">
                    Топ 3 специалиста недели
                </h2>

                <Slider {...settings} nextArrow={<NextArrow />}>
                    {specialists.map((s) => (
                        <div key={s.id || s.fio} className="px-2 sm:px-4">
                            <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">

                                {/* Specialist Image */}
                                <div className="md:w-1/2 flex-shrink-0">
                                    <div className="w-full h-64 md:h-auto aspect-[4/3]">
                                        <img
                                            src={`${API}/file/files/${s.imageUrl}`}
                                            alt={s.fio || "Специалист"}
                                            className="w-full h-full object-cover rounded-l-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Specialist Info */}
                                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                            {s.fio || "Имя не указано"}
                                        </h3>

                                        <div className="space-y-2 mb-4 text-gray-600 text-sm sm:text-base">
                                            <p>
                                                <span className="font-medium text-gray-400">Направление:</span> {s.directionResponse?.[0]?.direction || "—"}
                                            </p>
                                            <p>
                                                <span className="font-medium text-gray-400">Опыт:</span> {s.experience ? `${s.experience} лет` : "—"}
                                            </p>
                                        </div>

                                        <p className="text-gray-700 text-sm sm:text-[15px] leading-snug">
                                            <span className="font-medium text-gray-400">График работы:</span> {s.workSchedule || "—"}
                                        </p>
                                    </div>

                                    <div className="mt-6 flex justify-center sm:justify-start">
                                        <button className="bg-[#F2F3A2] text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-[#e8e97d] transition-colors">
                                            Записаться
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

