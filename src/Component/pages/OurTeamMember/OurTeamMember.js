import React from 'react';
import img1 from "../../image/img1.png";
import img2 from "../../image/img1.png";
import img3 from "../../image/img1.png";
import img4 from "../../image/img1.png";
import img5 from "../../image/img1.png";
import img6 from "../../image/img1.png";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";


const OurTeamMember = () => {
    const instructors = [
        {
            img: img1,
            name: "karim Ahmed",
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
                    <SwiperSlide className="">
                        <div className="card mb-3 mt-3 container shadow" style={{ width: "18rem", backgroundColor:"#1E2D40" }}>
                            <img src={data.img} className="card-img-top mt-3 shadow-sm" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.profetion}</p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurTeamMember;