import {
    Expand,
    LucideEye,
    ShoppingCart,
    ShowerHead,
    View,
} from "lucide-react";

// import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hook/use-preview-modal";
import useCart from "@/hook/use-cart";
import { Link } from "@inertiajs/react";

const ProductCard = ({ data }) => {
    const previewModal = usePreviewModal();
    const cart = useCart();

    const onPreview = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    const onAddToCart = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    };

    return (
        <div className="bg-gray-800 group cursor-pointer  space-y-4 rounded-lg">
            {/* Image & actions */}
            <div className="aspect-video  bg-transparent relative">
                <Link href={route("course.detail", data.id)}>
                    <img
                        src="altumcode-PNbDkQ2DDgM-unsplash.jpg"
                        alt=""
                        className="aspect-video object-cover  rounded-t-lg"
                    />
                </Link>
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex items-center justify-between">
                        <IconButton
                            onClick={onPreview}
                            icon={
                                <LucideEye
                                    size={20}
                                    className="text-gray-100"
                                />
                            }
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={
                                <ShoppingCart
                                    size={20}
                                    className="text-gray-100"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="p-3 space-y-3">
                {/* Description */}
                <div className="space-y-3">
                    <p className="font-semibold text-lg">{data.name}</p>
                    <p className="text-sm text-gray-500">{data.type}</p>
                </div>
                {/* Price & Reiew */}
                <div className="flex items-center justify-between">
                    <p className="text-sm ">
                        <span className="mr-1 text-green-500">Birr</span>
                        {data.price}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
