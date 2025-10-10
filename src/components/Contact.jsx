import { sendMessage } from "./sendMessage.jsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [fio, setFio] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <section className="max-w-3xl mx-auto space-y-4 my-14 px-4" id="contact">
            <h2 className="font-semibold mb-4 text-center">
                {t("contact.title")}
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
                <textarea
                    placeholder={t("contact.aboutPlaceholder")}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full md:w-1/2 border border-[#FF6AB2] rounded-lg p-3 focus:outline-none"
                    rows={6}
                />

                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder={t("contact.fioPlaceholder")}
                        value={fio}
                        onChange={(e) => setFio(e.target.value)}
                        className="w-full border border-[#FF6AB2] rounded-lg p-3 focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder={t("contact.phonePlaceholder")}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-[#FF6AB2] rounded-lg p-3 focus:outline-none"
                    />
                    <button
                        onClick={() =>
                            sendMessage(fio, setFio, phone, setPhone, about, setAbout, setLoading)
                        }
                        disabled={loading}
                        className="w-full bg-[#D8F3A2] border-[#FF6AB2] text-black py-2 rounded-lg hover:bg-[#c6df95]"
                    >
                        {loading ? t("contact.sending") : t("contact.send")}
                    </button>
                </div>
            </div>
        </section>
    );
}
