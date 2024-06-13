import Hero from "../component/Hero";
import HomeAbout from "../component/component-home/HomeAbout";
import Specialsmenu from "../component/component-home/Specialsmenu";
import Testimonials from "../component/component-home/Testimonials";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-6 mt-[100px]">
          <Hero />
        </div>
        <Specialsmenu />
        <Testimonials />
        <HomeAbout />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
