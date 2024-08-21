import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";
import { FcInTransit } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="bg-grayText flex items-center md:h-40 h-72 w-full md:pt-4 p-1 bg-soft mt-6">
      <div className="md:w-11/12 w-full m-auto grid grid-col-1 md:grid-cols-3 gap-4 ">
        <div className="flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl cursor-pointer text-white rounded-full">
          <FaShippingFast size={32} />
          <p className="text-sm font-bold">
            Türkiye'nin her iline kargo imkanı
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl cursor-pointer text-white rounded-full">
          <RiSecurePaymentLine size={32} />
          <p className="text-sm font-bold">Güvenli Alışveriş</p>
        </div>{" "}
        <div className="flex flex-col justify-center items-center shadow-xl  hover:shadow-2xl cursor-pointer text-white rounded-full">
          <VscFeedback size={32} />
          <p className="text-sm font-bold">100% Müşteri Memnuniyeti</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Section4;
