import SwiperComponent from "@/components/SwiperComponent";
export default function Home() {
    function ServiceCard({
        title,
        description,
        imgSrc,
        bgColor,
        textColor,
        titleColor,
        bgTitlecolor,
    }) {
        return (
            <div
                className={`${bgColor} rounded-3xl py-16 px-8 flex items-center justify-between border border-b-4 border-gray-700`}
            >
                <div className="max-w-72">
                    <h3
                        className={`text-3xl mb-6 inline-block px-2 py-1 rounded-xl ${titleColor} ${bgTitlecolor}`}
                    >
                        {title}
                    </h3>
                    <p className={`${textColor}`}>{description}</p>
                </div>
                <img src={imgSrc} alt={`${title} Icon`} className="w-50 h-40" />
            </div>
        );
    }

    return (
        <>
            <main className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16 mb-32">
                <div className="max-w-md">
                    <div className="text-5xl max-w-lg mb-9">
                        NeoFit - Your New Way Of Life
                    </div>
                    <div className="text-lg mb-9">
                        A modern fitness club for those who value results,
                        comfort, and innovation. <br /> <br />
                        Train with professionals, follow personalized programs,
                        and track your progress online.
                    </div>
                    <button className="bg-(--dark) text-white px-6 py-3 rounded-xl hover:bg-(--hover-dark) transition-all cursor-pointer">
                        Get Started
                    </button>
                </div>
                <div>
                    <img
                        src="/intro-img.png"
                        alt="Intro Image"
                        className="w-full max-w-2xl"
                    />
                </div>
            </main>

            <section className="mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-row align-items-center gap-10 mb-8">
                        <h2 className="text-4xl inline-block bg-lime-300 px-2 py-1 rounded-xl">
                            Services
                        </h2>
                        <p className="text-lg max-w-2xl inline-block ">
                            At NeoFit, we go beyond a typical gym experience.
                            Explore the features that help you stay motivated,
                            organized, and on track.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ServiceCard
                            title="Calorie Tracking"
                            titleColor="text-gray-800"
                            description="Understand your daily needs and fuel your body the right way — based on your goals."
                            textColor="text-gray"
                            imgSrc="/services-calculator.png"
                            bgColor="bg-gray-100"
                            bgTitlecolor={"bg-lime-300"}
                        />
                        <ServiceCard
                            title="Personalized Workout Plans"
                            titleColor="text-gray-800"
                            description="Understand your daily needs and fuel your body the right way — based on your goals."
                            textColor="text-gray"
                            imgSrc="/services-workoutplans.png"
                            bgColor="bg-lime-300"
                            bgTitlecolor={"bg-white"}
                        />
                        <ServiceCard
                            title="Goal Tracking & Progress Monitoring"
                            titleColor="text-gray-800"
                            description="Set goals, track achievements, and stay motivated with visual progress reports."
                            textColor="text-gray-100"
                            imgSrc="/services-profile.png"
                            bgColor="bg-gray-900"
                            bgTitlecolor={"bg-white"}
                        />
                        <ServiceCard
                            title="Group Training Sessions"
                            titleColor="text-gray-800"
                            description="Set goals, track achievements, and stay motivated with visual progress reports."
                            textColor="text-gray"
                            imgSrc="/services-groups.png"
                            bgColor="bg-gray-100"
                            bgTitlecolor={"bg-lime-300"}
                        />
                    </div>
                </div>
            </section>
            <SwiperComponent />
        </>
    );
}
