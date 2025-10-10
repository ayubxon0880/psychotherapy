const Hero = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F2F3A2' }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Мы верим, что забота о психике должна быть такой же нормой, как поход к врачу или в спортзал
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Terapiya.life — первая платформа ментального здоровья в Узбекистане, которая соединяет людей с сертифицированными психологами, психотерапевтами, психиатрами, сексологами и коучами — онлайн и офлайн.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src="/images/about/hero.png"
                                alt="About Us"
                                className="rounded-lg w-full max-w-sm lg:max-w-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;