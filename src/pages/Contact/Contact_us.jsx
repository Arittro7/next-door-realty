import { Helmet } from "react-helmet";
import contact_photo from "../../assets/contact_photo.jpg";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
const Contact_us = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen mb-8 mt-8">
        <Helmet>
          <title>Contact</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left pr-8">
            <h1 className="text-5xl font-bold  mt-4">
              Contact Us
            </h1>
            <h3 className="text-base font-semibold mt-2 mb-4">
              Send Message
            </h3>
            <img
              loading="lazy"
              className="w-[700px] rounded-lg border shadow-md"
              src={contact_photo}
              alt=""
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="card-body"
            >
              <div className="form-control">
                <input
                  type="hidden"
                  name="access_key"
                  value="719af1c6-af34-4035-b8d3-b08c2ed7799c"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#fff5f5] text-black hover:bg-black hover:text-yellow-500">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact_us;
