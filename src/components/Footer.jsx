import { Instagram, Send } from "lucide-react"; // Send → Telegram ikonka

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#4C3837" }} className="text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                
                <div>
                    <h2 className="text-lg font-bold mb-2">Psychoterapy</h2>
                    <p className="text-sm text-gray-300">
                        Мы помогаем людям заботиться о своём психическом здоровье и находить квалифицированных специалистов.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Навигация</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Главная</a></li>
                        <li><a href="/clinics" className="hover:underline">Клиники</a></li>
                        <li><a href="/specialists" className="hover:underline">Специалисты</a></li>
                        <li><a href="/community" className="hover:underline">Сообщество</a></li>
                        <li><a href="/about" className="hover:underline">О нас</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Контакты</h3>
                    <p className="text-sm text-gray-300">📍 Ташкент, Узбекистан</p>
                    <p className="text-sm text-gray-300">📞 +998 77 378 63 67</p>
                    <p className="text-sm text-gray-300">✉ admin@psychoterapy.uz</p>

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

            <div className="border-t border-gray-500 text-center py-4 text-xs text-gray-300">
                © {new Date().getFullYear()} Psychoterapy. Все права защищены.
            </div>
        </footer>
    );
}
