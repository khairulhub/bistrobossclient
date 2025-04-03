

const MenuItem = ({item}) => {
    return (
        <div className="flex space-x-4 ">
            <img className="w-[100px]" style={{ borderRadius: '0 200px 200px 200px' }} src={item.image} alt="" />
            <div>
                <h3 className="text-xl  uppercase ">{item.name}  --------------------</h3>
                <p className="">{item.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${item.price}</p>
        </div>
    );
};

export default MenuItem;