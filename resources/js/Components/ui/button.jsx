import { forwardRef } from "react";

import { cn } from "@/lib/utils";

const Button = ({
    className,
    children,
    disabled,
    type = "button",
    ...props
}) => {
    return (
        <button
            type={type}
            className={cn(
                `
        w-auto 
        rounded-full 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
      `,
                disabled && "opacity-75 cursor-not-allowed",
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";

export default Button;
