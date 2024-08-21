import React from "react";

//images
import Image from "next/image";
import jam1 from "../../images/jam1.jpg";
import jam2 from "../../images/jam2.jpg";
import jam3 from "../../images/jam3.jpg";
import pekmez from "../../images/pekmez.jpeg";
import pekmez3 from "../../images/pekmez3.jpg";
import roseship from "../../images/roseship.webp";
import akide from "../../images/akide.jpeg";
import Link from "next/link";

const Jam = () => {
  return (
    <div className="mt-36 flex justify-center">
      <div className="w-11/12  py-10 bg-beige flex justify-center ">
        <div className="w-9/12 grid grid-cols-2 gap-10 ">
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={jam2}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={jam3}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Kızılcık Marmelatı </p>
              <p className="font-bold">El Yapımı Yerli Ürün</p>
              <Link href={`/9`}>
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
                src={pekmez}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={pekmez}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>İspir Dut Pekmezi</p>
              <p className="font-bold">Katkısız, yoğu kıvamlı pekmez</p>
              <Link href={`/10`}>
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
                src={roseship}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={roseship}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Kuşburnu Marmelatı </p>
              <p className="font-bold">El Yapımı Doğal Ürün</p>
              <Link href={`/11`}>
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
                src={pekmez3}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={pekmez3}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Tortum Dut Pekmezi</p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/12`}>
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
                src={akide}
                className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
              />
              <Image
                src={akide}
                className="hidden group-hover:block rounded-md"
              />
            </div>
            <div className="p-2 ml-1">
              <p>Akide Şekeri </p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/13`}>
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

export default Jam;
