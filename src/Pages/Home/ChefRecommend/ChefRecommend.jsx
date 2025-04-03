import React from "react";

import SectionTitile from "../../../Components/SectionTitle/SectionTitile";
import img1 from "../../../assets/home/slide5.jpg";

const ChefRecommend = () => {
  return (
    <section>
      <SectionTitile
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitile>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8 mb-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-[300px] w-full"
              src={img1}
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 uppercase text-yellow-600">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-[300px] w-full"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-active btn-neutral   uppercase text-yellow-600">add to cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-[300px] w-full"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline border-0 border-b-4 uppercase text-yellow-600">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommend;
