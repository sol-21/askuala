import { Tab } from "@headlessui/react";

import GalleryTab from "./gallery-tab";
import { cn } from "@/lib/utils";

const images = [
    {
        id: 1,
        path: "1- What is React.mp4",
    },
    {
        id: 2,
        path: "5- Creating a React Component.mp4",
    },
    {
        id: 3,
        path: "7- React Ecosystem.mp4",
    },
];

const Gallery = ({ className, tabClass }) => {
    return (
        <Tab.Group as="div" className={cn("flex flex-col-reverse", className)}>
            <div className="mx-auto mt-6 hidden w-full max-w-7xl sm:block lg:max-w-none ">
                <Tab.List className={cn("grid grid-cols-3 gap-6 ", tabClass)}>
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className={cn("aspect-video w-full")}>
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-video relative  sm:rounded-lg overflow-hidden ">
                            <video
                                controls
                                autoPlay
                                src={image.path}
                                alt="Image"
                                className="w-full object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;
