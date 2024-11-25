import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Service from "./Service/Service";


const Home = () => {
    return (
        <div >
           <Carousel></Carousel>
           <About></About>
           <Service></Service>
           <Contact></Contact>
        </div>
    );
};

export default Home;