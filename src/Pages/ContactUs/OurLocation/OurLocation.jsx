import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

import SectionTitile from "../../../Components/SectionTitle/SectionTitile";

const OurLocation = () => {
    return (
        <section>
            <SectionTitile heading="OUR LOCATION" subHeading="Visit Us"></SectionTitile>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-5">
                <div className="bg-red-100">
                    <div className="w-full py-4 text-center text-2xl bg-[#D1A054] text-white flex justify-center items-center gap-2">
                        <FiPhoneCall/>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-8 px-4 ">
                        <h3 className="text-2xl">Phone</h3>
                        <h3 className="text-xl">+38 (012) 34 56 789</h3>
                    </div>
                
                </div>
                <div className="bg-red-100">
                    <div className="w-full py-4 text-center text-2xl bg-[#D1A054] text-white flex justify-center items-center gap-2">
                    <IoLocationOutline />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-8">
                        <h3 className="text-2xl">Location</h3>
                        <h3 className="text-xl">+38 (012) 34 56 789</h3>
                    </div>
                
                </div>
                <div className="bg-red-100">
                    <div className="w-full py-4 text-center text-2xl  bg-[#D1A054] text-white flex justify-center items-center gap-2">
                    <CiClock2 />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-8">
                        <h3 className="text-2xl">Working Hours</h3>
                        <h3 className="text-xl">Mon - Fri: 08:00 - 22:00</h3>
                        <h3 className="text-xl">Sat - Sun: 10:00 - 23:00</h3>
                    </div>
                
                </div>
           </div>

            
        </section>
    );
};

export default OurLocation;