import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();



    if(loading){
        return <div className="text-center mt-10"><progress className="progress w-56"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoutes;