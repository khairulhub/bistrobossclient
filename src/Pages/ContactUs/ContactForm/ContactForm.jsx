import { IoIosSend } from "react-icons/io";

import SectionTitile from "../../../Components/SectionTitle/SectionTitile";

const ContactForm = () => {
    return (
        <section>
            <SectionTitile heading="CONTACT FORM" subHeading="Send Us a Message"></SectionTitile>


            <div className="mt-10 mb-32">
                <form className="w-full max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 ">
                   
                
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className=" mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    
                    <div className=" mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Your Phone"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="flex justify-center items-center gap-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send Message <IoIosSend />
                        </button>
                    </div>
                </form>
            
            </div>

        </section>
    );
};

export default ContactForm;