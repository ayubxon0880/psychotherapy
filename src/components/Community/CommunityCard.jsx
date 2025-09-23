import { useTranslation } from "react-i18next";
import { API } from "../../service/api";
import image from "../../../public/images/women-talk-2.png";


export default function CommunityCard({ com }) {
    const { t } = useTranslation();

    return (
        <div className="bg-gray-100 rounded-3xl p-4 flex flex-col md:flex-row items-start gap-6">
            <img
                // src={API+"/file/files/"+com.imageUrl}
                src={image}
                alt={'community image'}
                className="w-full md:w-64 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between h-full flex-1">
                <div>
                    <h3 className="text-lg font-semibold">{com.name}</h3>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">{t("communityCard.city")}:</span>{" "}
                        {com.address}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">{t("communityCard.format")}:</span>{" "}
                        {}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold mb-2">{t("communityCard.main")}:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            {com.mainDirections.map((item, index) => (
                                <li key={index}>• {item.direction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a
                    href={"https://t.me/psychotherapy_consultant_bot?start=8076698584"}
                    className="mt-4 bg-[#D8F3A2] text-black px-5 py-2 rounded-lg hover:bg-[#c6df94] transition self-start"
                >
                    {t("communityCard.join")}
                </a>
            </div>
        </div>
    );
}
