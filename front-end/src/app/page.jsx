import SwiperComponent from "../components/SwiperComponent";
import ServiceCard from "../components/ServiceComponent";
import MapWrapper from "../components/Map/MapWrapper";
import Image from "next/image";
export default function Home() {
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
                <div className="">
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
            <section className="mb-32">
                <h2 className="text-4xl inline-block bg-lime-300 px-2 py-1 rounded-xl mb-8">
                    Map
                </h2>
                <div className="py-5 px-5 bg-gray-100 rounded-[2rem] flex justify-between items-center">
                    <div className="w-[55%] h-[534px] rounded-[2rem] shadow-[5px_5px_7px_rgba(0,0,0,0.3)] overflow-hidden">
                        <MapWrapper />
                    </div>
                    <div className="flex flex-col gap-5 w-[38.1%]">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/marker.svg"
                                width={74}
                                height={74}
                                alt="Marker Icon"
                            ></Image>
                            <h2 className="text-5xl inline-block bg-(--dark) px-4 py-3 rounded-xl text-white">
                                Kharkiv
                            </h2>
                        </div>
                        <div className="bg-(--dark) text-white rounded-xl px-4 py-5 text-3xl font-medium">
                            Petra Grygorenka av., 10/14
                        </div>
                        <div className="bg-(--dark) text-white rounded-xl px-4 py-5 text-3xl font-medium">
                            Mn-Fr: 9:00am - 6:00pm
                        </div>
                        <div className="bg-(--dark) text-white rounded-xl px-4 py-5 text-3xl font-medium">
                            +38 (099) 114 07 70
                        </div>
                        <div className="bg-(--dark) text-white rounded-xl px-4 py-5 text-3xl font-medium">
                            +38 (099) 114 07 70
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
