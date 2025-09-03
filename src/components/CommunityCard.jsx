export default function CommunityCard({ com }) {
    return (
        <div className="bg-gray-100 rounded-3xl p-4 flex flex-col md:flex-row items-start gap-6">
            <img
                src={com.community.media.photos}
                alt={com.community.name}
                className="w-full md:w-64 h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between h-full flex-1">
                <div>
                    <h3 className="text-lg font-semibold">{com.community.name}</h3>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Город:</span> {com.community.city}
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Format:</span> {com.community.format}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold mb-2">Главное:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            {com.community.key_focus.map((item, index) => (
                                <li key={index}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <a href={"/womantalk"} className="mt-4 bg-[#d5beb0] text-white px-5 py-2 rounded-lg hover:bg-[#5A3620] transition self-start">
                    Вступить
                </a>
            </div>
        </div>
    );
}
