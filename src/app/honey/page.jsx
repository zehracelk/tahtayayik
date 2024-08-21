import React from "react";

//image
import Image from "next/image";
import honey from "../../images/honey3.jpg";
import honeyBlack from "../../images/honeyBlack.jpg";
import hony from "../../images/hony.jpg";
import Link from "next/link";

const Honey = () => {
  return (
    <div className="mt-36 flex justify-center">
      <div className="w-11/12 bg-beige flex justify-center py-10">
        <div className="w-9/12 grid grid-cols-2 gap-10 justify-center">
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={honey}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={honey}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Süzme Çiçek Balı</p>
              <p className="font-bold">%100 Doğal Ürün</p>
              <Link href={`/14`}>
                <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4  py-2 w-1/2">
                  incele
                </div>
              </Link>
            </div>
            <div
              className="flex items-center  invisible group-hover:visible pb-1 
          absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4"
            >
              <div className="bg-graySoft px-3 py-2 w-1/2 hover:bg-yellowDark rounded-full ">
                <i className="fa-solid fa-heart fa-xs"></i>
              </div>
              <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
                <i className="fa-solid fa-code-compare"></i>
              </div>
            </div>
          </div>
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={honeyBlack}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={honeyBlack}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Karakovan Balı</p>
              <p className="font-bold">El Yapımı Doğal Ürün</p>
              <Link href={`/15`}>
                <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4  py-2 w-1/2">
                  incele
                </div>
              </Link>
            </div>
            <div
              className="flex items-center  invisible group-hover:visible pb-1 
          absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4"
            >
              <div className="bg-graySoft px-3 py-2 w-1/2 hover:bg-yellowDark rounded-full ">
                <i className="fa-solid fa-heart fa-xs"></i>
              </div>
              <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
                <i className="fa-solid fa-code-compare"></i>
              </div>
            </div>
          </div>{" "}
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={hony}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={hony}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Petek Bal </p>
              <p className="font-bold">% 100 Doğal Ürün</p>
              <Link href={`/16`}>
                <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4  py-2 w-1/2">
                  incele
                </div>
              </Link>
            </div>
            <div
              className="flex items-center  invisible group-hover:visible pb-1 
          absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4"
            >
              <div className="bg-graySoft px-3 py-2 w-1/2 hover:bg-yellowDark rounded-full ">
                <i className="fa-solid fa-heart fa-xs"></i>
              </div>
              <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
                <i className="fa-solid fa-code-compare"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honey;
