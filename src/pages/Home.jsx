import TopSpecialists from "../components/Home/TopSpecialists.jsx";

const specialists = [
    { name: "Алия Курбанова", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты" },
    { name: "Али Курбанов", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты"},
    { name: "Иван Петров", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты"},
    { name: "Мария Смирнова", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты"},
    { name: "Алина Ким", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты"},
    { name: "Али Курбанов", img: "/images/doctor.png" , description: "Психотерапевт, Ташкент 10 лет опыта · Онлайн и офлайн Специализация: тревожность, депрессия, семейные конфликты"},
];

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
            <section>
                <TopSpecialists/>
            </section>

            <section className="text-center">
                <h2 className="font-semibold mb-4">Быстрый поиск</h2>
                <div className="flex justify-center gap-3 flex-wrap">
                    {["язык", "город", "офлайн", "стиль"].map((item) => (
                        <button
                            key={item}
                            className="bg-[#4B3A34] text-white px-4 py-1 rounded-full text-sm hover:bg-[#3c2d28]"
                        >
                            {item}
                        </button>
                    ))}
                    <button className="border p-2 rounded-full hover:bg-gray-100">
                        🔍
                    </button>
                </div>
            </section>

            <section>
                <h2 className="font-semibold mb-4">Результаты поиска</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {specialists.map((spec, i) => (
                        <div
                            key={i}
                            className="relative rounded-[20px] shadow hover:shadow-lg overflow-hidden"
                        >
                            <img
                                src={spec.img}
                                alt={spec.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <div className="text-[#FFFFFF]">
                                    <p className="text-lg font-bold">{spec.name}</p>
                                    <p className="text-sm font-mono">{spec.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    <p className="text-gray-700 text-xl">
                        Приглашаем к сотрудничеству психологов, психотерапевтов, психиатров и организации. Предлагаем удобную платформу для работы, продвижение и поддержку.
                    </p>
                    <br></br>
                    <p className="text-gray-700 text-xl">
                        Напишите нам — обсудим детали!
                    </p>
                </div>
            </section>



            {/*<section className="text-center text-sm text-gray-700 max-w-2xl mx-auto">*/}
            {/*    Приглашаем к сотрудничеству психологов, психотерапевтов,*/}
            {/*    психиатров и организации. Предлагаем удобную платформу для работы,*/}
            {/*    продвижения и поддержки.*/}
            {/*    <br />*/}
            {/*    Напишите нам — обсудим детали!*/}
            {/*</section>*/}

            {/*<section className="max-w-xl mx-auto space-y-4">*/}
            {/*    <h2 className="font-semibold mb-4 text-center">*/}
            {/*        Добавить себя или стать партнером*/}
            {/*    </h2>*/}
            {/*    <textarea*/}
            {/*        placeholder="О себе..."*/}
            {/*        className="w-full border rounded-lg p-3 focus:outline-none"*/}
            {/*        rows={4}*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder="Ф.И.О"*/}
            {/*        className="w-full border rounded-lg p-3 focus:outline-none"*/}
            {/*    />*/}
            {/*    <input*/}
            {/*        type="tel"*/}
            {/*        placeholder="Номер телефона"*/}
            {/*        className="w-full border rounded-lg p-3 focus:outline-none"*/}
            {/*    />*/}
            {/*    <button className="w-full bg-[#4B3A34] text-white py-2 rounded-lg hover:bg-[#3c2d28]">*/}
            {/*        отправить*/}
            {/*    </button>*/}
            {/*</section>*/}
        </div>
    );
}
