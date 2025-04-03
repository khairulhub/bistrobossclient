import SectionTitile from "../../../Components/SectionTitle/SectionTitile";
import featuredImg from "../../../assets/home/featured.jpg";
import './Category.css'

const Featured = () => {
    return (
        <section className="Category_bgImg bg-fixed">
            <SectionTitile heading='FROM OUR MENU' subHeading='Check it out' ></SectionTitile>
            <div className="grid md:grid-cols-2 gap-10 py-4 px-20">
            <div><img src={featuredImg} alt=""  /></div>
            <div className="flex flex-col justify-center items-start space-y-4  p-8">
                <p >March 20, 2023</p>
                <p className=" uppercase">WHERE CAN I GET SOME?</p>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline  border-0 border-b-4 mt-4">Read More</button>
            
            </div>
            </div>
        </section>
    );
};

export default Featured;