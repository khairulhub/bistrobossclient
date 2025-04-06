import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";


const MainLayout = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("register");
    return (
        <div className="max-w-screen-xl mx-auto">
           {noHeaderFooter || <Header />}
            <Outlet />
          { noHeaderFooter || <Footer />}
        </div>
    );
};

export default MainLayout;