import { womenTalkCommunityClinic } from "../data/topClinics.js";

export default function WomanTalk() {
    const { community, organizer, participants } = womenTalkCommunityClinic;

    const logos = [
        "/images/women-talk-1.png",
        "/images/women-talk-2.png",
        "/images/women-talk-3.png"
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-12">
            {/* Header */}
            <div className="text-center space-y-3">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {community.name}
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">{community.mission}</p>
            </div>

            {/* Logos */}
            <div className="flex justify-center gap-6 flex-wrap">
                {logos.map((logo, idx) => (
                    <div
                        key={idx}
                        className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-white shadow-md rounded-2xl p-3 hover:scale-105 hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={logo}
                            alt={`WomenTalk Logo ${idx + 1}`}
                            className="object-contain max-h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Community Info */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">О сообществе</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-semibold">Формат:</span> {community.format}</p>
                    <p><span className="font-semibold">Город:</span> {community.city}</p>
                    <p><span className="font-semibold">Адрес:</span> {community.address}</p>
                    <p><span className="font-semibold">Ориентир:</span> {community.location_reference}</p>
                    <p><span className="font-semibold">Частота встреч:</span> {community.meeting_frequency}</p>
                </div>

                <div>
                    <h3 className="font-semibold mt-6 mb-2">Ключевые направления:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {community.key_focus.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mt-6 mb-2">Контакты:</h3>
                    <ul className="space-y-1">
                        <li><a href={community.contacts.telegram} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Telegram</a></li>
                        <li><a href={community.contacts.instagram} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href={community.contacts.youtube} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">YouTube</a></li>
                        <li><a href={community.contacts.website} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">Сайт</a></li>
                        <li>Email: <span className="text-gray-800">{community.contacts.email}</span></li>
                    </ul>
                </div>
            </section>

            {/* Organizer Info */}
            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Организатор</h2>
                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Имя:</span> {organizer.full_name}</p>
                    <p><span className="font-semibold">Роль:</span> {organizer.role}</p>
                    <p><span className="font-semibold">Опыт:</span> {organizer.experience}</p>
                    <p><span className="font-semibold">О себе:</span> {organizer.bio}</p>
                    <p><span className="font-semibold">Языки:</span> {organizer.languages.join(", ")}</p>
                    <p><span className="font-semibold">Формат встреч:</span> {organizer.format}</p>
                    <p>
                        <span className="font-semibold">Instagram:</span>{" "}
                        <a href={organizer.socials.instagram} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                            {organizer.socials.instagram}
                        </a>
                    </p>
                </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-4">
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Участницы</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
                    <p><span className="font-semibold">Целевая аудитория:</span> {participants.target_audience}</p>
                    <p><span className="font-semibold">Условия участия:</span> {participants.conditions}</p>
                    <p><span className="font-semibold">Стоимость:</span> {participants.price}</p>
                    <p><span className="font-semibold">Среднее количество:</span> {participants.avg_participants}</p>
                    <p><span className="font-semibold">Возраст:</span> {participants.age_limit}</p>
                    <p>
                        <span className="font-semibold">Регистрация:</span>{" "}
                        {participants.registration_required ? "Обязательна" : "Не требуется"}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mt-6 mb-2">Правила участия:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {participants.rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
