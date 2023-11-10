import Rating from "./Rating";

export default function Card({
    className = "",
    image,
    title,
    instructor,
    price,
    rating,
    ...props
}) {
    return (
        <div
            {...props}
            className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
        >
            <img
                src={image}
                alt={title}
                className="w-full mb-4 rounded-lg  h-60 object-cover"
                loading="lazy"
            />
            <h2 className="text-xl font-semibold mb-2 dark:text-gray-400">
                {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
                {instructor}
            </p>
            <div className="flex items-center mb-2">
                <span className="text-gray-600 dark:text-gray-400">
                    <Rating rating={rating} />
                </span>
            </div>
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                price: Birr {price > 0 ? price : "free"}
            </p>
        </div>
    );
}
