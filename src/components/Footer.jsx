import { Instagram, Send } from "lucide-react"; // Send → Telegram ikonka
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer style={{ backgroundColor: "#e5ffb1e3" }} className="text-black">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-lg font-bold mb-2">{t("footer.brand")}</h2>
                    <p className="text-sm text-gray-900">
                        {t("footer.description")}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">{t("footer.navigation")}</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">{t("footer.links.home")}</a></li>
                        <li><a href="/clinics" className="hover:underline">{t("footer.links.clinics")}</a></li>
                        <li><a href="/specialists" className="hover:underline">{t("footer.links.specialists")}</a></li>
                        <li><a href="/community" className="hover:underline">{t("footer.links.community")}</a></li>
                        <li><a href="/about" className="hover:underline">{t("footer.links.about")}</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">{t("footer.contacts")}</h3>
                    <p className="text-sm text-gray-900">📍 {t("footer.address")}</p>
                    <p className="text-sm text-gray-900">📞 {t("footer.phone")}</p>
                    <p className="text-sm text-gray-900">✉ {t("footer.email")}</p>

                    <div className="flex space-x-4 mt-3">
                        <a
                            href="https://www.instagram.com/psychotherapy_uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href="https://t.me/psychotherapyuz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                        >
                            <Send size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500 text-center py-4 text-xs text-gray-900">
                © {new Date().getFullYear()} {t("footer.brand")}. {t("footer.rights")}
            </div>
        </footer>
    );
}
