import Rating from "./Rating";

export default function Review({
    className = "",
    image,
    name,
    rating,
    date,
    description,
    ...props
}) {
    return (
        <div {...props} className="flex items-start space-x-4 p-5">
            <div className="space-y-3 ">
                <div className="flex items-start space-x-4">
                    <img
                        src={image}
                        alt={`${name}'s profile`}
                        className="w-12 h-12 rounded-full"
                    />
                    <h3 className="font-bold text-lg dark:text-gray-400">
                        {name}
                    </h3>
                </div>

                <div className="flex items-center space-x-1">
                    <span className="text-gray-600">
                        <Rating rating={rating} />
                    </span>
                </div>
                <p className="text-gray-500 text-sm dark:text-gray-400">
                    {date}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
