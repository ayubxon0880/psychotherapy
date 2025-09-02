import { useState } from "react";
import { Search } from "lucide-react";
import { communities } from "../data/communities";
import { articles } from "../data/articles";
import CommunityCard from "../components/CommunityCard";
import ArticleCard from "../components/ArticleCard";

export default function Community() {
    const [search, setSearch] = useState("");

    const filteredCommunities = communities.filter(c =>
        c.community.name.toLowerCase().includes(search.toLowerCase()) ||
        c.community.city.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="mb-6 flex justify-end">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGMB1RbJQ8p167GbciAGEfPm9IgeDKJQWgxuDSlddSNmzO8A/viewform?usp=dialog"
                    className="px-4 py-2 bg-[#d5beb0] hover:bg-[#a8a89e] text-black rounded"
                    target="_blank"
                >
                    Добавить сообщество
                </a>
            </div>

            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Поиск сообщества..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>

            <h2 className="text-xl font-semibold mb-4">Наши сообщества</h2>
            <div className="space-y-6">
                {filteredCommunities.length > 0 ? (
                    filteredCommunities.map(c => {
                        console.log(c);
                        return <CommunityCard key={c.community.contacts.website} com={c}/>
                    })
                ) : (
                    <p className="text-gray-500">Сообщества не найдены</p>
                )}
            </div>

            <h2 className="text-xl font-semibold mt-12 mb-4">Статьи и новости</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {articles.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
        </div>
    );
}
