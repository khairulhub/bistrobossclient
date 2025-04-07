import Swal from "sweetalert2";

import {  useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCart = ({item}) => {
    const { image, price, name, recipe, _id} = item;
    const {user} = useAuth();
    const Navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [cart, isPending, error, refetch] = useCart();

    const handleAddToCart = (food) => {
        
        // console.log(food, user.email);
        //send the data to the server
        if(user && user.email) {
          const cartItem = {foodItemId: _id, name, image, price, email: user.email};

          axiosSecure.post('/carts', cartItem)
          .then(res => {
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} added to cart`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })

          
          
        }
        else{
          Swal.fire({
            title: "You are not logged in!",
            text: "Please log in to add items to your cart.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
              Navigate('/login', state={from: location});
            }
          });
        }

    }
    return (
           <div className="shadow-xl card bg-base-100 w-96">
                  <figure>
                    <img className="h-[300px] w-full"
                      src={image}
                      alt=""
                    />
                  </figure>
                  <p className="absolute right-0 px-4 py-2 mt-4 mr-4 text-white bg-slate-800">${price}</p>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="justify-center card-actions">
                      <button onClick={()=>{handleAddToCart(item)}} className="text-yellow-600 uppercase border-0 border-b-4 btn btn-outline">add to cart</button>
                    </div>
                  </div>
                </div>
    );
};

export default FoodCart;