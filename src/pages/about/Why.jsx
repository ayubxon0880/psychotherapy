const Why = () => {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-left">
                    Почему мы создали этот проект
                </h1>

                <div className="w-full sm:w-2/3 lg:w-1/3 p-6 sm:p-8 rounded-[24px] bg-[#9BAB4B] shadow-md transition-all">
                    <p className="text-lg sm:text-xl text-white">
                        Каждый четвёртый человек хотя бы раз в жизни сталкивается с психологическим кризисом.
                    </p>
                </div>

                <div className="w-full sm:w-3/4 lg:w-1/2 p-6 sm:p-8 rounded-[24px] bg-[#FFE0E6] shadow-md transition-all">
                    <p className="text-lg sm:text-xl text-gray-800">
                        Но более 60% людей не обращаются за помощью — из-за страха, стыда или недоступности специалистов.
                    </p>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-left">
                    Что мы уже сделали
                </h2>

                <ul className="space-y-6 text-left">
                    {[
                        "На платформе работают только сертифицированные психологи, психотерапевты, психиатры и коучи — каждый специалист проходит проверку дипломов и личное собеседование.",
                        "Мы создали систему удобной записи онлайн и офлайн — без очередей и долгих ожиданий.",
                        "Мы сотрудничаем с клиниками, частными специалистами и корпоративными клиентами, создавая программы поддержки сотрудников.",
                        "Уже сотни обращений от людей, которые впервые решились обратиться за помощью — и остались в терапии.",
                    ].map((text, i) => (
                        <li key={i} className="flex items-start">
                            <span
                                className="text-2xl mr-3 flex-shrink-0"
                                style={{ color: '#9BAB4B' }}
                            >
                                •
                            </span>
                            <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Why;
