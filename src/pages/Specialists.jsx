import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { API } from "../service/api.jsx";
import { Link } from "react-router-dom";
import Loading from "../components/Loading.jsx";

export default function Specialists() {
    const { t } = useTranslation();
    const [filters, setFilters] = useState({
        directionId: "",
        workFormat: "",
        workWith: "",
        language: "",
        experience: "",
        workSchedule: "",
    });
    const [specialists, setSpecialists] = useState([]);
    const [directions, setDirections] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSpecialists = async () => {
        setLoading(true);
        try {
            const params = {
                page: 0,
                size: 12,
                sort: "FIO",
                ...(filters.directionId && { directionId: filters.directionId }),
                ...(filters.workWith && { workWith: filters.workWith }),
                ...(filters.language && { languages: filters.language }),
                ...(filters.workFormat && { workFormat: filters.workFormat }),
                ...(filters.experience && { experience: filters.experience }),
                ...(filters.workSchedule && { workSchedule: filters.workSchedule }),
            };
            const res = await axios.get(`${API}/specialist/filter`, { params });
            setSpecialists(res.data.content || []);
        } catch (err) {
            console.error("Failed to fetch specialists", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchDirections = async () => {
        try {
            const res = await axios.get(`${API}/direction/all`);
            setDirections(res.data);
        } catch (err) {
            console.error("Error fetching directions", err);
        }
    };

    useEffect(() => {
        fetchDirections();
    }, []);

    useEffect(() => {
        fetchSpecialists();
    }, [filters]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <aside className="md:col-span-1 bg-white shadow rounded-2xl p-6 space-y-5">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-3">
                        {t("specialist.filterTitle")}
                    </h2>
                    <div className="flex flex-col gap-4">
                        <select
                            className="border-gray-300 p-2"
                            value={filters.directionId}
                            onChange={(e) =>
                                setFilters({ ...filters, directionId: e.target.value })
                            }
                        >
                            <option value="">{t("specialist.direction")}</option>
                            {directions.map((dr) => (
                                <option key={dr.id} value={dr.id}>
                                    {dr.direction}
                                </option>
                            ))}
                        </select>

                        <select
                            className="border-gray-300 p-2"
                            value={filters.workFormat}
                            onChange={(e) =>
                                setFilters({ ...filters, workFormat: e.target.value })
                            }
                        >
                            <option value="">{t("specialist.format")}</option>
                            <option value="ONLINE">Online</option>
                            <option value="OFFLINE">Offline</option>
                        </select>

                        <select
                            className="border-gray-300 p-2"
                            value={filters.workWith}
                            onChange={(e) =>
                                setFilters({ ...filters, workWith: e.target.value })
                            }
                        >
                            <option value="">{t("specialist.workWith")}</option>
                            <option value="ADULT">{t("general.adults")}</option>
                            <option value="CHILD">{t("general.children")}</option>
                        </select>

                        <select
                            className="border-gray-300 p-2"
                            value={filters.language}
                            onChange={(e) =>
                                setFilters({ ...filters, language: e.target.value })
                            }
                        >
                            <option value="">{t("home-page.specialist-section.language")}</option>
                            <option value="UZBEK">O‘zbekcha</option>
                            <option value="RUSSIAN">Русский</option>
                            <option value="ENGLISH">English</option>
                        </select>

                        <input
                            type="number"
                            className="border-gray-300 rounded-xl p-2 focus:ring-2 focus:ring-indigo-500"
                            value={filters.experience}
                            onChange={(e) =>
                                setFilters({ ...filters, experience: e.target.value })
                            }
                            placeholder={t("specialist.experience")}
                        />
                    </div>
                </aside>

                {/* Results */}
                <main className="md:col-span-3">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        {t("specialist.searchResults")}
                    </h2>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                            {specialists.map((spec) => (
                                <Link
                                    to={`/specialists/specialist/${spec.id}`}
                                    key={spec.id}
                                    className="relative rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all overflow-hidden group"
                                >
                                    <img
                                        src={`${API}/file/files/` + spec.imageUrl}
                                        alt={spec.FIO}
                                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                                        <div className="text-white">
                                            <p className="text-xl font-bold">{spec.fio}</p>
                                            {/* <p className="text-base opacity-90">{spec.workSkills}</p> */}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {specialists.length === 0 && !loading && (
                        <p className="text-center text-gray-500 mt-10 text-lg">
                            {t("specialist.notFound")}
                        </p>
                    )}
                </main>
            </div>
        </div>
    );
}
