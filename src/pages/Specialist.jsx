import { useState } from "react";
import { specialists } from "../data/specialists.js";
import TopSpecialists from "../components/Home/TopSpecialists.jsx";

export default function Specialist() {
    const [filters, setFilters] = useState({
        city: "",
        workFormat: "",
        direction: "",
    });

    const filteredSpecialists = specialists.filter((spec) => {
        const matchCity = filters.city ? spec.city === filters.city : true;
        const matchFormat = filters.workFormat ? spec.workFormat.includes(filters.workFormat) : true;
        const matchDirection = filters.direction ? spec.direction === filters.direction : true;
        return matchCity && matchFormat && matchDirection;
    });

    const uniqueCities = [...new Set(specialists.map((s) => s.city))];
    const uniqueFormats = [...new Set(specialists.flatMap((s) => s.workFormat))];
    const uniqueDirections = [...new Set(specialists.map((s) => s.direction))];

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <section>
                <TopSpecialists />
            </section>

            <section>
                <h2 className="font-semibold mb-4 text-center">Фильтр специалистов</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select
                        className="border p-2 rounded"
                        value={filters.city}
                        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    >
                        <option value="">Город</option>
                        {uniqueCities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>

                    <select
                        className="border p-2 rounded"
                        value={filters.workFormat}
                        onChange={(e) => setFilters({ ...filters, workFormat: e.target.value })}
                    >
                        <option value="">Формат</option>
                        {uniqueFormats.map((f) => (
                            <option key={f} value={f}>{f}</option>
                        ))}
                    </select>

                    <select
                        className="border p-2 rounded"
                        value={filters.direction}
                        onChange={(e) => setFilters({ ...filters, direction: e.target.value })}
                    >
                        <option value="">Направление</option>
                        {uniqueDirections.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>
            </section>

            {/* RESULTS */}
            <section>
                <h2 className="font-semibold mb-4">Результаты поиска</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSpecialists.map((spec, i) => (
                        <div
                            key={i}
                            className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                        >
                            <img
                                src={spec.img}
                                alt={spec.name}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <div className="text-white">
                                    <p className="text-lg font-bold">{spec.name}</p>
                                    <p className="text-sm">{spec.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredSpecialists.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">Ничего не найдено 😔</p>
                )}

                <div className="p-4">
                    <p className="text-gray-700 text-lg sm:text-xl">
                        Приглашаем к сотрудничеству психологов, психотерапевтов, психиатров и организации. Предлагаем удобную платформу для работы, продвижение и поддержку.
                    </p>
                    <p className="text-gray-700 text-lg sm:text-xl mt-4">
                        Напишите нам — обсудим детали!
                    </p>
                </div>
            </section>
        </div>
    );
}
