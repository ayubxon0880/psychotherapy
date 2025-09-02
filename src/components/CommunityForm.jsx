// src/components/CommunityForm.jsx
import { useState } from "react";

export default function CommunityForm({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        format: "онлайн",
        city: "",
        address: "",
        landmark: "",
        phone: "",
        website: "",
        email: "",
        meetingSchedule: "",
        mission: "",
        directions: "",
        photos: null,
        video: null,
        organizerName: "",
        organizerPhoto: null,
        organizerRole: "",
        organizerExperience: "",
        organizerBio: "",
        organizerLanguages: "",
        organizerFormat: "онлайн",
        organizerSocial: "",
        targetAudience: "",
        participationConditions: "",
        participationCost: "",
        participantsCount: "",
        ageLimit: "",
        registrationRequired: "Да",
        rules: "",
        additionalInfo: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted form:", form);
        alert("Анкета отправлена!");
        onClose(); // Закрыть форму
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-10 z-50 overflow-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg max-w-3xl w-full space-y-4"
            >
                <h2 className="text-2xl font-semibold mb-4">Анкета сообщества</h2>

                {/* Основная информация */}
                <h3 className="font-semibold">1. Основная информация</h3>
                <input name="name" placeholder="Название сообщества *" value={form.name} onChange={handleChange} className="w-full border rounded p-2"/>
                <select name="format" value={form.format} onChange={handleChange} className="w-full border rounded p-2">
                    <option>онлайн</option>
                    <option>оффлайн</option>
                    <option>гибрид</option>
                </select>
                <input name="city" placeholder="Город/регион деятельности *" value={form.city} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="address" placeholder="Адрес (если оффлайн встречи)" value={form.address} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="landmark" placeholder="Ориентир/место проведения" value={form.landmark} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="phone" placeholder="Контактный телефон/Telegram *" value={form.phone} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="website" placeholder="Сайт или соцсети" value={form.website} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="email" placeholder="Электронная почта *" value={form.email} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="meetingSchedule" placeholder="Режим встреч" value={form.meetingSchedule} onChange={handleChange} className="w-full border rounded p-2"/>
                <textarea name="mission" placeholder="Миссия/ценности сообщества" value={form.mission} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="directions" placeholder="Ключевые направления" value={form.directions} onChange={handleChange} className="w-full border rounded p-2"/>
                <input type="file" name="photos" onChange={handleChange} className="w-full"/>
                <input type="file" name="video" onChange={handleChange} className="w-full"/>

                {/* Организаторы */}
                <h3 className="font-semibold mt-4">2. Информация об организаторах</h3>
                <input name="organizerName" placeholder="Ф.И.О. организатора *" value={form.organizerName} onChange={handleChange} className="w-full border rounded p-2"/>
                <input type="file" name="organizerPhoto" onChange={handleChange} className="w-full"/>
                <input name="organizerRole" placeholder="Роль *" value={form.organizerRole} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="organizerExperience" placeholder="Опыт *" value={form.organizerExperience} onChange={handleChange} className="w-full border rounded p-2"/>
                <textarea name="organizerBio" placeholder="Описание *" value={form.organizerBio} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="organizerLanguages" placeholder="Языки ведения встреч" value={form.organizerLanguages} onChange={handleChange} className="w-full border rounded p-2"/>
                <select name="organizerFormat" value={form.organizerFormat} onChange={handleChange} className="w-full border rounded p-2">
                    <option>онлайн</option>
                    <option>оффлайн</option>
                </select>
                <input name="organizerSocial" placeholder="Соцсети организатора" value={form.organizerSocial} onChange={handleChange} className="w-full border rounded p-2"/>

                {/* Участники */}
                <h3 className="font-semibold mt-4">3. Участники и условия участия</h3>
                <input name="targetAudience" placeholder="Целевая аудитория *" value={form.targetAudience} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="participationConditions" placeholder="Условия участия *" value={form.participationConditions} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="participationCost" placeholder="Стоимость участия" value={form.participationCost} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="participantsCount" placeholder="Количество участников *" value={form.participantsCount} onChange={handleChange} className="w-full border rounded p-2"/>
                <input name="ageLimit" placeholder="Возрастные ограничения" value={form.ageLimit} onChange={handleChange} className="w-full border rounded p-2"/>
                <select name="registrationRequired" value={form.registrationRequired} onChange={handleChange} className="w-full border rounded p-2">
                    <option>Да</option>
                    <option>Нет</option>
                </select>
                <textarea name="rules" placeholder="Правила участия" value={form.rules} onChange={handleChange} className="w-full border rounded p-2"/>

                {/* Дополнительно */}
                <h3 className="font-semibold mt-4">4. Дополнительно</h3>
                <textarea name="additionalInfo" placeholder="Дополнительно" value={form.additionalInfo} onChange={handleChange} className="w-full border rounded p-2"/>

                {/* Кнопки */}
                <div className="flex justify-end gap-2 mt-4">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Отмена</button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Отправить</button>
                </div>
            </form>
        </div>
    );
}
