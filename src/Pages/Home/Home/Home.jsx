import { Helmet } from "react-helmet-async";

import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import InfoBist from "../../Info/InfoBist";


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <InfoBist />
            <PopularMenu />
            <CallUs />
            <ChefRecommend />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;