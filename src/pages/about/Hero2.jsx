const Hero2 = () => {
    return (
        <div
            className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
            style={{
                backgroundImage: "url('/images/about/bgdiv.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md">
                        Вы не обязаны справляться в одиночку.
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed font-medium drop-shadow">
                        И теперь вам не нужно искать поддержку вслепую — мы уже нашли её для вас.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
