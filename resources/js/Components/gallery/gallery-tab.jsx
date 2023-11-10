import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";

const GalleryTab = ({ image }) => {
    return (
        <Tab className="relative flex  cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    {/* <span className="absolute h-100 w-full aspect-video inset-0 overflow-hidden rounded-md">
                        
                         <video
                            controls
                            autoPlay
                            src={image.path}
                            className="object-cover object-center"
                        /> 
                    </span> */}

                    <p className="absolute bottom-0 left-0 overflow-hidden w-full h-100">
                        {image.path}
                    </p>
                    <span
                        className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected ? "ring-black" : "ring-transparent"
                        )}
                    />
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;
