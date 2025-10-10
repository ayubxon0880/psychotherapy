export function Tests() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Тесты</h2>
                <p className="text-gray-700 font-semibold mb-8 max-w-2xl">
                    На нашем сайте вы можете пройти проверенные психологические тесты,
                    которые помогут лучше понять себя, свои сильные стороны и зоны для развития.
                </p>

                <div className="bg-[#F2F3A2] p-12 rounded-2xl flex flex-col md:flex-row items-end justify-between">
                    <div className="md:w-2/3">
                        <h3 className="text-3xl font-semibold text-gray-800 mb-2">Тест «Познай себя»</h3>
                        <p className="text-xl font-semibold mb-4">
                            Пройдите наш тест «Познай себя» и откройте новые стороны своей личности.
                            Узнайте сильные стороны, скрытые таланты и получите советы для личного развития.
                        </p>
                        <br/>
                        <a
                            href={"/tests-all"}
                            className="bg-[#9BAB4B] text-white font-medium py-4 px-24 rounded-lg shadow hover:bg-[#89A857] transition"
                        >
                            пройти тест
                        </a>
                    </div>

                    <div className="md:w-1/3 flex justify-center self-end">
                        <img
                            src="/images/test/hero.png"
                            alt="Тест Познай себя"
                            className="relative top-12 max-w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
