import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const menuItems = [
        { key: "navbar.home", href: "/" },
        { key: "navbar.clinics", href: "/clinics" },
        { key: "navbar.specialists", href: "/specialists" },
        { key: "navbar.community", href: "/community" },
        { key: "navbar.about", href: "/about" },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    const handleSelectNavigate = (e) => {
        const value = e.target.value;
        if (value) {
            window.open(value, "_blank");
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8"/>
                    <span className="text-sm font-medium leading-tight">
                        psycho <br/> therapy.uz
                    </span>
                </Link>

                <select
                    onChange={handleSelectNavigate}
                    className="ml-4 px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#d5beb0]"
                    defaultValue=""
                >
                    <option value="" disabled>{t("navbar.join")}</option>
                    <option value="https://docs.google.com/forms/d/e/1FAIpQLSe9iVzU6_Lt2hpoO5m2bFcToienSdbnsiWhlxI-1UFoZX6UrQ/viewform?usp=dialog">{t("navbar.join-clinic")}</option>
                    <option value="https://docs.google.com/forms/d/e/1FAIpQLSeKO5WhYjwjGYy6TH3MwBE0Hiard_x5OceuBTHpv-Uajp-7gQ/viewform?usp=dialog">{t("navbar.join-specialist")}</option>
                    <option value="https://docs.google.com/forms/d/e/1FAIpQLSeGMB1RbJQ8p167GbciAGEfPm9IgeDKJQWgxuDSlddSNmzO8A/viewform?usp=dialog">{t("navbar.join-community")}</option>
                </select>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            to={item.href}
                            className={`px-3 py-2 rounded-md text-sm transition ${
                                location.pathname === item.href
                                    ? "bg-[#d5beb0] text-black"
                                    : "text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                            }`}
                        >
                            {t(item.key)}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        value={i18n.language}
                        className="ml-4 px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#d5beb0]"
                    >
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                    </select>
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm transition ${
                                location.pathname === item.href
                                    ? "bg-[#d5beb0] text-black"
                                    : "text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                            }`}
                        >
                            {t(item.key)}
                        </Link>
                    ))}

                    {/* Language Switcher (mobile) */}
                    <select
                        onChange={(e) => {
                            changeLanguage(e.target.value);
                            setIsOpen(false);
                        }}
                        value={i18n.language}
                        className="w-full mt-4 px-2 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#d5beb0]"
                    >
                        <option value="uz">Uz</option>
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                    </select>
                </div>
            )}
        </nav>
    );
}
