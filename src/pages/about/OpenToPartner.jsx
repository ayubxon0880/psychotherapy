import { useState } from "react";
import { useTranslation } from "react-i18next";

const OpenToPartner = () => {
    const { t } = useTranslation();
    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (index) => {
        setOpenItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const faqItems = [
        {
            question: t("about-page.openToPartner.items.0.question"),
            answer: t("about-page.openToPartner.items.0.answer"),
        },
        {
            question: t("about-page.openToPartner.items.1.question"),
            answer: t("about-page.openToPartner.items.1.answer"),
        },
        {
            question: t("about-page.openToPartner.items.2.question"),
            answer: t("about-page.openToPartner.items.2.answer"),
        },
        {
            question: t("about-page.openToPartner.items.3.question"),
            answer: t("about-page.openToPartner.items.3.answer"),
        },
    ];

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <div className="text-left mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {t("about-page.openToPartner.title")}
                    </h1>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border-2 rounded-2xl transition-all duration-300 shadow-sm ${
                                openItems.includes(index)
                                    ? "border-[#FF6AB2] bg-[#FFF4F8]"
                                    : "border-gray-200 hover:border-[#FF6AB2]/60"
                            }`}
                        >
                            {/* Button */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-5 sm:px-8 py-5 flex justify-between items-center text-left"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>

                                <span
                                    className={`transform transition-transform duration-300 flex-shrink-0 ${
                                        openItems.includes(index) ? "rotate-45" : "rotate-0"
                                    }`}
                                >
                  <svg
                      width="36"
                      height="36"
                      viewBox="0 0 112 112"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="56" cy="56" r="56" fill="#FF6AB2" />
                    <rect
                        x="54"
                        y="28"
                        width="4"
                        height="56"
                        rx="2"
                        fill="white"
                    />
                    <rect
                        x="28"
                        y="58"
                        width="4"
                        height="56"
                        rx="2"
                        transform="rotate(-90 28 58)"
                        fill="white"
                    />
                  </svg>
                </span>
                            </button>

                            {openItems.includes(index) && (
                                <div className="px-5 sm:px-8 pb-6 animate-fadeIn">
                                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpenToPartner;
