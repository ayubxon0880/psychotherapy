import {useState} from "react";
import {useTranslation} from "react-i18next";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function FAQ() {
    const {t} = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = t("home-page.faq.questions", {returnObjects: true});

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-4xl mx-auto py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
                {t("home-page.faq.title")}
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-2xl shadow-sm p-4 cursor-pointer bg-white"
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{faq.q}</h3>
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5"/>
                            ) : (
                                <ChevronDown className="w-5 h-5"/>
                            )}
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-gray-600">{faq.a}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
