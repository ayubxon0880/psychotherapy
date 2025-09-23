import React from "react";
import { useTranslation, Trans } from "react-i18next";

const CoolNumbers = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-4 md:grid-cols-2">
        <div className="bg-lime-200 rounded-2xl p-6 flex flex-col justify-center md:col-span-1 shadow-md">
          <h2 className="text-6xl font-bold text-gray-800 mb-2">
            {t("home-page.coolNumbers.foundTitle")}
          </h2>
          <p className="text-gray-700 text-xl">
            <Trans i18nKey="home-page.coolNumbers.foundText" />
          </p>
        </div>

        {/* Right Smaller Cards */}
        <div className="grid grid-cols-2 gap-4 md:col-span-1">
          <div className="bg-[#76BAB1] rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-3xl text-gray-100 mb-2">
              {t("home-page.coolNumbers.specialistsTitle")}
            </h3>
            <p className="text-gray-100">{t("home-page.coolNumbers.specialistsText")}</p>
          </div>

          <div className="bg-lime-200 rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-3xl text-gray-800 mb-2">
              {t("home-page.coolNumbers.resultTitle")}
            </h3>
            <p className="text-gray-700">{t("home-page.coolNumbers.resultText")}</p>
          </div>

          <div className="bg-lime-200 rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-3xl text-gray-800 mb-2">
              {t("home-page.coolNumbers.experienceTitle")}
            </h3>
            <p className="text-gray-700">{t("home-page.coolNumbers.experienceText")}</p>
          </div>

          <div className="bg-[#76BAB1] rounded-2xl p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-3xl text-gray-100 mb-2">
              {t("home-page.coolNumbers.availabilityTitle")}
            </h3>
            <p className="text-gray-100">{t("home-page.coolNumbers.availabilityText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoolNumbers;
