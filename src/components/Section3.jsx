import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className=" fix w-full  flex flex-col justify-center items-center  bg-fixed bg-cover ">
      <div className="w-9/12 m-auto text-center leading-5 pt-20">
        <p className="text-4xl font-bold font-roboto text-white">
          DÖRT MEVSİM DOĞAL, TAZE , HESAPLI
        </p>
        <p className="mt-10 text-base   text-white  ">
          Ürünlerimizin tamamı Erzurum iline aittir. Ürünlerimizi doğal
          yöntemlerle üretip, hijyen koşullarına uygun olarak paketleyip, makul
          fiyatlarla sofralarınıza ulaştırıyoruz.
        </p>
      </div>
      <Link href="/products">
        <button className="bg-red px-5 py-3 rounded-sm text-white mb-20 hover:bg-grayDark text-lg hover:text-black">
          Hemen İncele
        </button>
      </Link>
    </div>
  );
};

export default Section3;
