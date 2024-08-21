import React from "react";
import Image from "next/image";
import image1 from "../images/milksblue.jpg";
import honey from "../images/honey.jpg";
import ceviz from "../images/ceviz.jpg";
import jam from "../images/jam2.jpg";
import Link from "next/link";

const Section1 = () => {
  return (
    <div className="md:h-72 w-full flex flex-col pb-2 mb-4">
      <div className="w-11/12 mx-auto pt-3 mb-10">
        <p className="font-bold pb-3 mb-4">Ürünlerimiz</p>
      </div>
      <div className="w-11/12  grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-1 md:h-48  mx-auto md:gap-3 sm:gap-2 items-center ">
        <Link href="/milk">
          <div className="cursor-pointer rounded-md pb-4 border-b shadow-lg">
            <Image
              src={image1}
              alt="img1"
              width={300}
              height={300}
              className="w-full hover:brightness-75 rounded-t-md"
            />

            <div className="flex flex-col sm:ml-8">
              <p className="sm:text-lg text-xs font-bold">Süt Ürünleri</p>
              <p className="text-xs text-grayDown">8 products</p>
            </div>
          </div>
        </Link>

        <Link href="/jam">
          <div className="cursor-pointer rounded-md border-b shadow-lg pb-4">
            <Image
              src={jam}
              width={300}
              height={300}
              className="w-full hover:brightness-75 rounded-t-md"
            />
            <div className="flex flex-col sm:ml-8">
              <p className="sm:text-lg text-xs font-bold">Reçel-Pekmez</p>
              <p className="text-xs text-grayDown">5 products</p>
            </div>
          </div>
        </Link>

        <Link href="/honey">
          <div className="cursor-pointer rounded-md border-b shadow-lg pb-4">
            <Image
              src={honey}
              width={300}
              height={300}
              className="w-full hover:brightness-75 rounded-t-md"
            />
            <div className="flex flex-col  sm:ml-8">
              <p className="sm:text-lg text-xs font-bold">Bal Çeşitleri</p>
              <p className="text-xs text-grayDown">3 products</p>
            </div>
          </div>
        </Link>

        <Link href="/drys">
          <div className="cursor-pointer rounded-md border-b shadow-lg pb-4">
            <Image
              src={ceviz}
              width={300}
              height={300}
              className="w-full hover:brightness-75 rounded-t-md"
            />
            <div className="flex flex-col sm:ml-8 ">
              <p className="sm:text-lg text-xs font-bold">Kuru Gıdalar</p>
              <p className="text-xs text-grayDown">4 products</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
