import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
    return (
        <div className={cn("max-w-full mx-auto", className)}>{children}</div>
    );
};

export default Container;
