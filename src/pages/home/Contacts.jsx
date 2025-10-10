import React from 'react';

const Contacts = () => {
  const cards = [
    "Как проходит онлайн-консультация?",
    "Как выбрать подходящего специалиста?",
    "Конфиденциально ли это?",
    "Сколько стоит консультация?",
    "Подходит ли онлайн-терапия для серьёзных проблем?",
    "Можно ли отменить или перенести запись?"
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">

      <button className="
        bg-[#F6F39E]
        text-black
        rounded-[16px]
        w-[340px]
        h-[55px]
        flex
        items-center
        justify-center
        text-[16px]
        font-medium
        mb-10
      ">
        записаться на первую сессию
      </button>

      <h2 className="text-[28px] font-bold text-[#0B1F33] mb-10">
        Частые запросы
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-[90%] max-w-[1100px]">
        {cards.map((text, idx) => (
          <div
            key={idx}
            className="
              border
              border-[#FF6AB2]
              rounded-[16px]
              px-5
              py-4
              text-[#0B1F33]
              text-[16px]
              font-medium
              text-center
              hover:shadow-md
              transition
            "
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
