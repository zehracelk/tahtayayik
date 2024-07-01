import React from "react";
import { MdCurrencyLira } from "react-icons/md";
import Link from "next/link";

const PayCard = ({ sum, cargoPrice }) => {
  const acc = sum ? sum + cargoPrice : 0;

  return (
    <div className="border sm:mx-4 flex flex-col justify-center px-4 py-2 rounded-md">
      <div className="my-5 flex">
        Toplam : {sum} <MdCurrencyLira className="mt-1" />
      </div>
      <div className="my-5 flex">
        Kargo Bedeli : {cargoPrice} <MdCurrencyLira className="mt-1" />
      </div>
      <div className="mt-5 flex">
        Genel Toplam :{acc}
        <MdCurrencyLira className="mt-1" />
      </div>

      <Link href="/continue">
        <div className="flex justify-center">
          <button className="mt-12 border w-40 p-3 rounded-full bg-earth text-white hover:opacity-80">
            Devam Et
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PayCard;
