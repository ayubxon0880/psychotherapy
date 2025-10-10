export function Contribution() {
    return (
        <div className="bg-[#F2F3A2] py-2 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
                    Приглашаем к сотрудничеству
                </h3>
                <p className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
                    психологов, психотерапевтов, психиатров и организации. Предлагаем удобную платформу для работы, продвижение и поддержку
                </p>
                <p className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
                    Напишите нам — обсудим детали!.
                </p>
            </div>

            <div className="flex-1 flex justify-center mt-6 md:mt-0">
                <img
                    src="/images/specialist/spechero.png"
                    alt="Тест Познай себя"
                    className="max-w-full md:max-w-[350px] h-auto"
                />
            </div>
        </div>
    );
}
