import {useState, useMemo} from "react";
import {
    Search,
    ChevronRight,
    ChevronLeft,
    Send,
    Instagram,
    Youtube,
    Globe,
} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {topClinics, womenTalkCommunityClinic} from "../data/topClinics.js";

export default function Clinics() {
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
                    placeholder="Поиск клиники..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
            </div>

            <h2 className="text-lg font-semibold mb-4">Топ 3 клиники</h2>
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
                            <div
                                className="bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-200">
                                <img
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className="w-full max-w-96 object-cover rounded-2xl"
                                />

                                <div className="flex flex-col justify-between flex-1">
                                    <h3 className="text-xl font-semibold">{clinic.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1 mb-4">
                                        <span className="font-semibold">Направление:</span>
                                        <br/>
                                        {clinic.direction}
                                    </p>

                                    <div className="border-t border-gray-200 pt-4">
                                        <h4 className="font-semibold mb-2">Главное:</h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            {clinic.description.map((item, index) => (
                                                <li key={index}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-4 text-sm text-gray-700 space-y-1">
                                        <p>
                                            <span className="font-semibold">Адрес:</span>{" "}
                                            {clinic.contacts.address}
                                        </p>
                                        <p>
                                            <span className="font-semibold">Телефон:</span>{" "}
                                            {clinic.contacts.phone}
                                        </p>
                                        <p>
                                            <span className="font-semibold">Сайт:</span>{" "}
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

                <div
                    className="clinic-prev absolute top-1/2 left-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronLeft size={18}/>
                </div>
                <div
                    className="clinic-next absolute top-1/2 right-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
                    <ChevronRight size={18}/>
                </div>
            </div>

            <div className="mt-12 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img
                        src="/images/women-talk-1.png"
                        alt={womenTalkCommunityClinic.community.name}
                        className="w-40 h-40 object-contain rounded-xl"
                    />
                    <div className="flex-1">
                        <a href={"/womantalk"}>
                            <h2 className="text-2xl font-bold mb-3">
                                {womenTalkCommunityClinic.community.name}
                            </h2>
                        </a>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <span className="font-semibold">Формат:</span>{" "}
                                {womenTalkCommunityClinic.community.format}
                            </li>
                            <li>
                                <span className="font-semibold">Город:</span>{" "}
                                {womenTalkCommunityClinic.community.city}
                            </li>
                            <li>
                                <span className="font-semibold">Миссия:</span>{" "}
                                {womenTalkCommunityClinic.community.mission}
                            </li>
                            <li>
                                <span className="font-semibold">Частота встреч:</span>{" "}
                                {womenTalkCommunityClinic.community.meeting_frequency}
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-4">
                            <a
                                href={womenTalkCommunityClinic.community.contacts.telegram}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-600 hover:text-blue-500 transition"
                            >
                                <Send className="w-6 h-6"/>
                            </a>
                            <a
                                href={womenTalkCommunityClinic.community.contacts.instagram}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-600 hover:text-pink-500 transition"
                            >
                                <Instagram className="w-6 h-6"/>
                            </a>
                            <a
                                href={womenTalkCommunityClinic.community.contacts.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-600 hover:text-red-500 transition"
                            >
                                <Youtube className="w-6 h-6"/>
                            </a>
                            <a
                                href={womenTalkCommunityClinic.community.contacts.website}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-600 hover:text-green-600 transition"
                            >
                                <Globe className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGMB1RbJQ8p167GbciAGEfPm9IgeDKJQWgxuDSlddSNmzO8A/viewform?usp=dialog"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                >
                    Заполнить анкету
                </a>
            </div>
        </div>
    );
}
