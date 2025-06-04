export default function ServiceCard({
    title,
    description,
    imgSrc,
    bgColor,
    textColor,
    titleColor,
    bgTitlecolor,
}) {
    return (
        <div
            className={`${bgColor} rounded-3xl py-16 px-8 flex items-center justify-between border border-b-4 border-gray-700`}
        >
            <div className="max-w-72">
                <h3
                    className={`text-3xl mb-6 inline-block px-2 py-1 rounded-xl ${titleColor} ${bgTitlecolor}`}
                >
                    {title}
                </h3>
                <p className={`${textColor}`}>{description}</p>
            </div>
            <img src={imgSrc} alt={`${title} Icon`} className="w-50 h-40" />
        </div>
    );
}
