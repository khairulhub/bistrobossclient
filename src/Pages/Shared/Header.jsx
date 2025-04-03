import { NavLink } from "react-router-dom";

const Header = () => {
    const menu = [
        <li key="home" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
            HOME 
          </NavLink>
        </li>,
        <li key="blogs" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          CONTACT US
          </NavLink>
        </li>,
        <li key="bookmarks" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          DASHBOARD
          </NavLink>
        </li>,
        <li key="bookmarks" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          OUR MENU
          </NavLink>
        </li>,
        <li key="bookmarks" className="font-bold bg-none hover:bg-none">
          <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive ? "text-primary bg-none" : "font-bold"
            }
          >
          OUR SHOP
          </NavLink>
        </li>,
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
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
            {menu}
        </ul>
      </div>
      <div className="navbar-end">
       
        <a className="btn">SignOut</a>
      </div>
    </div>
  );
};

export default Header;
