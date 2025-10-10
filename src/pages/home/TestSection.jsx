import { useTranslation } from "react-i18next";

const TestSection = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <section className="w-full py-16">
                <div className="w-full bg-[#F2F3A2] p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                {t("home-page.test.title")}
                            </h2>
                            <p className="text-gray-800 text-2xl font-medium leading-relaxed mb-8">
                                {t("home-page.test.description")}
                            </p>
                            <button
                                onClick={() => console.log("Test started")}
                                className="w-full md:w-72 py-3 bg-[#a8c55d] text-white font-semibold rounded-lg transition hover:bg-[#94b352]"
                            >
                                {t("home-page.test.button")}
                            </button>
                            <p className="text-gray-600 mt-4 text-xl leading-relaxed">
                                {t("home-page.test.note")}
                            </p>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="/images/testImg.png"
                                alt="test"
                                className="w-60 md:w-80 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestSection;
