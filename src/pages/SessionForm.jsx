import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {API} from '../service/api';
import {useTranslation} from "react-i18next";

export default function SessionForm() {
    const [specialist, setSpecialist] = useState();
    const [timeSlot, setTimeSlot] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();
    const {t} = useTranslation();


    const [form, setForm] = useState({
        doctorUrl: id == "simplified" ? "" : "https://www.psychotherapy.uz/specialists/specialist/"+id,
        doctorFullName: "",
        problem: "",
        fullName: "",
        phone: "",
        email: "",
        timeSlot: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((s) => ({...s, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);
        if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim() || !form.problem.trim()) {
            setSuccess(false);
            return;
        }

        setLoading(true);

        const finalForm = {
            ...form,
            doctorFullName: specialist ? specialist.fio : "",
            timeSlot: "unknown",
        };

        try {
            const res = await fetch(API + "/telegram/consultation/book", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(finalForm),
            });

            if (!res.ok) throw new Error(await res.text() || `Server responded with ${res.status}`);

            setSuccess(true);
            setForm({problem: "", fullName: "", phone: "", email: ""});
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id != "simplified") {
            fetch(API + "/specialist/" + id, {
                method: "GET"
            })
                .then(res => res.json())
                .then(data => setSpecialist(data))
                .catch(err => console.log(err))
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/95 text-black rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{t("session-form.title")}</h2>
                <label className="block mb-3">
                    {
                        specialist && id != "simplified" ? (
                            <div className="mb-4">
                                <div
                                    className="text-lg bg-gray-200 p-3 rounded-lg text-gray-700 mb-4">{t("session-form.selectedId")}: {specialist.fio}</div>
                                <select
                                    className="border p-2 rounded"
                                    value={timeSlot}
                                    onChange={(e) => setTimeSlot(e.target.value)}
                                >
                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <option key={i} value={`${Date.now}:${10 + i}`}>
                                                {10 + i}:00
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        ) : ("")
                    }
                    <span className="text-sm">{t("session-form.name")}</span>
                    <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Jamshid Farmonov"
                        className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black"
                        required
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-sm">{t("session-form.phone")}</span>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+998901234567"
                        className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black"
                        required
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-sm">{t("session-form.email")}</span>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="user@example.com"
                        className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black"
                        required
                        type="email"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-sm">{t("session-form.problem")}</span>
                    <textarea
                        name="problem"
                        value={form.problem}
                        onChange={handleChange}
                        placeholder=""
                        className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black h-24 resize-y"
                        required
                    />
                </label>

                {success && (
                    <p className="text-sm text-green-700 mb-3">{t("general.success")}</p>
                )}

                {error && (
                    <p className="text-sm text-red-600 mb-3">{t("general.error")}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 rounded-lg border text-black bg-[#D8F3A2] font-medium disabled:opacity-60"
                >
                    {loading ? t("contact.sending") : t("contact.send")}
                </button>

            </form>
        </div>
    );
}