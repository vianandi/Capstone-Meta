import customer from "../../images/customer.png";

const CardTestimonials = ({rating, images, name, review}) => {
  return (
    <div className="flex flex-col max-w-[250px] p-5 bg-[#ffffff] mb-5">
      <div>
        <p className="font-bold">{rating}</p>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <img src={images} alt="img" className="w-[50px]" />
        <p className="font-bold">{name}</p>
      </div>
      <div className="mt-5">
        <p className="text-justify">
          {review}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonials;
