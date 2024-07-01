"use client";
import React, { useEffect, useState } from "react";
import productsData from "../../productsData.js";
import Link from "next/link.js";
import { MdCurrencyLira } from "react-icons/md";

//images
import Image from "next/image";
import honey from "../../images/honey.jpg";

const ProductCard = ({ id }) => {
  const data = productsData.find((item) => item.id == id);

  useEffect(() => {
    console.log("data:", data);
    console.log(productsData);
    console.log("basket1:", basket);
  }, []);

  const [count, setCount] = useState(1);
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  // JSON.parse(localStorage.getItem("basket")

  const handleCount = () => {
    if (count <= 1) {
      count == 0;
    } else setCount(count - 1);
  };

  const sendBasket = (data, count) => {
    if (basket?.find((b) => b.id === data.id)) {
      const newBasket = basket?.map((bskItem) => {
        if (data.id === bskItem.id) {
          return {
            ...data,
            count: bskItem.count + count,
          };
        } else {
          return bskItem;
        }
      });
      setBasket(newBasket);
    } else {
      const item = { ...data, count };
      setBasket([...basket, item]);
    }
  };

  localStorage.setItem("basket", JSON.stringify(basket));

  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center mb-28 ">
      <div className="w-11/12 flex flex-col sm:flex-row ">
        <div className=" mr-20">
          <Image
            src={data.image}
            width={600}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-3/4 ">
          <div className="border-b-2 mb-2 text-lg">
            <h1 className="mb-2">{data.productName}</h1>
          </div>
          <div className="flex border-b-2 ">
            <div className="flex border-r-2 pr-4 md:pr-20 m-2">
              <div className="flex">
                <p className="text-sm md:text-lg font-semibold">{data.price}</p>
                <div className="mt-1">
                  <MdCurrencyLira className="mt-1" />
                </div>
                <div className="mt-1"> / kg</div>
              </div>
            </div>
            <div className="pl-20 flex justify-center items-center">
              <div>
                <p className="text-teal-400">STOKTA</p>
              </div>
            </div>
          </div>
          <div className="py-3 border-b-2">
            <div>
            <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
            <summary className="text-md leading-6 text-slate-900 dark:text-white font-semibold select-none">Ürün Özellikleri</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{data.comment}</p>
            </details>
         
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="flex">
              <button
                onClick={() => handleCount()}
                className="m-2 py-1 px-4 shadow-sm border rounded-full text-2xl bg-soft"
              >
                -
              </button>
              <div className="m-2 py-3 text-lg">{count}</div>
              <button
                onClick={() => setCount(count + 1)}
                className="m-2 py-1 px-4 shadow-sm border rounded-full text-2xl bg-soft"
              >
                +
              </button>
            </div>
            <Link href="?modal=true">
              <button
                onClick={() => sendBasket(data, count)}
                className="mt-5 relative overflow-hidden rounded-full h-12 ml-10 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-teal-800 before:via-purple-400 before:to-teal-400"
              >
                <span className="relative text-white font-bold px-12 py-8">
                  Sepete Ekle
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
