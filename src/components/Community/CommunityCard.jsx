import { useTranslation } from "react-i18next";
import { API } from "../../service/api";
import image from "../../../public/images/women-talk-2.png";


export default function CommunityCard({ com }) {
    const { t } = useTranslation();

    return (
        <div className="border-gray-200 border-2 rounded-3xl p-10 flex flex-col md:flex-row justify-between items-start gap-6">
            <img
                src={API+"/file/files/"+com.imageUrl}
                // src={image}
                alt={'community image'}
                className="max-w-96 h-full max-h-96 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between h-full flex-1">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">{com.name}</h3>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">{t("communityCard.city")}</span>
                        <br />
                        {com.address}
                    </p>
                    <p className="text-gray-600 mb-4">
                        <span className="font-semibold">{t("communityCard.format")}</span>{" "}
                        {/* {com.format} */}
                        <br />
                        this is format
                    </p>
                    <div className="">
                        <h4 className="font-semibold mb-2">{t("communityCard.main")}:</h4>
                        <ul className=" text-gray-700 space-y-1">
                            {com.mainDirections.map((item, index) => (
                                <li key={index}>{item.direction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a
                    href={com.contact}
                    className="mt-4 bg-[#D8F3A2] text-black px-5 py-2 rounded-lg hover:bg-[#c6df94] transition self-start"
                >
                    {t("communityCard.join")}
                </a>
            </div>
        </div>
    );
}
