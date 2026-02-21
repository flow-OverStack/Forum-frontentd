import Header from "./header/Header";
import Hero from "./hero/Hero";
import Advantages from "./advantages/Advantages";
import Discussions from "./discussions/Discussions";
import Footer from "./footer/Footer";

const FirstPage = () => {
    return (
        <div className="div">
            <Header />
            <Hero />
            <Advantages />
            <Discussions />
            <Footer />
        </div>
    )
}
export default FirstPage