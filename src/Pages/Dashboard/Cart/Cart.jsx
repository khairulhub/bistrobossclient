import React from "react";

import { RiDeleteBin7Fill } from "react-icons/ri";

import Swal from "sweetalert2";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const axiosSecure =  useAxiosSecure();

  const handleDeleteCartItem = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't Delete this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        axiosSecure.delete(`/carts/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success"
                });
               
            }
        })
        
        }
      });
  }

  return (
    <div>
      <div className="bg-base-200 py-6 flex justify-evenly">
        <h1 className="text-3xl text-center">Total Order: {cart.length}</h1>
        <h1 className="text-3xl text-center">Total Price: {totalPrice}</h1>
        <button className="btn btn-active btn-primary">Primary</button>
      </div>
      <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    #
                    </th>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map((item, index) =>  <tr key={item._id}>
                        <th>
                        {index + 1}
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>

                                    {/*  <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    */}
                        </div>
                        </td>
                        <td>
                        {item.name}
                        
                        </td>
                        <td>{item.price}</td>
                        <th>
                        <button onClick={()=>handleDeleteCartItem(item._id)} className="btn btn-ghost btn-lg p-2"><RiDeleteBin7Fill className="text-red-500" /></button>
                        </th>
                    </tr>
               
                )
                }
               
               
              
                </tbody>
              
            </table>
            </div>
    </div>
  );
};

export default Cart;
