import image from "../../images/image.png";

const HomeAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-8 max-w-[865px]">
      <div className="text lg:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-2">Little Lemon</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Jakarta</h2>
        <p className="text-lg leading-relaxed text-justify">
          Experience the ease of booking a table with our user-friendly
          reservation system. Whether it's an intimate dinner for two, a family
          celebration, or a corporate event, we ensure your table is ready and
          waiting for you. Our elegant ambiance, attentive service, and
          delectable menu create the perfect setting for any occasion.
        </p>
      </div>
      <div className="relative lg:w-1/2 flex justify-center items-center">
        <img
          src={image}
          alt="Chef preparing food"
          className="w-72 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomeAbout;
