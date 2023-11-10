import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
export default function CourseDetail() {
    const urls = [
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
    const [selected, setSelected] = useState(urls[0].path);

    const handleClick = (path) => {
        setSelected(path);
    };
    return (
        <video controls autoplay="true" muted="true" className="w-full">
            <source src="5- Creating a React Component.mp4" />
        </video>
    );
}
