import CardTestimonials from "./CardTestimonials";
import customer from "../../images/customer.png";

const customerlist = [
  {rating: '5/5' , image: customer, name: 'Customer 1', review: 'Absolutely fantastic! The reservation process was seamless. The restaurant is very clean, and the food is delicious.'},
  {rating: '4.5/5' , image: customer, name: 'Customer 2', review: 'Excellent service and delicious food! We reserved a table for a special occasion, and everything was perfect'},
  {rating: '4.7/5' , image: customer, name: 'Customer 3', review: 'Best dining experience we have had in a long time! The reservation was quick, the atmosphere was lovely'},
  {rating: '4.6/5' , image: customer, name: 'Customer 4', review: 'A delightful experience! The reservation was easy, the dining atmosphere was perfect, and the delivery service was reliable.'}
]

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mt-[120px] bg-[#495E57] w-[1440px] p-5">
      <h1 className="text-[30px] font-bold mb-[60px] text-[#F4CE14]">Testimonials</h1>
      <div className="flex gap-5">
        {customerlist.map((item, index) => (
          <CardTestimonials
            key={index}
            rating={item.rating}
            images={item.image}
            name={item.name}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
