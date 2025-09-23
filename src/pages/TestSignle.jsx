import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function TestsSingle() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453]">
                    {t(`test-page.testTitle${id}`)}
                </h1>
                <p className="text-xl text-[#545453] mb-6">{t(`test-page.description${id}`)}</p>
                <div className="flex items-center justify-center rounded-[52px] w-full bg-[#24a698]">
                    <img src={`/images/Rectangle${id}.png`} alt="image" />
                </div>
            </div>
        </div>
    );
}
