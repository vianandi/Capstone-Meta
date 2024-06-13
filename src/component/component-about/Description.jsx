import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";

const Description = () => {
  return (
    <div className="flex items-center justify-center p-5 w-[1100px] max-w-[1100px]">
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-between gap-5">
          <img src={about1} alt="about1" className="w-[460px] h-[325px]" />
          <p className="max-w-[420px] text-justify">
            Welcome to Little Lemon Restaurant, where culinary excellence meets
            exceptional service. Nestled in the heart of Jakarta, our restaurant
            is dedicated to providing a memorable dining experience for every
            guest, whether you're joining us in person or savoring our gourmet
            dishes at home. <br /> At Little Lemon Restaurant, we pride
            ourselves on offering a diverse menu that celebrates the finest
            ingredients and innovative culinary techniques. Our chefs are
            passionate about creating dishes that not only delight the palate
            but also tell a story of flavor, tradition, and creativity.
          </p>
        </div>
        <div className="flex items-center gap-5 mt-16">
          <p className="max-w-[420px] text-justify">
            For those who prefer to dine at home, our delivery service brings
            the taste of Little Lemon Restaurant right to your doorstep. Each
            dish is carefully prepared and packaged to maintain its freshness
            and quality, ensuring that your dining experience is just as
            delightful as it would be in our restaurant. <br />
            Thank you for choosing Little Lemon Restaurant. We look forward to
            welcoming you and making your dining experience extraordinary.
          </p>
          <img src={about2} alt="about1" className="w-[460px] h-[325px]" />
        </div>
      </div>
    </div>
  );
};

export default Description;
