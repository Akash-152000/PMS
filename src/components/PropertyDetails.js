import React from "react";
import { useState } from "react";
import "../App.css";

const PropertyDetails = () => {
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://media.istockphoto.com/id/1221621512/photo/3d-rendering-of-modern-house-with-wood-plank-facade-in-night.webp?s=170667a&w=0&k=20&c=PxQzsubThbSNwsUx0AwRBkNKTm0HRJH_s1qM0lYo9ro=",
    },
    {
      url: "https://media.istockphoto.com/id/1140335423/photo/3d-rendering-of-modern-house-on-the-hill-with-pool-in-night.webp?s=170667a&w=0&k=20&c=rQ--hMQQzSEg4XUQcSO8SUUbHdeVVsl-Hz7clRa3BlA=",
    },
    {
      url: "https://media.istockphoto.com/id/169503009/photo/office-building-exterior-at-night.webp?s=170667a&w=0&k=20&c=1uYKFhbQmWVlwWFH3x2dlQsTEos7Q1vP86eqi5axpus=",
    },
    // {
    //   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcR3IVlvufXIDZXxq0O8SVqwU2HeO6y7as0OXJl-YT55BA&s",
    // },
    // {
    //   url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcQs_7aafRRY4vEbWz2wydowaogMmGI7mRVG6MQfZVtKDFXUGqt5iF-Mu0AYMQBEeznPkU&usqp=CAU",
    // },
    // {
    //   url: "https://smartslider3.com/wpcontent/uploads/2019/01/photo_slideshow.jpg",
    // },
  ];

  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <div>
      <section className="image-slider">
        <div class="left">
          <i
            class="fa-solid fa-greater-than fa-rotate-180"
            onClick={prevSlide}
          ></i>
        </div>
        <div class="right">
          <i class="fa-solid fa-greater-than" onClick={ nextSlide }></i>
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && (
                <img src={currentSlide.url} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PropertyDetails;
