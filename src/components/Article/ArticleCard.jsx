import { useTranslation } from "react-i18next";
import { API } from "../../service/api";

export default function ArticleCard({ article }) {
    const { t } = useTranslation();

    return (
        <div
            className="bg-white rounded-xl shadow-md border p-5 hover:shadow-lg transition bg-cover bg-center"
            // style={{
            //     backgroundImage: `url(${API}/file/files/${article.imageUrl})`
            // }}
        >
            <div className="w-fit backdrop-blur-md p-2 rounded-lg relative z-20">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-3" >{article.description.slice(0, 100)}</p>
                <a
                    href={article.url}
                    className="text-[#5A3620] text-sm font-medium hover:underline"
                >
                    {t("community.readMore")}
                </a>
            </div>
            <img src={API + "/file/files/" + article.imageUrl} alt="" className="h-64 m-auto"/>
            {/* <div
                className=" bg-cover bg-center h-80"
            ></div> */}
        </div>
    );
}
