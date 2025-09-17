export const MapSection = () => {
    return (
        <section className="h-64 md:h-96 flex justify-center my-14 px-4">
            <div className="w-full md:w-2/3 h-full rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://yandex.uz/map-widget/v1/-/CHtE7B02"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </section>
    )
}