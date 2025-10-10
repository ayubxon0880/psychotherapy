import { useTranslation } from "react-i18next";

const Contacts = () => {
    const { t } = useTranslation();

    const cards = [
        t("home-page.contacts.cards.0"),
        t("home-page.contacts.cards.1"),
        t("home-page.contacts.cards.2"),
        t("home-page.contacts.cards.3"),
        t("home-page.contacts.cards.4"),
        t("home-page.contacts.cards.5"),
    ];

    return (
        <div className="w-full flex flex-col items-center py-10">
            <button
                className="
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
          hover:opacity-90
          transition
        "
            >
                {t("home-page.contacts.button")}
            </button>

            <h2 className="text-[28px] font-bold text-[#0B1F33] mb-10">
                {t("home-page.contacts.title")}
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
