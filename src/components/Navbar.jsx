import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
        { key: "navbar.test", href: "/test" },
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
                    <img src="/logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-sm font-medium leading-tight">
            psycho <br /> therapy.uz
          </span>
                </Link>

                {/* Right side: desktop menu, language selector (always visible), and mobile menu button */}
                <div className="flex items-center space-x-3">
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
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="language-select" className="sr-only">
                            {t("navbar.change_language") || "Change language"}
                        </label>
                        <select
                            id="language-select"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}
                            className="px-2 py-1 border rounded text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#d5beb0] appearance-none"
                        >
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

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
                </div>
            )}
        </nav>
    );
}
