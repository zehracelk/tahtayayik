import React from "react";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { MdCurrencyLira } from "react-icons/md";
import Link from "next/link";

const BasketCard = ({ countDown, countUp, handleRemove, basket }) => {
  return (
    <div className="w-full md:w-6/12 flex flex-col rounded-md">
      <table className="bg-slate-100 rounded-md">
        <thead className="bg-soft ">
          <tr className="rounded-md">
            <th></th>
            <th className="text-start">Ürün Adı</th>
            <th className="text-start">Fiyat</th>
            <th>Kaldır</th>
            <th>Adet</th>
          </tr>
        </thead>
        <tbody>
          {basket?.map((item, index) => (
            <tr className="border-b border-white" key={index}>
              <td className="flex justify-start">
                <Image src={item?.image} width={100} />
              </td>

              <td className="text-start cursor-pointer hover:underline">
                <Link href={`${item.id}`}>{item.productName}</Link>
              </td>
              <td className="text-start ">
                <div className="flex">
                  {item.price}
                  <MdCurrencyLira className="mt-1" />
                </div>
              </td>
              <td className="align-items-center">
                <button onClick={() => handleRemove(item.id)}>
                  <FaRegTrashCan className="sm:mr-8 md:ml-8 lg:ml-16 shadow-md" />
                </button>
              </td>
              <td>
                <div className="flex justify-around">
                  <button onClick={() => countUp(item.id, item.count)}>
                    <FaRegArrowAltCircleUp className="shadow-md cursor-pointer" />
                  </button>
                  <div>{item.count}</div>
                  <button onClick={() => countDown(item.id, item.count)}>
                    <FaRegArrowAltCircleDown className="shadow-md cursor-pointer" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasketCard;
