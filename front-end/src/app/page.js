export default function Home() {
    return (
        <>
            <main className="flex flex-col md:flex-row items-center justify-between gap-8 pt-16">
                <div className="max-w-md">
                    <div className="text-5xl max-w-lg mb-9">
                        NeoFit - Your New Way Of Life
                    </div>
                    <div className="text-lg mb-9">
                        A modern fitness club for those who value results,
                        comfort, and innovation. <br/> <br/>Train with professionals,
                        follow personalized programs, and track your progress
                        online.
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
        </>
    );
}
