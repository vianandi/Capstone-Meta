import customer from "../../images/customer.png";

const Review = () => {
  return (
    <div className="max-w-[1000px] my-5 ">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex gap-5">
          <div>
            <img src={customer} alt="" className="w-[440px] h-[161px]"/>
          </div>
          <div className="flex flex-col">
            <p className="text-justify">
              Dining at Little Lemon Restaurant was an unforgettable experience.
              The ambiance was perfect, the service was impeccable, and the food
              was simply outstanding. We also tried their delivery service, and
              the quality remained top-notch. From the moment we made our
              reservation to the last bite of dessert, everything was flawless.
              The staff made us feel special, and the delivery service is
              equally impressive. Five stars!
            </p>
            <p className="mt-5">Zoy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
