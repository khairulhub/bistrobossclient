import ContactForm from "../ContactForm/ContactForm";
import OurLocation from "../OurLocation/OurLocation";
import Cover from "../../Shared/Cover/Cover";
import contactCoverImg from "../../../assets/contact/contact.jpg";

const ContactUs = () => {
    return (
        <section>
                <Cover img={contactCoverImg} title="contact us" subtitle="Would you like to try a dish?"></Cover>
                <OurLocation></OurLocation>
                <ContactForm></ContactForm>
        </section>
    );
};

export default ContactUs;