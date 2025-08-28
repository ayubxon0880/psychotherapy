import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger va close icon uchun

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Главная", href: "/" },
        { name: "Клиника", href: "/clinics" },
        { name: "Специалист", href: "/specialists" },
        { name: "Сообщество", href: "/community" },
        { name: "О нас", href: "/about" },
    ];

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

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`px-3 py-2 rounded-md text-sm transition ${
                                location.pathname === item.href
                                    ? "bg-[#d5beb0] text-black"
                                    : "text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-sm transition ${
                                location.pathname === item.href
                                    ? "bg-[#d5beb0] text-black"
                                    : "text-gray-800 hover:bg-gray-100 hover:text-gray-600"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
