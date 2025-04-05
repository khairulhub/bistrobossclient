import { Helmet } from "react-helmet-async";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { useMenu } from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../../Shared/OrderTab/OrderTab";
import orderCover from "../../../assets/shop/order.jpg";

import "./Order.css";

const Order = () => {

    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    
  const [tabIndex, setTabIndex] = useState(initialIndex);
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
        <title>Bistro | order</title>
      </Helmet>

      <Cover
        img={orderCover}
        title="OUR SHOP"
        subtitle="Would you like to try a dish?"
      ></Cover>

      <Tabs
        className="my-5 "
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList >
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
       
      </Tabs>
    </div>
  );
};

export default Order;
