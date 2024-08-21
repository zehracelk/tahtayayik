import React from "react";
import Image from "next/image";
import image2 from "../images/honeyfall.jpg";
import ceviz from "../images/ceviz.jpg";
import ceviz2 from "../images/ceviz2.jpg";
import butter from "../images/buttersquad.jpg";
import gee from "../images/ghee.jpg";
import ghee from "../images/butterpure.jpg";
import bal from "../images/honeypure.jpg";
import bal2 from "../images/honeyfall.jpg";
import kasar from "../images/oldcheese2.jpg";
import kasar2 from "../images/oldcheese.jpg";
import beyaz1 from "../images/white-cheese-bowl-with-green-olives.jpg";
import beyaz2 from "../images/white2.jpg";
import honey from "../images/honey.jpg";
import pekmez from "../images/pekmez.jpeg";
import pekmez2 from "../images/pekmez2.webp";
import bean from "../images/bean.jpg";
import bean2 from "../images/white-beans.jpg";

import Link from "next/link";

const Section2 = () => {
  return (
    <div className="w-11/12  mx-auto  flex flex-col items-center justify-evenly bg-white">
      <div className="w-full bg-graySoft rounded-md border-l-8 border-earth  p-2 text-2xl font-bold mt-4 mb-4 shadow-sm">
        Popüler Ürünlerimiz
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2">
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={ceviz2}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={ceviz}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1">
            <p>Yerli Ceviz </p>
            <p className="font-bold">Yüksek Kalite Yerli Ürün</p>
            <Link href={`/18`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div
            className="flex items-center  invisible group-hover:visible pb-1 
          absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4"
          >
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={butter}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={image2}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Köy Tereyağı</p>
            <p className="font-bold hover:text-yellowDark">
              Katkısız Doğal Tereyağı
            </p>

            <Link href={`/1`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={bal}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={honey}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Şekersiz Süzme Bal</p>
            <p className="font-bold hover:text-yellowDark">
              Yüksek Kalite Sıfır Şeker
            </p>

            <Link href={`/14`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2 my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={gee}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image src={ghee} className="hidden group-hover:block rounded-md" />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Ghee Yağı(Sade Yağ)</p>
            <p className="font-bold hover:text-yellowDark">
              Arındırılmış Tereyağı
            </p>

            <Link href={`/2`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2 my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={kasar}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={kasar2}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Eski Kars Kaşar Peyniri</p>
            <p className="font-bold hover:text-yellowDark">
              Katkısız Doğal Lezzet
            </p>

            <Link href={`/4`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>

        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={beyaz1}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={beyaz2}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Yağlı Peynir</p>
            <p className="font-bold hover:text-yellowDark">
              Katkısız Beyaz Peynir
            </p>

            <div>
              <i className="fa-solid fa-star fa-xs"></i>
              <i className="fa-solid fa-star fa-xs"></i>
            </div>
            <Link href={`/3`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={pekmez}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={pekmez2}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>İspir Dut Pekmezi</p>
            <p className="font-bold hover:text-yellowDark">
              Organik Dut Pekmezi
            </p>

            <Link href={`/10`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div className="flex items-center invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16 transition-transform duration-300 p-2   my-4">
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full ">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
        <div className="border border-graySoft hover:border-yellowDark group rounded-md relative">
          <div className="cursor-pointer">
            <Image
              src={bean}
              className="group-hover:hidden rounded-md transition-all duration-300 cursor-pointer "
            />
            <Image
              src={bean2}
              className="hidden group-hover:block rounded-md"
            />
          </div>
          <div className="p-2 ml-1 cursor-pointer">
            <p>Kuru Fasulye</p>
            <p className="font-bold hover:text-yellowDark">Hınıs Fasulyesi</p>

            <Link href={`/17`}>
              <div className="group-hover:bg-soft hover:cursor-pointer group-hover:text-earth my-4 text-l font-bold text-white bg-earth flex justify-center rounded-md px-4 w-1/2">
                incele
              </div>
            </Link>
          </div>
          <div
            className="flex justify-between invisible group-hover:visible pb-1 absolute group-hover:-translate-y-16
           transition-transform duration-300 p-2   my-4"
          >
            <div className="bg-graySoft px-3 py-2 hover:bg-yellowDark rounded-full">
              <i className="fa-solid fa-heart fa-xs"></i>
            </div>
            <div className="bg-graySoft p-2 rounded-full hover:bg-yellowDark">
              <i className="fa-solid fa-code-compare"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
