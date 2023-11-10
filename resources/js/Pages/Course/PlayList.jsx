import IconButton from "@/Components/ui/icon-button";
import { Play } from "lucide-react";
import React from "react";

const PlayList = () => {
    return (
        <div className="container  flex mx-auto pt-10 lg:px-10 space-x-10 ">
            <div className="w-[70%] self-start border aspect-video">
                <video
                    className="aspect-video"
                    src="5- Creating a React Component.mp4"
                    controls
                />
            </div>
            <div className="w-[30%]">
                <ul>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                    <li className="flex gap-4">
                        <Play size={30} />
                        PlayList
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PlayList;
