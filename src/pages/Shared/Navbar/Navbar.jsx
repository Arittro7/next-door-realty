import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Utility/Provider/ProviderContext";
import user from  '../../../assets/user.png';
import toast from "react-hot-toast";

const Navbar = () => {
  const {User,LogOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    LogOut();
    toast.success('Log Out Successfully');
  }
    const links = (
      <>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                background: isActive ? "tomato" : "white",
                color: isActive ? "White" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/details"}
            style={({ isActive }) => {
              return {
                background: isActive ? "tomato" : "white",
                color: isActive ? "White" : "",
              };
            }}
          >
            Property Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            style={({ isActive }) => {
              return {
                background: isActive ? "tomato" : "white",
                color: isActive ? "White" : "",
              };
            }}
          >
            Contact Us
          </NavLink>
        </li>
        {User && (
          <li>
            <NavLink
              to={"/loan"}
              style={({ isActive }) => {
                return {
                  background: isActive ? "tomato" : "white",
                color: isActive ? "White" : "",
                };
              }}
            >
              Get Loan
            </NavLink>
          </li>
        )}
        {User && (
          <li>
            <NavLink
              to={"/update"}
              style={({ isActive }) => {
                return {
                  background: isActive ? "tomato" : "white",
                color: isActive ? "White" : "",
                };
              }}
            >
              Update Profile
            </NavLink>
          </li>
        )}
      </>
    );
    return (
      <div className="navbar border rounded shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <h1 className="text-3xl font-semibold">NextDoor Realty</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {User ? (
            <div className="flex">
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] border rounded-full"
                src={User.photoURL || user}
                alt={User.displayName || 'user'}
                title={User.displayName ||' user'}
              />
              <a
                onClick={handleLogOut}
                className="btn btn-circle border-black w-[40px] h-[5px] text-[10px] md:w-[100px] md:h-[50px] md:text-[15px]"
              >
                Log Out
              </a>
            </div>
          ) : (
            <a className="btn btn-ghost border-black">
              <Link to={"/login"}>Login</Link>
            </a>
          )}
        </div>
      </div>
    );
};

export default Navbar;