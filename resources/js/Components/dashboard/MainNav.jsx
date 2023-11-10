import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export function MainNav({ className, ...props }) {
    const routes = [
        {
            href: `#`,
            label: "Overview",
        },
        {
            href: `#`,
            label: "Billboards",
        },
        {
            href: `#`,
            label: "Categories",
        },
        {
            href: `#`,
            label: "Sizes",
        },
        {
            href: `#`,
            label: "Colors",
        },
        {
            href: `#`,
            label: "Products",
        },
        {
            href: `/orders`,
            label: "Orders",
        },
        {
            href: `/settings`,
            label: "Settings",
        },
    ];

    return (
        <nav
            className={cn(
                "hidden  lg:flex items-center space-x-4 lg:space-x-6",
                className
            )}
            {...props}
        >
            {routes.map((route) => (
                <NavLink key={route.href} href="#">
                    {route.label}
                </NavLink>
            ))}
        </nav>
    );
}
