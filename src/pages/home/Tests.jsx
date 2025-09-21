import React from "react";
import { useTranslation } from "react-i18next";

const Tests = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 flex flex-col items-center gap-10">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
        {/* Left text content */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            {t("home-page.tests.title")}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t("home-page.tests.description")}
          </p>
        </div>

        {/* Right image block */}
        <img
          src="/images/Rectangle45.png"
          alt="Человек читает книгу и зеркало"
          className="rounded-2xl"
        />
      </div>

      <a href="/test" className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center">
        {t("home-page.tests.button")}
      </a>
    </section>
  );
};

export default Tests;
