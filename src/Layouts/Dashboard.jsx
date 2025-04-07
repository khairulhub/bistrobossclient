import { BiMailSend } from "react-icons/bi";
import { FaCalendarAlt, FaHome, FaList, FaShoppingBag } from "react-icons/fa";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import {  PiShootingStarThin } from "react-icons/pi";

import {  NavLink, Outlet } from "react-router-dom";

import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#D1A054] px-1">
            <div>
                <h1 className="text-3xl text-center font-bold text-white py-5">Dashboard</h1>
            </div>
           
            <ul className="flex flex-col gap-2 mt-6">

            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/home' className='flex justify-start items-center w-full gap-3'><FaHome></FaHome> User Home</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/reservation' className='flex justify-start items-center w-full gap-3  '><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/payment-history' className='flex justify-start items-center w-full gap-3  '><IoWallet /> Payment History</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/cart' className='flex justify-start items-center w-full gap-3  '><FaCartShopping></FaCartShopping> My Cart ({cart.length})</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/reviews' className='flex justify-start items-center w-full gap-3  '><PiShootingStarThin />Add Review</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/dashboard/bookings' className='flex justify-start items-center w-full gap-3  '><FaList />My Booking</NavLink></li>

            <hr className="my-2 border-2"></hr>

            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/' className='flex justify-start items-center w-full gap-3  '><FaHome /> Home</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/menu' className='flex justify-start items-center w-full gap-3  '><IoMdMenu /> Menu</NavLink></li>
            
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/order/salad' className='flex justify-start items-center w-full gap-3  '><FaShoppingBag/> Shop</NavLink></li>
            <li className="btn px-4 py-2 w-full bg-base-100 cursor-pointer"><NavLink to='/contact-us' className='flex justify-start items-center w-full gap-3  '><BiMailSend /> Contact</NavLink></li>
            
            </ul>
            </div>
            <div className="flex-1 px-4">
               
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;