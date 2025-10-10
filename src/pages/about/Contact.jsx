const Page = () => {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-start">
            <div className="w-full flex justify-center mb-16">
                <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition w-full">
                        все клиники
                    </button>
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition w-full">
                        все специалисты
                    </button>
                    <button className="bg-[#F5F5A3] text-[#1E2B32] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition w-full">
                        все сообщества
                    </button>
                </div>
            </div>

            <div className="w-full max-w-lg text-left bg-white rounded-2xl shadow-sm p-6 sm:p-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-[#1E2B32] mb-8">
                    контактная информация
                </h1>

                <div className="mb-6">
                    <p className="font-semibold text-[#1E2B32] mb-2">номер телефона</p>
                    <div className="bg-[#F5F5A3] px-4 py-3 rounded-md inline-block text-[#1E2B32] font-medium">
                        +998 77 378 63 67
                    </div>
                </div>

                <div className="mb-6">
                    <p className="font-semibold text-[#1E2B32] mb-2">эл. почта</p>
                    <div className="bg-[#F5F5A3] px-4 py-3 rounded-md inline-block text-[#1E2B32] font-medium break-all">
                        admin@psychotherapy.uz
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-[#1E2B32] mb-2">адрес</p>
                    <p className="text-[#1E2B32] font-medium">Ташкент, Узбекистан</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
