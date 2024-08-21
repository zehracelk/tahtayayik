import React from "react";
import Link from "next/link";

//images
import Image from "next/image";
import image1 from "../../images/milk-products-wooden-table.jpg";
import honey from "../../images/honey4.jpg";
import ceviz from "../../images/ceviz.jpg";
import jam from "../../images/jam2.jpg";

const Products = () => {
  return (
    <div className="mt-36">
      <div className="w-11/12  grid grid-cols-2 grid-rows-2 gap-8 mx-auto  items-center ">
        <Link href="/milk">
          <div className="cursor-pointer rounded-md pb-4 border-b shadow-lg">
            <Image
              src={image1}
              alt="img1"
              width={300}
              height={300}
              className="w-full hover:brightness-75 rounded-t-md"
            />

            <div className="flex ml-8 flex-col">
              <p className="text-lg font-bold">Süt Ürünleri</p>
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
            <div className="flex flex-col ml-8 ">
              <p className="text-lg font-bold">Reçel-Pekmez</p>
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
            <div className="flex flex-col ml-8 ">
              <p className="text-lg font-bold">Bal Çeşitleri</p>
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
            <div className="flex flex-col ml-8 ">
              <p className="text-lg font-bold">Kuru Gıdalar</p>
              <p className="text-xs text-grayDown">8 products</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Products;
