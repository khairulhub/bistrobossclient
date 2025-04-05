import { Helmet } from "react-helmet-async";

import MenuCategory from "../MenuCategory/MenuCategory";
import { useMenu } from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import SectionTitile from "../../../Components/SectionTitle/SectionTitile";
import img from "../../../assets/menu/banner3.jpg";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <Cover
        title="OUR MENU"
        subtitle="Would you like to try a dish?"
        img={img}
      />
      <SectionTitile 
        heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitile>

      
         {/*offered */}
      <MenuCategory items={offered}  buttonText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>




         {/*dessert */}
      <MenuCategory coverImg={dessertImage} items={dessert} title='dessert' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' buttonText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>




          {/*pizza */}
      <MenuCategory coverImg={pizzaImg} items={pizza} title='pizza' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' buttonText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>

      

          {/*salads */}
      <MenuCategory coverImg={saladImg} items={salad} title='salads' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' buttonText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>



          {/*soup */}
      <MenuCategory coverImg={soupImg} items={soup} title='soups' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' buttonText='ORDER YOUR FAVOURITE FOOD'></MenuCategory>








    </div>
  );
};

export default Menu;
