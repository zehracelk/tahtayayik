import React from "react";

//images
import butter from "../../images/buttersquad.jpg";
import butter2 from "../../images/butter2.jpeg";
import ghee2 from "../../images/ghee2.jpeg";
import ghee3 from "../../images/ghee3.jpg";
import whiteCheese from "../../images/white-cheese-bowl-with-green-olives.jpg";
import whiteCheese2 from "../../images/white3.jpg";
import yayik from "../../images/yayik.jpeg";
import yayik2 from "../../images/yayik2.jpg";
import civil from "../../images/civil.jpeg";
import old1 from "../../images/oldcheese2.jpg";
import old2 from "../../images/oldCheese3.jpg";
import tulum from "../../images/tulum.jpeg";
import tulum2 from "../../images/tulum2.jpeg";
import green from "../../images/greencheese.jpeg";

import Image from "next/image";
import Link from "next/link";

const Milk = () => {
  return (
    <div className="flex justify-center mt-36">
      <div className="flex justify-center rounded-md w-11/12 py-10 bg-beige">
        <div className="w-9/12 grid grid-cols-2 gap-10">
          <div className="border border-graySoft hover:border-yellowDark group rounded-md relative bg-white">
            <div className="cursor-pointer">
              <Image
                src={butter}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
            </div>
            <div className="p-2 ml-1">
              <p>Köy Tereyağı </p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/1`}>
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
                src={ghee3}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
          
            </div>
            <div className="p-2 ml-1">
              <p>Sade Yağ (Ghee Yağı) </p>
              <p className="font-bold">%100 Doğal Ürün</p>
              <Link href={`/2`}>
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
                src={whiteCheese}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
            
            </div>
            <div className="p-2 ml-1">
              <p>Yağlı Beyaz Peynir </p>
              <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
              <Link href={`/3`}>
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
                src={old1}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
            
            </div>
            <div className="p-2 ml-1">
              <p>Kars Eski Kaşar Peyniri</p>
              <p className="font-bold">Yöresel Lezzet</p>
              <Link href={`/4`}>
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
                src={yayik2}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
          
            </div>
            <div className="p-2 ml-1">
              <p>Yayık Tereyağı (Yayla Yağı)</p>
              <p className="font-bold">Yayık Yağı</p>
              <Link href={`/5`}>
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
                src={tulum2}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
          
            </div>
            <div className="p-2 ml-1">
              <p>Erzincan Tulum Peyniri</p>
              <p className="font-bold">Yöresel Lezzet</p>
              <Link href={`/6`}>
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
                src={civil}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
         
            </div>
            <div className="p-2 ml-1">
              <p>Civil Peynir(Çeçil Peynir)</p>
              <p className="font-bold">Taze tuzsuz civil peynir</p>
              <Link href={`/7`}>
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
                src={green}
                className=" rounded-md transition-all duration-300 cursor-pointer "
              />
           
            </div>
            <div className="p-2 ml-1">
              <p>Göğermiş Peynir </p>
              <p className="font-bold">Erzurum 'un meşhur yeşil peyniri</p>
              <Link href={`/8`}>
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

export default Milk;
