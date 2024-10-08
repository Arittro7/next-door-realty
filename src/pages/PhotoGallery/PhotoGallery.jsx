import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const PhotoGallery = () => {
    const [photos,setPhotos]=useState([]);
    useEffect(()=>{
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => setPhotos(data));
    },[]
    );
    return (
      <div data-aos="zoom-in-up" data-aos-duration="1500" className="mt-24 p-4">
        <Helmet>
          <title>NextDoor Realty</title>
        </Helmet>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Photo <span className="text-yellow-600">Gallery</span>
          </h2>
          <p>
            Explore our stunning photo gallery showcasing breathtaking
            landscapes, vibrant cityscapes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 ">
          {photos.slice(0, 8).map((photo) => (
            <div
              key={photo.id}
              className="transform transition duration-300 ease-in-out hover:scale-105"
            >
              <img className="w-[400px] h-[200px]" loading="lazy" src={photo.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
};

export default PhotoGallery;