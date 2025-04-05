import { Link } from "react-router-dom";

import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, subTitle, buttonText }) => {
  return (
    <div >
        {title && <Cover
            title={title}
            subtitle={subTitle}
            img={coverImg} className="bg-cover bg-center bg-no-repeat" />
        }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12 mb-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>


      {buttonText &&
        <Link to={`/order/${title}`}><div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4">{buttonText}</button>
        </div></Link> }

      
    </div>
  );
};

export default MenuCategory;
