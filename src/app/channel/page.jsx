import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Channel = () => {
  return (
    <div className="mt-24 mb-20 flex justify-center ">
      <div className="flex flex-col w-11/12">
        <a href="https://wa.me/+905526931476">
          <div className="p-8  flex border rounded-md shadow-md cursor-pointer hover:opacity-50">
            <BsWhatsapp style={{ fontSize: "5em" }} />
            <div className="mt-8 ml-5 text-xl font-bold">05526931476</div>
            <p className="mt-8 ml-20">
              WhatsApp hattımızdan iletişim kurabilirsiniz.
            </p>
          </div>
        </a>

        <a href="https://ig.me/m/tahtayayik">
          <div className="p-8  flex border rounded-md shadow-md cursor-pointer hover:opacity-50 mt-5">
            <FaInstagram style={{ color: "pink", fontSize: "5.2em" }} />
            <div className="mt-8 ml-5 text-xl font-bold">@tahtayayik</div>
            <p className="mt-8 ml-20">
              İnstagram hesabımızdan dm yoluyla iletişim kurabilirsiniz.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Channel;
