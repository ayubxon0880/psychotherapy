import {useTranslation} from "react-i18next";

export default function AboutUs() {
    const {t} = useTranslation();
    const values = t("about-page.values", {returnObjects: true});
    return (
        <section className="max-w-6xl mx-auto p-4 my-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center md:text-left">

                <h2 className="text-2xl font-semibold mb-6">
                    {t("about-page.title")}
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    {t("about-page.description")}
                </p>

                <h3 className="text-xl font-semibold mb-4">{t("about-page.valuesTitle")}</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                    {values && values.map((item, i) => (
                        <li key={i}>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center mb-8">
                    <img
                        src="/images/about-us.png"
                        alt={t("about-page.title")}
                        className="w-full max-w-md rounded-2xl object-cover"
                    />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-3">📌 {t("about-page.articlesTitle")}</h3>
                    <p className="text-gray-700 leading-relaxed">
                        {t("about-page.articlesText")}
                    </p>
                </div>

                <div className="flex justify-start">
                    <button
                        onClick={() => {
                            window.scrollBy({top: 400, left: 0, behavior: "smooth"});
                        }}
                        className="bg-[#D8F3A2] hover:bg-[#cfe99b] text-black px-6 py-3 rounded-lg">
                        {t("about-page.cta")}
                    </button>
                </div>
            </div>
        </section>
    );
}
