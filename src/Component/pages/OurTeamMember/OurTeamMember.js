import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../image/img1.png";
import img2 from "../../image/img1.png";
import img3 from "../../image/img1.png";
import img4 from "../../image/img1.png";
import img5 from "../../image/img1.png";
import img6 from "../../image/img1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";
const OurTeamMember = () => {
    const instructors = [
        {
            img: img1,
            name: "Fateh Ahmod",
            profetion: "Web Developer"
        },
        {
            img: img2,
            name: "Bappy Das",
            profetion: "Web Developer"
        },
        {
            img: img3,
            name: "Md Yousuf ",
            profetion: "Web Developer"
        },
        {
            img: img4,
            name: "Rahman Heezol",
            profetion: "Web Developer"
        },
        {
            img: img5,
            name: "Md Yeasen",
            profetion: "Web Developer"
        },
        {
            img: img6,
            name: "Musa Sazib",
            profetion: "Web Developer"
        }
    ]
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,

                    },
                    "@1.50": {
                        slidesPerView: 2,

                    },
                    "@1.75": {
                        slidesPerView: 3,

                    }
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {instructors?.map((data) => (
                    <SwiperSlide className="py-10">
                        <div className="text-center group overflow-hidden bg-info mb-3 mt-3  rounded-sm">
                            <div className="relative">
                                <img
                                    className="w-full rounded-sm"
                                    src={data.img}
                                    alt=""
                                />
                                <div className="absolute top-1/4 -translate-x-9  group-hover:translate-x-0 ease-in-out duration-300  left-2 space-y-3">

                                </div>
                            </div>
                            <p>{data.name}</p>
                            <p>{data.profetion}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurTeamMember;