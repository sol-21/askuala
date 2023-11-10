import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import NavLink from "./NavLink";
import { ContactIcon, FileWarning, PhoneCall } from "lucide-react";
const data = [
    { id: 1, name: "About", icon: FileWarning },
    { id: 2, name: "Contact", icon: PhoneCall },
];

const MainNav = ({ className }) => {
    return (
        <nav
            className={cn(
                "mx-6 flex items-center space-x-4 lg:space-x-6",
                className
            )}
        >
            {data.map((route) => (
                <NavLink
                    key={route.id}
                    href={"/"}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default MainNav;
