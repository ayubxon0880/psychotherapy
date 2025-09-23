import { useEffect, useState } from "react";
import { Search } from "lucide-react";
// import { communities } from "../data/communities";
import { useTranslation } from "react-i18next";
import { API } from "../service/api.jsx";
import CommunityCard from "../components/Community/CommunityCard.jsx";
import ArticleCard from "../components/Article/ArticleCard.jsx";
import axios from "axios";


export default function Community() {
    const { t } = useTranslation();
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const [communities, setCommunities] = useState([]);

    const fetchArticles = async () => {
        try {
            const res = await axios.get(`${API}/article/newest?size=3`);
            setArticles(res.data.content);
            console.log(res.data.content)
        } catch (err) {
            console.error("Error fetching articles", err);
        }
    }

    const fetchCommunities = async () => {
        try {
            const res = await axios.get(`${API}/community/filter?page=0&size=5`);
            setCommunities(res.data.content);
            console.log(res.data.content)
        } catch (err) {
            console.error("Error fetching communities", err);
        }
    }

    useEffect(() => {
        fetchArticles();
        fetchCommunities();
    }, [])

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="mb-6 flex justify-end">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGMB1RbJQ8p167GbciAGEfPm9IgeDKJQWgxuDSlddSNmzO8A/viewform?usp=dialog"
                    className="px-4 py-2 bg-[#D8F3A2] hover:bg-[#cce599] text-black rounded"
                    target="_blank"
                >
                    {t("community.addCommunity")}
                </a>
            </div>

            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder={t("community.searchPlaceholder")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <h2 className="text-xl font-semibold mb-4">{t("community.ourCommunities")}</h2>
            <div className="space-y-6">
                {communities.length > 0 ? (
                    communities.map(c => (
                        <CommunityCard key={c} com={c} />
                        // <>gay</>
                    ))
                ) : (
                    <p className="text-gray-500">{t("community.notFound")}</p>
                )}
            </div>

            <h2 className="text-xl font-semibold mt-12 mb-4">{t("community.articlesNews")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {articles.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
        </div>
    );
}
