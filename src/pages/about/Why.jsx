import React from "react";
import {useTranslation} from "react-i18next";

const Why = () => {
    const {t} = useTranslation();

    const listItems = [
        t("about-page.why.list.0"),
        t("about-page.why.list.1"),
        t("about-page.why.list.2"),
        t("about-page.why.list.3"),
    ];

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-left">
                    {t("about-page.why.title1")}
                </h1>

                <div
                    className="w-full sm:w-2/3 lg:w-1/3 p-6 sm:p-8 rounded-[24px] bg-[#9BAB4B] shadow-md transition-all">
                    <p className="text-lg sm:text-xl text-white">{t("about-page.why.card1")}</p>
                </div>

                <div
                    className="w-full sm:w-3/4 lg:w-1/2 p-6 sm:p-8 rounded-[24px] bg-[#FFE0E6] shadow-md transition-all">
                    <p className="text-lg sm:text-xl text-gray-800">{t("about-page.why.card2")}</p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left">
                    {t("about-page.why.title2")}
                </h2>

                <ul className="space-y-6 text-left">
                    {listItems.map((text, i) => (
                        <li key={i} className="flex items-start">
              <span
                  className="text-2xl mr-3 flex-shrink-0"
                  style={{color: "#9BAB4B"}}
              >
                •
              </span>
                            <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Why;
