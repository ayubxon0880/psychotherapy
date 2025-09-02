import {Search} from "lucide-react";
import {useEffect, useState} from "react";
import Select from "react-select";
import TestOverlay from "../components/Home/TestOverlay.jsx";
import { Analytics } from "@vercel/analytics/react";
import {specialists} from "../data/specialists.js";

export default function Home() {
    const [query, setQuery] = useState("");

    const suggestions = [
        "Тревога",
        "Депрессия",
        "Панические атаки",
        "Страхи и фобии",
        "Проблемы в отношениях",
        "Выгорание",
        "Самооценка",
        "Проблемы с сексуальной жизнью",
        "Детские травмы",
        "Агрессия и раздражительность",
    ];


    const optionsLocation = [
        {value: "tashkent", label: "Ташкент"},
    ];

    const optionsLanguage = [
        {value: "uz", label: "O'zbek"},
        {value: "ru", label: "Русский"},
        {value: "en", label: "English"}
    ];

    const [selectedOptionLocation, setSelectedOptionLocation] = useState(optionsLocation[0]);
    const [selectedOptionLanguage, setSelectedOptionLanguage] = useState(optionsLanguage[0]);

    const [searchText, setSearchText] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        console.log(selectedOptionLocation);
        console.log(selectedOptionLanguage);
    }, [selectedOptionLocation, selectedOptionLanguage]);

    return (
        <div className="w-full">
            <Analytics/>
            {showOverlay && <TestOverlay onClose={() => setShowOverlay(false)}/>}

            <section
                className="relative min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center px-4"
                style={{backgroundImage: "url('/images/bg-hero.png')"}}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="w-full md:w-2/3 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                            Психологическая и психотерапевтическая помощь в Узбекистане
                        </h1>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowOverlay(true)}
                                className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                            >
                                Найти специалиста
                            </button>
                            <button
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}
                                className="px-6 py-3 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg font-medium"
                            >
                                Записаться на консультацию
                            </button>

                        </div>


                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16" id="search">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">Быстрый поиск</h2>

                    <div className="flex flex-wrap gap-3 justify-center mb-6">
                        <button
                            className="px-6 md:px-14 py-3 rounded-2xl bg-[#d5beb0] text-white hover:bg-[#7A5240] transition"
                            onClick={() => setSearchText(searchText === "офлайн" ? "онлайн" : "офлайн")}
                        >
                            {searchText === "офлайн" ? "онлайн" : "офлайн"}
                        </button>
                        <Select
                            defaultValue={optionsLocation[0]}
                            onChange={(val) => setSelectedOptionLocation(val)}
                            options={optionsLocation}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: "#d5beb0",
                                    borderRadius: "1rem", // rounded-2xl
                                    padding: "0.25rem 0.5rem", // py-3 px-6 ga moslashtirilgan
                                    border: "none",
                                    minHeight: "48px", // py-3'ga mos keladi
                                    boxShadow: state.isFocused ? "0 0 0 2px #7A5240" : "none",
                                    "&:hover": {
                                        backgroundColor: "#7A5240",
                                        color: "#fff",
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: "#fff",
                                    fontWeight: "500",
                                }),
                                dropdownIndicator: (provided) => ({
                                    ...provided,
                                    color: "#7A5240",
                                    "&:hover": {
                                        color: "#7A5240",
                                    },
                                }),
                                indicatorSeparator: () => ({display: "none"}),
                                menu: (provided) => ({
                                    ...provided,
                                    borderRadius: "0.75rem",
                                    overflow: "hidden",
                                }),
                            }}
                        />
                        <Select
                            defaultValue={optionsLanguage[0]}
                            onChange={(val) => setSelectedOptionLanguage(val)}
                            options={optionsLanguage}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    backgroundColor: "#d5beb0",
                                    borderRadius: "1rem", // rounded-2xl
                                    padding: "0.25rem 0.5rem", // py-3 px-6 ga moslashtirilgan
                                    border: "none",
                                    minHeight: "48px", // py-3'ga mos keladi
                                    boxShadow: state.isFocused ? "0 0 0 2px #7A5240" : "none",
                                    "&:hover": {
                                        backgroundColor: "#7A5240",
                                        color: "#fff",
                                    },
                                }),
                                singleValue: (provided) => ({
                                    ...provided,
                                    color: "#fff",
                                    fontWeight: "500",
                                }),
                                dropdownIndicator: (provided) => ({
                                    ...provided,
                                    color: "#7A5240",
                                    "&:hover": {
                                        color: "#7A5240",
                                    },
                                }),
                                indicatorSeparator: () => ({display: "none"}),
                                menu: (provided) => ({
                                    ...provided,
                                    borderRadius: "0.75rem",
                                    overflow: "hidden",
                                }),
                            }}
                        />
                    </div>

                    <div className="flex items-center border rounded-lg overflow-hidden mb-8 mx-auto">
                        <input
                            type="text"
                            placeholder="сексолог Евгений"
                            className="flex-1 p-3 outline-none"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <div className="p-3 text-gray-500">
                            <Search size={20}/>
                        </div>
                    </div>

                    <h3 className="text-center text-2xl md:text-3xl font-bold mb-4">Опишите ваше состояние</h3>
                    <div className="flex border rounded-lg overflow-hidden max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Проблемы в отношениях"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 p-3 outline-none"
                        />
                        <div className="p-3 text-gray-500">
                            <Search size={20}/>
                        </div>
                    </div>

                    <h4 className="text-lg font-bold mt-8 mb-4">частые запросы</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-12">
                        {suggestions.map((item, i) => (
                            <li
                                key={i}
                                className="cursor-pointer px-3 py-2 border rounded-lg hover:bg-gray-100"
                                onClick={() => setQuery(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-lg font-semibold mb-6 text-center">Лучшие специалисты недели</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specialists.map((spec, i) => (
                            <div
                                key={i}
                                className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                            >
                                <img
                                    src={spec.img}
                                    alt={spec.name}
                                    className="w-full h-72 md:h-96 object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <div className="text-white">
                                        <p className="text-lg font-bold">{spec.name}</p>
                                        <p className="text-sm">{spec.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">контактная информация</h2>
                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                        <h2 className="text-xl md:text-2xl font-bold text-center">номер телефона</h2>
                        <a href="tel:+998773786367"
                           className="px-6 py-4 bg-[#d5beb0] text-white rounded-lg font-medium w-full block text-center">
                            Позвонить
                        </a>

                        <h2 className="text-xl md:text-2xl font-bold text-center">эл. почта</h2>

                        <a href="mailto:admin@psychotherapy.uz"
                           className="px-6 py-4 bg-[#d5beb0] text-white rounded-lg font-medium w-full break-words block text-center">
                            admin@psychotherapy.uz
                        </a>

                    </div>
                </div>
            </section>

            <section className="h-64 md:h-96 flex justify-center my-14 px-4">
                <div className="w-full md:w-2/3 h-full rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://yandex.uz/map-widget/v1/-/CHtE7B02"
                        width="100%"
                        height="100%"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
