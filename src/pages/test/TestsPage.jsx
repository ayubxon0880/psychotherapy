import {useTranslation} from "react-i18next";
import {TESTS_ENG, TESTS_RU, TESTS_UZ} from "../../data/TESTS_UZ.js";
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
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453] text-center">
                    {t("test-page.pageTitle")}
                </h1>
                <p className="text-xl text-[#545453] mb-10 text-center">
                    {t("test-page.pageSubtitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {tests.map(it => {
                        return (
                            <a
                                key={it.id}
                                href={`/test/${it.id}`}
                                className="block p-6 rounded-2xl shadow-md bg-white hover:bg-gray-50 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <p className="text-lg font-semibold text-[#545453] mb-2">
                                    {it.title}
                                </p>
                                <span className="text-sm text-gray-500">
                            {t("test-page.startNow")}
                        </span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
