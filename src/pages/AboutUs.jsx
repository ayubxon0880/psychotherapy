export default function AboutUs() {
    return (
        <section className="max-w-6xl mx-auto p-4 my-12">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center md:text-left">

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-6">О проекте Psychotherapy.uz</h2>

                {/* Text content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Мы создали платформу, чтобы объединить специалистов по психическому здоровью
                    и людей, которым нужна поддержка. Наша миссия — сделать психотерапевтическую
                    помощь доступной в Узбекистане и за его пределами.
                </p>

                {/* Values */}
                <h3 className="text-xl font-semibold mb-4">Наши ценности</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                    <li>профессионализм специалистов</li>
                    <li>конфиденциальность и уважение</li>
                    <li>доступность онлайн и офлайн</li>
                    <li>развитие сообщества и просвещение</li>
                </ul>

                {/* Image */}
                <div className="flex justify-center mb-8">
                    <img
                        src="/images/about-us.png"
                        alt="О проекте Psychotherapy.uz"
                        className="w-full max-w-md rounded-2xl object-cover"
                    />
                </div>

                {/* Articles block (placeholder) */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-3">📌 Статьи</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Здесь вы найдете историю проекта, интервью с основателями, а также нашу философию
                        и миссию: «Почему мы создали Psychotherapy.uz».
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-start">
                    <button
                        onClick={() => {
                            window.scrollBy({ top: 400, left: 0, behavior: "smooth" });
                        }}
                        className="bg-[#d5beb0] hover:bg-[#a5beb0] text-white px-6 py-3 rounded-lg">
                        записаться на прием
                    </button>
                </div>
            </div>
        </section>
    );
}
