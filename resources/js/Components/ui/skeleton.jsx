import { cn } from "@/lib/utils";

const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-neutral-200", className)}
            {...props}
        />
    );
};

export default Skeleton;
