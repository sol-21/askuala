const Billboard = () => {
    return (
        <div className=" mt-11  lg:p-8 rounded-xl overflow-hidden grid   lg:grid-cols-2 items-center my-5 lg:my-11 border border-green-400 gap-8 ">
            <h3 className=" text-5xl max-w-md lg:max-w-none text-center lg:text-7xl lg:text-start text-white font-black aspect-video mx-auto flex items-center justify-center ">
                <p className="leading-tight">
                    <span className="text-green-500 sm:text-7xl">Skill Up</span>{" "}
                    Your Carrier & Become Your Best Version
                </p>
            </h3>
            <video
                autoPlay={true}
                muted
                preload="auto"
                src="1- What is React.mp4"
                loop
                className=" rounded-b-lg    lg:rounded-md  aspect-video lg:aspect-square  w-full"
            ></video>
        </div>
    );
};

export default Billboard;
