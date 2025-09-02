import { useState, useEffect, useRef, useCallback } from "react";
import {specialists} from "../../data/specialists.js";


function TopSpecialists() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % specialists.length);
            }, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % specialists.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? specialists.length - 1 : prev - 1));
    }, []);

    const handleDotClick = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };

    const handleTouchMove = (e) => {
        if (!touchStart) return;
        const touchEnd = e.targetTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (diff > 50) {
            handleNext();
            setTouchStart(null);
        } else if (diff < -50) {
            handlePrev();
            setTouchStart(null);
        }
    };

    const current = specialists[currentIndex];

    return (
        <div
            className="flex flex-col items-center space-y-6 w-full max-w-7xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">
                Топ 3 <span className="font-normal">специалиста недели</span>
            </h1>

            <div className="bg-[#F6F3F0] rounded-3xl p-4 sm:p-6 flex flex-col md:flex-row items-center md:space-x-6 relative w-full shadow-sm">
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-[#4B3A34]"
                    aria-label="Предыдущий специалист"
                >
                    ‹
                </button>

                <img
                    src={current.img}
                    alt={`Портрет ${current.name}`}
                    className="w-full md:w-1/2 max-h-[600px] object-cover rounded-2xl select-none"
                    onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
                />

                {/* Content */}
                <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-lg sm:text-xl font-bold mb-3">{current.name}</h2>

                    <div className="space-y-2 text-sm sm:text-base">
                        <div>
                            <p className="text-gray-400">Направление</p>
                            <p className="text-gray-900 font-medium">{current.direction}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mt-2">Город</p>
                            <p className="text-gray-900 font-medium">{current.city}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 mt-2">Опыт</p>
                            <p className="text-gray-900 font-medium">{current.experience}</p>
                        </div>
                        <div>
                            <p className="mt-3 text-gray-900 leading-snug">
                                Специализация: {current.specialization}
                            </p>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={handleNext}
                        className="absolute right-2 md:right-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center bg-white hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-[#4B3A34]"
                        aria-label="Следующий специалист"
                    >
                        ›
                    </button>

                    <a
                        href={`https://t.me/psychotherapy_consultant_bot?start=${current.telegram_id}`}
                        className="mt-5 bg-[#d5beb0] text-white px-6 py-2 rounded-lg hover:bg-[#3c2d28] transition w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#4B3A34] text-center inline-block"
                        aria-label={`Записаться к ${current.name}`}
                    >
                        Записаться
                    </a>

                </div>
            </div>

            {/* Carousel dots */}
            <div className="flex space-x-2">
                {specialists.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? "bg-[#4B3A34]" : "bg-gray-300"
                        } hover:bg-[#4B3A34]/70 transition focus:outline-none focus:ring-2 focus:ring-[#4B3A34]`}
                        aria-label={`Перейти к специалисту ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopSpecialists;