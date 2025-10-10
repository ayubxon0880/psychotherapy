import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../service/api.jsx";
import Loading from "../../components/Loading.jsx";

export default function SpecialistsTop6() {
    const [loading, setLoading] = useState(true);
    const [specialists, setSpecialists] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchSpecialists = async () => {
            try {
                const params = { page: 0, size: 6, sort: "id" };
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

    if (loading) return <Loading />;

    // 🔍 FIO bo‘yicha filter
    const filteredSpecialists = specialists.filter((spec) =>
        spec.fio.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-16 px-4 md:px-10 bg-white flex justify-center">
            <div className="w-full max-w-7xl">

                {/* 🔹 Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
                        язык
                    </button>
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
                        город
                    </button>
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
                        офлайн
                    </button>
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition">
                        спец
                    </button>
                </div>

                {/* 🔍 Search input */}
                <div className="mb-10">
                    <input
                        type="text"
                        placeholder="Поиск специалиста..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5F5A3] transition"
                    />
                </div>

                {/* 🔹 Title */}
                <div className="flex justify-center items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Результаты поиска
                    </h2>
                </div>

                {/* 🔹 Specialists Grid */}
                {filteredSpecialists.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredSpecialists.map((spec) => (
                            <Link
                                to={`/specialists/specialist/${spec.id}`}
                                key={spec.id}
                                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <img
                                    src={`${API}/file/files/${spec.imageUrl}`}
                                    alt={spec.fio}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {spec.fio}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-medium">
                                        {spec.directionResponse[0]?.direction}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-10 text-lg">
                        Специалист не найден
                    </p>
                )}
            </div>
        </section>
    );
}
