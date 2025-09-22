import React from 'react'
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <h1 className="text-center text-3xl font-bold text-[#545453]">
        {t("home-page.ourSpecialists.title")}
      </h1>
      <br />
      <h1 className="text-center text-xl font-bold text-[#545453]">
        {t("home-page.ourSpecialists.subtitle")}
      </h1>
      <br />
      <a
        href="tel:+998958567666"
        className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center m-auto"
      >
        +998 90 123 45 67
      </a>
      <br />
      <h1 className="text-center text-xl font-bold text-[#545453]">
        {t("home-page.ourSpecialists.subtitle")}
      </h1>
      <br />
      <a
        href="mailto:psychouz@gmail.com"
        className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center m-auto"
      >
        psychouz@gmail.com
      </a>
    </div>
  )
}

export default Contacts
