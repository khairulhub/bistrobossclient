import { useContext } from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };


    const menu = [
        <li key="home" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
            Home 
          </NavLink>
        </li>,
        <li key="menu" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
         Menu
          </NavLink>
        </li>,
        <li key="order" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/order/salad"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          Order Food
          </NavLink>
        </li>,
        <li key="contact-us" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          Contact Us
          </NavLink>
        </li>,
        <li key="dashboard" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          Dashboard
          </NavLink>
        </li>,

        user ? (
          <li key="logout" className="font-bold ">
          <span className="text-primary font-bold">{user.displayName}</span>
          <a className="btn" onClick={handleLogOut}>SignOut</a>
          </li>
        ) : (
          <li key="login" className="font-bold">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Login
            </NavLink>
          </li>
        )
        
       
        
      ];
  return (
    <div className="navbar fixed  z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a className="btn  btn-ghost hover:bg-none ">BISTRO BOSS <br/> Restaurant</a>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
            {menu}
        </ul>
      </div>
      
    </div>
  );
};

export default Header;

          
