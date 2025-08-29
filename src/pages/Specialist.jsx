import TopSpecialists from "../components/Home/TopSpecialists.jsx";
import {specialists} from "./SpecialistsData.jsx";


export default function Specialist() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <section>
                <TopSpecialists />
            </section>

            {/* Быстрый поиск */}
            <section className="text-center">
                <h2 className="font-semibold mb-4">Быстрый поиск</h2>
                <div className="flex justify-center gap-3 flex-wrap">
                    {["язык", "город", "офлайн", "стиль"].map((item) => (
                        <button
                            key={item}
                            className="bg-[#d5beb0] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3c2d28]"
                        >
                            {item}
                        </button>
                    ))}
                    <button className="border p-2 rounded-full hover:bg-gray-100">
                        🔍
                    </button>
                </div>
            </section>

            {/* Результаты поиска */}
            <section>
                <h2 className="font-semibold mb-4">Результаты поиска</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specialists.map((spec, i) => (
                        <div
                            key={i}
                            className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                        >
                            <img
                                src={spec.img}
                                alt={spec.name}
                                className="w-full h-96 object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <div className="text-white">
                                    <p className="text-lg font-bold">{spec.name}</p>
                                    <p className="text-sm">{spec.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    <p className="text-gray-700 text-lg sm:text-xl">
                        Приглашаем к сотрудничеству психологов, психотерапевтов, психиатров и организации. Предлагаем удобную платформу для работы, продвижение и поддержку.
                    </p>
                    <p className="text-gray-700 text-lg sm:text-xl mt-4">
                        Напишите нам — обсудим детали!
                    </p>
                </div>
            </section>
        </div>
    );
}
