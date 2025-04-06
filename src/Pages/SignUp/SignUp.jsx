import React, { useContext } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {


    const { register,handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password).then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
            updateUserProfile(data.name, data.photo)
            .then(() => {
                console.log('User profile updated successfully');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                reset();
                navigate('/');
            })
            .catch(error => {
                console.error('Error updating user profile:', error);
            });
          
        })
        
    }
    
    return (
       <section>

        <Helmet>
            <title>Bisto Boss || Sign Up</title>
        </Helmet>



       <div className="min-h-screen hero bg-base-200">
       <div className="flex-col hero-content lg:flex-row-reverse">
           <div className="w-1/2 text-center lg:text-left">
           <h1 className="text-5xl font-bold">Register now!</h1>
           <p className="py-6">
               Create an account to enjoy exclusive benefits and features. Join us today and be part of our community!
           </p>
           </div>
           <div className="w-1/2 max-w-sm shadow-2xl card bg-base-100 ">
           <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Name</span>
               </label>
               <input type="text" {...register("name")} placeholder="Name" className="input input-bordered" required />
               </div>

               
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Photo Url</span>
               </label>
               <input type="text" {...register("photo")} placeholder="photo" className="input input-bordered"  />
               {errors.photo && <span className="text-red-500">Photo field is required</span>}
               </div>


               <div className="form-control">
               <label className="label">
                   <span className="label-text">Email</span>
               </label>
               <input type="email"  {...register("email",{ required: true })} placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-500">This field is required</span>}
               </div>

               
               <div className="form-control">
                    <label className="label">
                   <span className="label-text">Password</span>
                    </label>
                      <input type="password" {...register("password",
                         { required: true,
                             minLength: 6,
                              maxLength: 20,
                            pattern:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                         })}   placeholder="password" className="input input-bordered"  />


                    {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be at least 6 characters</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-500">Password must be 1 uppercase 1 lowercase 1 number and 1 symbol </span>}
               </div>

              
               <div className="mt-6 form-control">
               <input  type="submit" value="Register" className="btn btn-primary w-full"/>
               
               </div>
               <div className="mt-6 form-control">
               <label className="label">
                   <Link to='/login'  className="label-text-alt link link-hover">All ready have an account?</Link>
               </label>
               
               </div>
           </form>
           </div>
       </div>
</div>
       </section>
    );
};

export default SignUp;