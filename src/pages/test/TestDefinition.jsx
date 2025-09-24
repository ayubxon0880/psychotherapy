import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {TESTS_ENG, TESTS_RU, TESTS_UZ} from "../../data/TESTS_UZ.js";
import {useEffect, useState} from "react";

export default function TestDefinition() {
    const { t,i18n } = useTranslation();
    const { id } = useParams();
    const [test,setTest] = useState(null);

    useEffect(() => {
        if (i18n.language === "ru"){
            setTest(TESTS_RU.find(t => t.id === id));
        } else if (i18n.language === "en"){
            setTest(TESTS_ENG.find(t => t.id === id));
        } else {
            setTest(TESTS_UZ.find(t => t.id === id));
        }
    }, [i18n.language, id]);

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453]">
                    {test?.title}
                </h1>
                <p className="text-xl text-[#545453] mb-6">
                    {test?.description}
                </p>
                <div className="flex items-center justify-center rounded-[52px] w-full bg-[#24a698]">
                    <img src={`/images/Rectangle-phq9.png`} alt="image" />
                </div>

                <div className="mt-8 flex justify-center">
                    <a
                        href={`/test/solve/${id}`}
                        className="px-6 py-3 bg-[#24a698] text-white font-semibold rounded-full shadow hover:bg-[#1e867a] transition"
                    >
                        {t("test-page.startTest")}
                    </a>
                </div>
            </div>
        </div>
    );
}
