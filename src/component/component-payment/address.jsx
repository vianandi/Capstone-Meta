import React from "react";
import Location from "../../images/location.svg";
import Maps from "../../images/maps.svg";

const Address = () => {
  return (
    <div className="flex justify-center items-center text-left mb-8 p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-2 w-[450px]">
        <img src={Location} alt="Location" className="h-6 w-6 mr-2" />
        <div>
          <p className="text-lg font-bold">FX Sudirman</p>
          <p>
            Jl. Jenderal Sudirman, Gelora, Kecamatan Tanah Abang, Kota Jakarta
            Pusat, Daerah Khusus Ibukota Jakarta 10270
          </p>
        </div>
      </div>
      <button className="bg-[#495E57] p-2 mt-2 text-[#F4CE14] flex items-center rounded-lg">
        <img src={Maps} alt="Maps" className="h-5 w-5 mr-1" />
        Open in Maps
      </button>
    </div>
  );
};

export default Address;
