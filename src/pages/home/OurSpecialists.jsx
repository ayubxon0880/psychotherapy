import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurSpecialists = () => {
  const { t } = useTranslation();

  return (
    <div className="m-auto relative">
      <br />
      <h1 className="text-center text-3xl font-bold text-[#545453]">
        {t("home-page.ourSpecialists.title")}
      </h1>
      <br />
      <h1 className="text-center text-xl font-bold text-[#545453]">
        {t("home-page.ourSpecialists.subtitle")}
      </h1>
      <br /><br />
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".specialist-next",
          prevEl: ".specialist-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        className="mb-8 m-auto max-w-3xl"
      >
        {/* Slides */}
        {[1, 2, 3].map((i) => (
          <SwiperSlide
            key={i}
            className="text-center flex items-center flex-col gap-8 mr-0"
          >
            <img
              src="/images/image16.png"
              alt="person talking"
              className="max-w-md"
            />
            <div className="text-2xl max-w-96 text-[#545453]">
              {t("home-page.ourSpecialists.slideText")}
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="specialist-prev absolute top-1/2 left-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
          <ChevronLeft size={18} />
        </div>
        <div className="specialist-next absolute top-1/2 right-0 z-10 bg-white p-2 rounded-full shadow cursor-pointer -translate-y-1/2">
          <ChevronRight size={18} />
        </div>
        <div className="swiper-pagination !bottom-0 relative z-20 mt-4" />
      </Swiper>

      <a
        // href="https://t.me/psychotherapy_consultant_bot?start=8076698584"
        href="session-form"
        className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center m-auto"
      >
        {t("home-page.ourSpecialists.button")}
      </a>
    </div>
  );
};

export default OurSpecialists;
