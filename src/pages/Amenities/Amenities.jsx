
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Amenitites = () => {
  const [reviews,setReviews]=useState([]);
  useEffect(()=>{
    fetch('aminities.json')
    .then(res=>res.json())
    .then(data=>setReviews(data))
  })

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Medium devices and above
        settings: {
          slidesToShow: 3,
          
        },
      },
      {
        breakpoint: 640, // Small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-12 mb-4 font-poppins">
      <Helmet>
        <title>Amenities</title>
      </Helmet>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-center mb-2">Amenities</h2>
        <p className="text-slate-600">
          Our homes offer spacious living areas, modern kitchens, cozy bedrooms,
          and relaxing outdoor spaces
        </p>
      </div>
      <Slider {...sliderSettings}>
        {reviews.map((review) => (
          <div key={review.id} className="gap-4">
            <div className="card border rounded shadow-lg bg-[#fff5f5] font-poppins text-center  m-4">
              <div className="card-body">
                <h2 className="text-3xl card-title text-center text-green-400">
                  <span>
                  <IoShieldCheckmarkOutline />
                  </span>
                  {review.facility}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Amenitites;
