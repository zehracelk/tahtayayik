import React from "react";

//image
import Image from "next/image";
import white from "../../images/white-beans.jpg";
import ceviz from "../../images/ceviz.jpg";
import dut from "../../images/mullberry.jpg";
import köme from "../../images/köme.jpg";
import Link from "next/link";

const Drys = () => {
  return (
    <div className="mt-36 flex justify-center mb-36">
      <div className="w-11/12 bg-beige flex justify-center py-10">
        <div className="w-9/12 grid grid-cols-2 gap-10 justify-center">
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={white}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={white}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>İspir Fasulyesi</p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/17`}>
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
                src={ceviz}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={ceviz}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Yerli Ceviz</p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/18`}>
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
                src={dut}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={dut}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Kuru Dut</p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/19`}>
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
                src={köme}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={köme}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Cevizli Köme</p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/20`}>
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

export default Drys;
