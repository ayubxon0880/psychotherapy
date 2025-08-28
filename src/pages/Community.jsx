// src/pages/Community.jsx
import { useState } from "react";
import { Search } from "lucide-react";

export default function Community() {
    const [search, setSearch] = useState("");

    const communities = [
        {
            id: 1,
            name: "Точка опоры",
            direction: "Психотерапия, психология",
            city: "Ташкент",
            description: [
                "Современный центр",
                "Предоставление и приказ речи.",
                "Обездвижение, остановка и учет.",
                "Медицинский опыт с экономики",
                "Учебной работы с применением",
                "распределенных диагностиков,",
                "ГИТЭО зависимостью",
            ],
            image: "/images/doctor.png",
        },
        {
            id: 2,
            name: "Центр Paritet",
            direction: "Психологическая помощь",
            city: "Ташкент",
            description: [
                "Индивидуальные и групповые консультации",
                "Онлайн-поддержка",
                "Образовательные программы",
            ],
            image: "/images/doctor.png",
        },
    ];

    const articles = [
        {
            id: 1,
            title: "10 международных сообществ по психическому здоровью",
            excerpt: "Подборка мировых групп, где можно найти поддержку и знания.",
            link: "#",
        },
        {
            id: 2,
            title: "Новости Ассоциации психиатров Узбекистана",
            excerpt: "Последние события и конференции локальной ассоциации.",
            link: "#",
        },
    ];

    const filtered = communities.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-4">
            {/* Search */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Поиск сообщества..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            {/* Communities */}
            <h2 className="text-xl font-semibold mb-4">Наши сообщества</h2>
            <div className="space-y-6">
                {filtered.map((c) => (
                    <div
                        key={c.id}
                        className="bg-gray-100 rounded-3xl p-4 flex flex-col md:flex-row items-start gap-6"
                    >
                        <img
                            src={c.image}
                            alt={c.name}
                            className="w-full md:w-64 h-64 object-cover rounded-lg"
                        />

                        <div className="flex flex-col justify-between h-full flex-1">
                            <div>
                                <h3 className="text-lg font-semibold">{c.name}</h3>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Город:</span> {c.city}
                                </p>
                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="font-semibold mb-2">Главное:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        {c.description.map((item, index) => (
                                            <li key={index}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <button className="mt-4 bg-[#d5beb0] text-white px-5 py-2 rounded-lg hover:bg-[#5A3620] transition self-start">
                                Вступить
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Articles & News */}
            <h2 className="text-xl font-semibold mt-12 mb-4">Статьи и новости</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {articles.map((a) => (
                    <div
                        key={a.id}
                        className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{a.excerpt}</p>
                        <a
                            href={a.link}
                            className="text-[#5A3620] text-sm font-medium hover:underline"
                        >
                            Читать →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
