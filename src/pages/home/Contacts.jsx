import React from 'react'
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <h1 className="text-center text-3xl font-bold text-[#545453]">
        {t("home-page.contacts.title")}
      </h1>
      <br />
      <h1 className="text-center text-xl font-bold text-[#545453]">
        {t("home-page.contacts.number")}
      </h1>
      <br />
      <a
        href="tel:++998773786367"
        className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center m-auto"
      >
        +998 77 378 63 67
      </a>
      <br />
      <h1 className="text-center text-xl font-bold text-[#545453]">
        {t("home-page.contact.email")}
      </h1>
      <br />
      <a
        href="mailto:admin@psychotherapy.uz"
        className="text-2xl bg-lime-200 hover:bg-lime-300 transition-colors px-6 py-3 rounded-lg font-medium text-gray-800 max-w-96 w-full flex justify-center m-auto"
      >
        admin@psychotherapy.uz
      </a>
    </div>
  )
}

export default Contacts
