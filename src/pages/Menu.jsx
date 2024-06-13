import Hero from "../component/Hero";
import ExampleMenu from "../component/component-menu/ExampleMenu";
import Categories from "../component/component-menu/Categories";
import ListMenu from "../component/component-menu/ListMenu";
import BestSellerSection from "../component/component-menu/SectionBS";
import Footer from "../component/Footer";

const Menu = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="p-6 mt-[100px]">
          <Hero />
        </div>
        <BestSellerSection />
        <Categories />
        <ListMenu />
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
