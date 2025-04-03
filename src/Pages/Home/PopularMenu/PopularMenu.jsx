import { useEffect, useState } from "react";

import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitile from "../../../Components/SectionTitle/SectionTitile";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)})
    },[])
    return (
        <section className="my-4">
            <SectionTitile  heading='FROM OUR MENU' subHeading='Check it out'></SectionTitile>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8 mb-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                }

            </div>  
            <div className="text-center mb-10">
            <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;