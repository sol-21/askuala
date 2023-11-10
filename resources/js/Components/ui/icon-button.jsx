import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

const IconButton = ({ onClick, icon, className }) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-md flex items-center justify-center bg-green-500 border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>
    );
};

export default IconButton;
