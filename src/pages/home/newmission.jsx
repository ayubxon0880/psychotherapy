import React from 'react';

const NewMission = () => {
  return (
    <div className="w-full flex justify-center bg-[#FFE0E6]">

      <div className="w-[90%] lg:w-[70%] bg-[#FFE0E6] flex flex-col md:flex-row items-center rounded-xl overflow-hidden">

        <div className="w-full mt-[-90px] md:w-2/5 flex justify-center md:justify-start md:mb-0 relative">
          <img
            src="/images/home/hero/theboythinking.png"
            alt="thinking boy"
            className="w-full md:w-[110%] object-contain"
          />
        </div>

       
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl text-gray-700 font-bold mb-4">
            Если сомневаетесь
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 font-semibold leading-relaxed">
            Не обязательно сразу «лечиться» или начинать долгую терапию. Попробуйте одну встречу.
            Иногда этого уже достаточно, чтобы стало легче — или чтобы наконец понять, в чём корень проблемы.
            <br /><br />
            Готовы попробовать?
          </p>
        </div>

      </div>
    </div>
  );
};

export default NewMission;
