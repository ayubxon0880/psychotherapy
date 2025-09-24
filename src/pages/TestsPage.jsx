import {useTranslation} from "react-i18next";
import {TESTS_ENG, TESTS_RU, TESTS_UZ} from "../data/TESTS_UZ.js";
import {useEffect, useState} from "react";

export function TestsPage() {
    const {t, i18n} = useTranslation();
    const [tests,setTests] = useState([]);
    console.log(i18n.language);

    useEffect(() => {
        if (i18n.language === "ru"){
            setTests(TESTS_RU);
        } else if (i18n.language === "en"){
            setTests(TESTS_ENG);
        } else {
            setTests(TESTS_UZ);
        }
    }, [i18n.language]);

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453]">
                    {t("test-page.pageTitle")}
                </h1>
                <p className="text-xl text-[#545453] mb-6">{t("test-page.pageSubtitle")}</p>

                <div className="flex flex-wrap justify-center gap-4">
                    {tests.map(it => {
                        return (
                            <a
                                key={it.id}
                                className="w-full sm:w-[45%] max-w-[500px] text-center"
                                href={`/test/${it.id}`}
                            >
                                <img
                                    src={`/images/Rectangle-phq9.png`}
                                    alt={it.title}
                                    className="w-full h-auto rounded-2xl object-cover"
                                />
                                <p className="mt-2 text-lg font-bold text-[#545453]">
                                    {it.title}
                                </p>
                            </a>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}
