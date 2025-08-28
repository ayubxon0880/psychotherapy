import {sendMessage} from "./sendMessage.jsx";
import {useState} from "react";

export default function Contact() {
    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [loading, setLoading] = useState(false);
    return(
        <section className="max-w-3xl mx-auto space-y-4 my-14 px-4" id="contact">
            <h2 className="font-semibold mb-4 text-center">
                Добавить себя или стать партнером
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Textarea */}
                <textarea
                    placeholder="О себе..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full md:w-1/2 border rounded-lg p-3 focus:outline-none"
                    rows={6}
                />

                {/* Inputs */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Ф.И.О"
                        value={fio}
                        onChange={(e) => setFio(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border rounded-lg p-3 focus:outline-none"
                    />
                    <button
                        onClick={() => sendMessage(fio,setFio,phone,setPhone,about,setAbout,setLoading)}
                        disabled={loading}
                        className="w-full bg-[#d5beb0] text-white py-2 rounded-lg hover:bg-[#3c2d28]"
                    >
                        {loading ? "Yuborilmoqda..." : "Отправить"}
                    </button>
                </div>
            </div>
        </section>
    )
}