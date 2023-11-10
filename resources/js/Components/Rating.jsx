const Star = ({ filled, halfFilled }) => {
    const starColor =
        filled || halfFilled ? "text-yellow-500" : "text-gray-400";
    const starClasses = `h-5 w-5 ${starColor}`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={starClasses}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            {filled ? (
                <path
                    fillRule="evenodd"
                    d="M10 0l2.39 7.34h7.74l-6.26 4.54 2.82 8.66L10 15.34 3.31 20l2.82-8.66L0 7.34h7.74L10 0z"
                    clipRule="evenodd"
                />
            ) : halfFilled ? (
                <path
                    fillRule="evenodd"
                    d="M10 0l2.39 7.34h7.74l-6.26 4.54 2.82 8.66L10 15.34V0z"
                    clipRule="evenodd"
                />
            ) : (
                <path
                    fillRule="evenodd"
                    d="M10 0l2.39 7.34h7.74l-6.26 4.54 2.82 8.66L10 15.34 3.31 20l2.82-8.66L0 7.34h7.74L10 0z"
                    clipRule="evenodd"
                />
            )}
        </svg>
    );
};

export default function Rating({ className = "", rating, ...props }) {
    const filledStars = Math.floor(rating); // Integer part of the rating
    const decimalPart = rating - filledStars; // Decimal part of the rating
    const hasHalfStar = decimalPart >= 0.25 && decimalPart < 0.75; // Check if decimal part falls within the half-star range
    const hasFullStar = decimalPart >= 0.75; // Check if decimal part is greater than or equal to 0.75

    return (
        <div {...props} className="flex items-center justify-center">
            <span className="dark:text-gray-400">Rating: &nbsp;</span>
            {[...Array(filledStars)].map((_, index) => (
                <Star key={index} filled />
            ))}
            {hasHalfStar ? <Star key="halfStar" halfFilled /> : <></>}
            {hasFullStar && <Star key="fullStar" filled />}
            {[
                ...Array(
                    5 -
                        filledStars -
                        (hasFullStar ? 1 : 0) -
                        (hasHalfStar ? 1 : 0)
                ),
            ].map((_, index) => (
                <Star key={`emptyStar-${index}`} />
            ))}
        </div>
    );
}
