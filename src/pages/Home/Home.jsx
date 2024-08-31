import { Helmet } from "react-helmet";
import Amenities from "../Amenities/Amenities.jsx";
import Header from "../Header/Header";
import PhotoGallery from "../PhotoGallery/PhotoGallery.jsx";
import Recidencies from "../Recidencies/Recidencies.jsx";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="mt-3 flex">
        <h1 className="bg-red-400 text-xl font-semibold py-2 px-2 text-white w-44">Announcement</h1>
      <Marquee className="text-xl ml-2">
      <p className=' text-2xl mr-16'>Welcome to <span className="text-orange-500 font-bold">NextDoor Realty</span>, A trustworthy SAFE HOUSE dealer. More then 500+ happy Client.</p>
      </Marquee>
      </div>

      <Navbar></Navbar>
      <Header></Header>
      <Recidencies></Recidencies>
      <Amenities></Amenities>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
