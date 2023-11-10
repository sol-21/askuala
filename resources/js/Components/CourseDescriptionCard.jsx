import PrimaryButton from "./PrimaryButton";

export default function CourseDescriptionCard({
    className = "",
    title,
    updatedAt,
    length,
    description,
    ...props
}) {
    return (
        <div
            {...props}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 dark:text-gray-400">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Last Updated: {updatedAt}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Length: {length}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>
                <PrimaryButton>Add To Cart</PrimaryButton>
            </div>
        </div>
    );
}
