import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Header.css";
import { Link} from "react-router-dom";
import { Helmet } from "react-helmet";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function Header() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <Helmet>
          <title>Header</title>
        </Helmet>
        <div
          className="keen-slider__slide number-slide1"
          style={{
            backgroundImage: "url('https://i.ibb.co/nwvwx6X/download-23.webp')",
            loading: "lazy",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "left",
          }}
        >
          <div className="grid grid-cols-4">
            <div className="col-span-2"></div>
            <div className="col-span-2 p-8 rounded-xl bg-black bg-opacity-40">
              <h2 className="text-xl md:text-5xl font-extrabold">
                Sweet Home
              </h2>
              <p className="text-base font-normal text-white">
                Reframe your family moments
              </p>
              <button className="btn btn-square w-[150px] p-1 bg-yellow-400 text-black">
                <Link to={"/details"}>View Property</Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="keen-slider__slide number-slide2"
          style={{
            backgroundImage: "url('https://i.ibb.co/XtGs4x1/slider5.jpg')",
            loading: "lazy",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-4">
            <div className="col-span-2"></div>
            <div className="col-span-2 p-8 rounded-xl bg-black bg-opacity-40">
              <h2 className="text-base md:text-5xl font-extrabold text-yellow-400">
                Elite Nest
              </h2>
              <p className="text-base font-normal text-white">
                Explore your New destiny
              </p>
              <button className="btn btn-square w-[150px] p-1 bg-yellow-400 text-black">
                <Link to={"/details"}>View Property</Link>
              </button>
            </div>
          </div>
        </div>
        <div
          className="keen-slider__slide number-slide3"
          style={{
            backgroundImage: "url('https://i.ibb.co/CQm7c7P/h-1.jpg')",
            loading: "lazy",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-4">
            <div className="col-span-2"></div>
            <div className="col-span-2 p-8 rounded-xl bg-black bg-opacity-40">
              <h2 className="text-base md:text-5xl font-extrabold">
               Downhill VIP Dwelling
              </h2>
              <p className="text-base font-normal text-white">
                Become the Downhill Resident 
              </p>
              <button className="btn btn-square w-[150px] p-1 bg-yellow-400 text-black">
                <Link to={"/details"}>View Property</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide number-slide1">
          <img src="https://i.ibb.co/nwvwx6X/download-23.webp" alt="" />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="https://i.ibb.co/XtGs4x1/slider5.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            src="https://i.ibb.co/CQm7c7P/h-1.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;
