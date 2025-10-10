import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const menuItems = [
        { key: "navbar.home", href: "/" },
        { key: "navbar.clinics", href: "/clinics" },
        { key: "navbar.specialists", href: "/specialists" },
        { key: "navbar.community", href: "/community" },
        { key: "navbar.about", href: "/about" },
        { key: "navbar.test", href: "/tests" },
    ];

    const dropdownItems = [
        { key: "navbar.clinics", label: "Клиника", href: "https://forms.gle/TLrtcmyUjt2KV3DU6" },
        { key: "navbar.specialists", label: "Специалисты", href: "https://forms.gle/KBStZm3km4qu7W2n7" },
        { key: "navbar.community", label: "Сообщество", href: "https://forms.gle/oPbgyrMscR6GUDHm6" },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-24 h-8 object-contain"
                    />
                </Link>

                <div className="hidden lg:flex items-center space-x-3 relative">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            to={item.href}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                                location.pathname === item.href
                                    ? "bg-[#D8F3A2] text-gray-900"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            }`}
                        >
                            {t(item.key)}
                        </Link>
                    ))}

                    <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                        >
                            <span>{t("navbar.partners")}</span>
                            <ChevronDown size={16} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2"
                                >
                                    {dropdownItems.map((item) => (
                                        <Link
                                            key={item.key}
                                            to={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {t(item.key) || item.label}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        value={i18n.language}
                        className="ml-4 px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D8F3A2] cursor-pointer"
                    >
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D8F3A2]"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-white border-t border-gray-200 shadow-md px-6 py-3 space-y-2"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.key}
                                to={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm transition ${
                                    location.pathname === item.href
                                        ? "bg-[#D8F3A2] text-gray-900"
                                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                }`}
                            >
                                {t(item.key)}
                            </Link>
                        ))}

                        <details className="border-t pt-2">
                            <summary className="cursor-pointer px-3 py-2 text-sm text-gray-700 font-medium flex items-center justify-between">
                                {t("navbar.more") || "More"}
                                <ChevronDown size={16} />
                            </summary>
                            <div className="pl-4 mt-2 space-y-1">
                                {dropdownItems.map((item) => (
                                    <Link
                                        key={item.key}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {t(item.label) || item.label}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        <div className="pt-2">
                            <select
                                onChange={(e) => changeLanguage(e.target.value)}
                                value={i18n.language}
                                className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D8F3A2]"
                            >
                                <option value="uz">Uzbek</option>
                                <option value="en">English</option>
                                <option value="ru">Russian</option>
                            </select>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
