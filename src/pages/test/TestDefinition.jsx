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
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453] text-center">
                    {test?.title}
                </h1>
                <p className="text-lg md:text-xl text-[#545453] mb-8 text-center">
                    {test?.description}
                </p>

                <div className="flex justify-center">
                    <div className="rounded-3xl overflow-hidden shadow-md w-full sm:w-[70%] md:w-[60%]">
                        <img
                            src={`/images/Rectangle-phq9.png`}
                            alt="image"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <a
                        href={`/test/solve/${id}`}
                        className="px-8 py-3 bg-[#24a698] text-white font-semibold rounded-full shadow hover:bg-[#1e867a] transition"
                    >
                        {t("test-page.startTest")}
                    </a>
                </div>
            </div>
        </div>

    );
}
