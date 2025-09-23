import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();
    const values = t("about-page.values", { returnObjects: true });
    return (
        <section className="max-w-6xl mx-auto p-4 my-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center md:text-left">

                <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#545453]">
                    {t("about-page.title")}
                </h1>
                <p className="text-xl text-[#545453] mb-6">{t("about-page.description")}</p>
                <br />

                <div className="flex justify-start">
                    <button
                        onClick={() => {
                            window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
                        }}
                        className="bg-[#D8F3A2] hover:bg-[#cfe99b] text-black px-6 py-3 rounded-lg">
                        {t("about-page.cta")}
                    </button>
                </div>
                <br />
                        <br />
                <img
                    src="/images/about-us.png"
                    alt={t("about-page.title")}
                    className="w-full rounded-2xl object-cover"
                />

            </div>
        </section>
    );
}
