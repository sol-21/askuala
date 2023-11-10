import {
    BookPlus,
    ChevronUpSquare,
    Clapperboard,
    LucideClipboardCheck,
    LucideShoppingCart,
    ShieldOff,
    ShipIcon,
    ShoppingBag,
    ShoppingBasket,
    ShoppingCartIcon,
    Store,
} from "lucide-react";

import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hook/use-cart";
import { Link } from "@inertiajs/react";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Link href={route("cart")}>
                <Button className="flex items-center rounded-md bg-green-500 px-4 py-2">
                    <LucideShoppingCart size={20} color="white" />
                    <span className="ml-4 text-sm font-medium text-white">
                        {cart.items.length}
                    </span>
                </Button>
            </Link>
        </div>
    );
};

export default NavbarActions;
