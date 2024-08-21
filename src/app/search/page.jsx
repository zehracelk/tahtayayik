"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../../productsData";
import { MdCurrencyLira } from "react-icons/md";
import ProductCard from "../../components/cards/ProductCard";


const Search = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("text");
  console.log(params);
  const searchData = productsData.filter(
    (item) => (item.productName.toLowerCase()).indexOf(params) != -1
  );
  console.log(searchData);

  return (
    <div className="mt-28">
    {
        searchData.map((item)=> 
        <ProductCard id = {item.id} />

        )
        }
    </div>
  );
};

export default Search;
