import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { API } from "../service/api.jsx";
import { Link } from "react-router-dom";

export default function Specialists() {
    const { t } = useTranslation();
    const [filters, setFilters] = useState({
        directionId: "",
        workFormat: "",
        workWith: "",
        language: "",
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
                ...(filters.workFormat && { workFormat: filters.workFormat })
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

    //////////////// this is for test purposes only

    const [specialist, setSpecialist] = useState();

    useEffect(() => {
        fetch(`${API}/specialist/${4}`)
            .then(res => res.json())
            .then(data => {
                setSpecialist(data)
                console.log(data)
            })
            .catch(error => console.error("Could not fetch clinic at id: ", error));
    }, []);

    //////////////// this is for test purposes only
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <section>
                <h2 className="font-semibold mb-4 text-center">{t("specialist.filterTitle")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <select
                        className="border p-2 rounded"
                        value={filters.directionId}
                        onChange={(e) => setFilters({ ...filters, directionId: e.target.value })}
                    >
                        <option value="">Yo'nalish</option>
                        {
                            directions.map((dr) => {
                                return (<option key={dr.id} value={dr.id}>{dr.direction}</option>)
                            })
                        }
                    </select>

                    {/* Work Format */}
                    <select
                        className="border p-2 rounded"
                        value={filters.workFormat}
                        onChange={(e) => setFilters({ ...filters, workFormat: e.target.value })}
                    >
                        <option value="">Format</option>
                        <option value="ONLINE">Online</option>
                        <option value="OFFLINE">Offline</option>
                    </select>

                    <select
                        className="border p-2 rounded"
                        value={filters.workWith}
                        onChange={(e) => setFilters({ ...filters, workWith: e.target.value })}
                    >
                        <option value="">Yosh</option>
                        <option value="ADULT">Kattalar</option>
                        <option value="CHILD">Bolalar</option>
                    </select>

                    <select
                        className="border p-2 rounded"
                        value={filters.language}
                        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                    >
                        <option value="">Til</option>
                        <option value="UZBEK">O‘zbekcha</option>
                        <option value="RUSSIAN">Ruscha</option>
                        <option value="ENGLISH">Inglizcha</option>
                    </select>
                </div>
            </section>

            <section>
                <h2 className="font-semibold mb-4">{t("specialist.searchResults")}</h2>
                {loading ? (
                    <p className="text-center">{t("loading")}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialists.map((spec) => (
                            <Link
                                to={`/specialists/specialist/${spec.id}`}
                                key={spec.id}
                                className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                            >
                                <img
                                    src={`${API}/file/files/` + spec.imageUrl}
                                    alt={spec.FIO}
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <div className="text-white">
                                        <p className="text-lg font-bold">{spec.fio}</p>
                                        <p className="text-sm">{spec.workSkills}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {specialists.length === 0 && !loading && (
                    <p className="text-center text-gray-500 mt-6">{t("specialist.notFound")}</p>
                )}
            </section>
        </div>
    );
}
