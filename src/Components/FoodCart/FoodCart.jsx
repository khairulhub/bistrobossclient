



const FoodCart = ({item}) => {
    const { image, price, name, recipe } = item;
    return (
           <div className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                    <img className="h-[300px] w-full"
                      src={image}
                      alt=""
                    />
                  </figure>
                  <p className="absolute right-0 mr-4 mt-4 bg-slate-800 text-white px-4 py-2">${price}</p>
                  <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                      <button className="btn btn-outline border-0 border-b-4 uppercase text-yellow-600">add to cart</button>
                    </div>
                  </div>
                </div>
    );
};

export default FoodCart;