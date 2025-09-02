import { useState } from "react";

export default function ClinicForm({ onClose }) {
    const [form, setForm] = useState({
        name: "",
        address: "",
        landmark: "",
        phone: "",
        website: "",
        email: "",
        workingHours: "",
        specializations: "",
        licenseNumber: "",
        licenseDate: "",
        licenseIssuedBy: "",
        mission: "",
        features: "",
        priceFile: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setForm((prev) => ({ ...prev, priceFile: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData();

        fd.append("name", form.name);
        fd.append("address", form.address);
        fd.append("landmark", form.landmark);
        fd.append("phone", form.phone);
        fd.append("website", form.website);
        fd.append("email", form.email);
        fd.append("working_hours", form.workingHours);  // 🟢 moslash
        fd.append("specializations", form.specializations);
        fd.append("license_number", form.licenseNumber); // 🟢 moslash
        fd.append("license_date", form.licenseDate);     // 🟢 moslash
        fd.append("license_issued_by", form.licenseIssuedBy); // 🟢 moslash
        fd.append("mission", form.mission);
        fd.append("features", form.features);
        if (form.priceFile) {
            fd.append("price_file", form.priceFile);
        }

        const res = await fetch("http://localhost:8000/clinics", {
            method: "POST",
            body: fd,
        });
        const data = await res.json();
        console.log(data);
        alert("Отправлено");
        onClose();
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white max-w-3xl w-full p-6 rounded-2xl shadow-lg relative overflow-y-auto max-h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                    ✕
                </button>

                <h2 className="text-xl font-bold mb-4">Анкета клиники</h2>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Название клиники *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Адрес *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="landmark"
                        value={form.landmark}
                        onChange={handleChange}
                        placeholder="Ориентир *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Телефон *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={handleChange}
                        placeholder="Сайт"
                        className="border rounded-lg p-2"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Электронная почта *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="workingHours"
                        value={form.workingHours}
                        onChange={handleChange}
                        placeholder="Режим работы *"
                        className="border rounded-lg p-2"
                        required
                    />
                    <input
                        type="text"
                        name="specializations"
                        value={form.specializations}
                        onChange={handleChange}
                        placeholder="Специализации *"
                        className="border rounded-lg p-2"
                        required
                    />

                    {/* License */}
                    <div className="grid md:grid-cols-3 gap-2">
                        <input
                            type="text"
                            name="licenseNumber"
                            value={form.licenseNumber}
                            onChange={handleChange}
                            placeholder="№ лицензии *"
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="date"
                            name="licenseDate"
                            value={form.licenseDate}
                            onChange={handleChange}
                            className="border rounded-lg p-2"
                            required
                        />
                        <input
                            type="text"
                            name="licenseIssuedBy"
                            value={form.licenseIssuedBy}
                            onChange={handleChange}
                            placeholder="Кем выдана *"
                            className="border rounded-lg p-2"
                            required
                        />
                    </div>

                    <textarea
                        name="mission"
                        value={form.mission}
                        onChange={handleChange}
                        placeholder="Миссия / ценности"
                        className="border rounded-lg p-2"
                    />
                    <textarea
                        name="features"
                        value={form.features}
                        onChange={handleChange}
                        placeholder="Особенности"
                        className="border rounded-lg p-2"
                    />

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Прайс-лист (Word/Excel):
                        </label>
                        <input type="file" accept=".doc,.docx,.xls,.xlsx" onChange={handleFileChange} />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded-lg px-6 py-2 font-medium"
                    >
                        Отправить анкету
                    </button>
                </form>
            </div>
        </div>
    );
}
