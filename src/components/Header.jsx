"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { TfiBag } from "react-icons/tfi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCurrencyLira } from "react-icons/md";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [text, setText] = useState();
  const basket = JSON.parse(localStorage.getItem("basket"));

  return (
    <div className="w-full mx-auto rounded-sm bg-white z-50 fixed top-0 mb-10 shadow-lg">
      <div className="flex items-center justify-between w-11/12 m-auto h-20">
        <div className="lg:hidden flex cursor-pointer group ">
          <div>
            <RxHamburgerMenu size={30} />
          </div>
          <div className="invisible group-hover:visible absolute z-10 top-14 bg-white h-screen left-0">
            <ul className="mt-5">
              <Link href="/">
                <li className="px-4 py-2 hover:bg-slate-100 pr-18 md:pr-20 ">
                  ANASAYFA
                </li>
              </Link>
              <Link href="/products">
                <li className="px-4 py-2 hover:bg-slate-100 pr-18 md:pr-20 ">
                  ÜRÜNLER
                </li>
              </Link>
              <Link href="/channel">
                <li className="px-4 py-2 hover:bg-slate-100 pr-18 md:pr-20 ">
                  İLETİŞİM
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <ul className="lg:flex md:gap-x-5 hidden">
          <Link href="/">
            <li className="underline underline-offset-8 decoration-soft decoration-bold font-bold tracking-wide">
              ANASAYFA
            </li>
          </Link>
          <Link href="/products">
            <li className="underline underline-offset-8 decoration-soft decoration-bold font-bold tracking-wide">
              ÜRÜNLER
            </li>
          </Link>
          <Link href="/channel">
            <li className="underline underline-offset-8 decoration-soft decoration-bold font-bold tracking-wide">
              İLETİŞİM
            </li>
          </Link>
        </ul>

        <Link href="/">
          <div className="flex flex-col text-center  p-2 rounded-md hover:opacity-60">
            <p className="font-bold text-2xl md:text-3xl tracking-wide">
              TAHTAYAYIK
            </p>

            <p className="text-sm ">KAHVALTILIK ÜRÜNLER</p>
          </div>
        </Link>

        {/* chart */}

        <div className="flex items-center rounded-full p-1">
          <Link href="/basket">
            <div className="p-4 relative group">
              <TfiBag size={30} className="cursor-pointer hover:opacity-50" />
              <div className="border-t-4 absolute bg-gray-100 top-16 right-5 md:-right-20 z-10 invisible group-hover:visible">
                <div className="flex  rounded-md">
                  <table className="rounded-md w-[400px]">
                    <tbody>
                      {basket?.map((item, index) => (
                        <tr className="border-b border-white" key={index}>
                          <td className=" flex justify-start rounded-md">
                            <Image src={item?.image} width={80} height={60} />
                          </td>

                          <td className=" text-start cursor-pointer hover:underline">
                            <Link href={`${item.id}`}>
                              <p className="text-sm">{item.productName}</p>
                            </Link>
                          </td>
                          <td className=" text-start ">
                            <div className="flex text-sm">
                              {item.price}
                              <MdCurrencyLira className="mt-1" />
                            </div>
                          </td>

                          <td>
                            <div className="flex justify-around">
                              <div className="text-sm">x {item.count}</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Link>

          <div className="md:flex hidden rounded-full w-72 border-2 border-earth">
            <input
              placeholder="Search"
              type="text"
              className="p-2 input flex flex-1 outline-none h-12 bg-soft rounded-full"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              type="button"
              onClick={
                () => {
                router.push(`/search?text=${text}`);
              }
              }
              onKeyUp={() => {
                router.push(`/search?text=${text}`);
              }}
            >
              <GoSearch
                size={30}
                className="mx-2 mt-2 cursor-pointer hover:opacity-50"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
