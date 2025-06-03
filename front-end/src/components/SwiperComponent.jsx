"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperComponent() {
    return (
        <>
            <h2 className="text-4xl inline-block bg-lime-300 px-2 py-1 rounded-xl mb-8">
                Gallery 
            </h2>
            <div className="py-30 bg-[#191A23] rounded-[2rem] mb-32">
                <Swiper
                    spaceBetween={100}
                    slidesPerView={2}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    style={{ width: "100%" }}
                >
                    {["1", "2", "3", "4", "5"].map((num) => (
                        <SwiperSlide key={num}>
                            <div
                                style={{
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={`/carousel-${num}.png`}
                                    width={600}
                                    height={400}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                    alt={`Carousel Image ${num}`}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style jsx global>{`
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: #fff !important;
                        filter: drop-shadow(0 0 2px #0008);
                    }
                `}</style>
            </div>
        </>
    );
}
