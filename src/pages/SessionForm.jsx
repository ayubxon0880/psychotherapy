import React, { useState } from "react";
import { useParams } from 'react-router-dom';

export default function SessionForm() {
  const [form, setForm] = useState({
    problem: "",
    fullName: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.fullName.trim() || !form.phone.trim() || !form.email.trim() || !form.problem.trim()) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/send-group/psychotherapy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem: form.problem,
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
        }),
      });

      if (!res.ok) throw new Error(await res.text() || `Server responded with ${res.status}`);

      setSuccess("So'rov muvaffaqiyatli yuborildi.");
      setForm({ problem: "", fullName: "", phone: "", email: "" });
    } catch (err) {
      setError(err.message || "Yuborishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/95 text-black rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Psychotherapy Request</h2>

        <label className="block mb-3">
          <span className="text-sm">Full name</span>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Ism Familiya"
            className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm">Phone</span>
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
          <span className="text-sm">Email</span>
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
          <span className="text-sm">Problem</span>
          <textarea
            name="problem"
            value={form.problem}
            onChange={handleChange}
            placeholder="Uyqusizlik"
            className="mt-1 block w-full rounded-lg border border-black/20 px-3 py-2 bg-white text-black h-24 resize-y"
            required
          />
        </label>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {success && <p className="text-sm text-green-700 mb-3">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-lg border text-black bg-[#D8F3A2] font-medium disabled:opacity-60"
        >
          {loading ? "Yuborilmoqda..." : "Yuborish"}
        </button>

        <p className="mt-3 text-xs text-gray-600">Bu forma hech qanday ID yoki vaqt maydonini yubormaydi.</p>
      </form>
    </div>
  );
}