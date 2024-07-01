"use client";
import React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const BasketModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 rounded-md">
            <div className="flex flex-col items-center border p-12 rounded-md border-earth">
              <h3>Ürün sepetinize başarıyla eklendi.</h3>
              <br />
              <div className="flex">
                <Link href="/basket">
                  <button
                    type="button"
                    className="bg-earth text-white py-2 px-4 rounded-full cursor-pointer hover:bg-soft mx-2"
                  >
                    Sepete Git
                  </button>
                </Link>
                <Link href="/products">
                  <button
                    type="button"
                    className="bg-earth text-white py-2 px-4 rounded-full cursor-pointer hover:bg-soft"
                  >
                    Alışverişe Devam Et
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default BasketModal;
