import {useState, useEffect} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
import {API} from "../../service/api.jsx";

export const SpecialistSections = () => {
    const {t} = useTranslation();

    const [specialists, setSpecialists] = useState([]);
    const [directions, setDirections] = useState([]);
    const [directionId, setDirectionId] = useState("");
    const [workFormat, setWorkFormat] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // ✅ xatolik uchun state

    const fetchSpecialists = async () => {
        setLoading(true);
        setError(null); // ✅ yangi so‘rov oldidan xatoni tozalash
        try {
            const res = await axios.get(`${API}/specialist/filter`, {
                params: {
                    page: 0,
                    size: 5,
                    sort: 'id',
                    directionId: directionId || undefined,
                    workFormat: workFormat.length ? workFormat : undefined,
                    languages: languages.length ? languages : undefined,
                },
                paramsSerializer: (params) => {
                    const searchParams = new URLSearchParams();
                    Object.entries(params).forEach(([key, value]) => {
                        if (Array.isArray(value)) {
                            value.forEach((v) => searchParams.append(key, v));
                        } else if (value !== null && value !== "" && value !== undefined) {
                            searchParams.append(key, value);
                        }
                    });
                    return searchParams.toString();
                },
            });
            setSpecialists(res.data.content);
        } catch (err) {
            console.error("Error fetching specialists", err);
            setError("Ma'lumotlarni yuklashda xatolik yuz berdi ❌");
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
    }, [directionId, workFormat, languages]);

    const toggleFilter = (value, setter, state) => {
        if (state.includes(value)) {
            setter(state.filter((v) => v !== value));
        } else {
            setter([...state, value]);
        }
    };

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow mb-6">
                <h2 className="text-lg font-semibold mb-3">
                    {t("home-page.specialist-section.filter")}
                </h2>

                {/* Filterlar */}
                <div className="mb-4">
                    <label className="block font-medium mb-1">
                        {t("home-page.specialist-section.direction")}
                    </label>
                    <select
                        value={directionId}
                        onChange={(e) => setDirectionId(e.target.value)}
                        className="border rounded-lg p-2 w-full"
                    >
                        <option value="">
                            {t("home-page.specialist-section.all")}
                        </option>
                        {directions.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.direction}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">
                        {t("home-page.specialist-section.work-format")}
                    </label>
                    <div className="flex gap-4">
                        {[t("home-page.specialist-section.online"), t("home-page.specialist-section.offline")].map((format) => (
                            <label key={format} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={workFormat.includes(format)}
                                    onChange={() => toggleFilter(format, setWorkFormat, workFormat)}
                                />
                                {format}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">
                        {t("home-page.specialist-section.language")}
                    </label>
                    <div className="flex gap-4 flex-wrap">
                        {["ENGLISH", "UZBEK", "RUSSIAN"].map((lang) => (
                            <label key={lang} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={languages.includes(lang)}
                                    onChange={() => toggleFilter(lang, setLanguages, languages)}
                                />
                                {lang}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content holatlari */}
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-3 text-blue-600 font-medium">Loading...</span>
                </div>
            ) : error ? (
                <div className="text-center text-red-600 font-medium py-10">
                    {error}
                </div>
            ) : specialists.length === 0 ? (
                <div className="text-center text-gray-600 font-medium py-10">
                    Hech qanday ma'lumot topilmadi ⚠️
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specialists.map((s) => (
                        <div
                            key={s.id}
                            className="border rounded-lg shadow p-4 bg-white"
                        >
                            <img
                                src={`${API}/file/files/` + s.imageUrl}
                                alt="specialist"
                                className="w-full h-80 object-cover rounded-md mb-3"
                            />
                            <h3 className="font-bold text-lg">{s.fio || " "}</h3>
                            <p className="text-sm text-gray-600">
                                {s.directionResponse?.map(it => it.direction+" ")}
                            </p>
                            <p className="text-sm">{s.category}</p>
                            <p className="text-sm">Exp: {s.experience}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
