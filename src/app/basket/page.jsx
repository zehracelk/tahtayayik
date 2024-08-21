"use client";

import React from "react";
import { useState } from "react";
import PayCard from "../../components/cards/PayCard";
import BasketCard from "../../components/cards/BasketCard";

const Basket = () => {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  let total = basket?.map((item) => item.count * item.price);

  let sum = 0;

  basket?.length > 1
    ? (sum = total.reduce((a, b) => a + b, 0))
    : (sum = total[0]);

  let totalCount = basket?.map((item) => item.count).reduce((a, b) => a + b, 0);

  let cargoPrice = 0;

  if (totalCount == 0) {
    cargoPrice == 0;
  } else if (0 < totalCount && totalCount <= 5) {
    cargoPrice = 170;
  } else if (5 < totalCount && totalCount <= 10) {
    cargoPrice = 223;
  } else if (10 < totalCount && totalCount <= 15) {
    cargoPrice = 288;
  } else if (15 < totalCount && totalCount <= 20) {
    cargoPrice = 342;
  } else if (20 < totalCount && totalCount <= 30) {
    cargoPrice = 435;
  } else cargoPrice = totalCount * 13;

  //remove product from chart
  const handleRemove = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  const countUp = (id, count) => {
    const newBasket = basket?.map((item) => {
      if (item.id == id)
        return {
          ...item,
          count: count + 1,
        };
      else {
        return item;
      }
    });
    setBasket(newBasket);
  };

  const countDown = (id, count) => {
    setBasket(
      basket?.map((el) => {
        if (el.id == id)
          return {
            ...el,
            count: count > 1 ? count - 1 : count,
          };
        else {
          return el;
        }
      })
    );
  };

  localStorage.setItem("basket", JSON.stringify(basket));

  return (
    <div className="mt-32 mb-24 flex-col sm:flex-row flex justify-center">
      <BasketCard
        countDown={countDown}
        countUp={countUp}
        handleRemove={handleRemove}
        basket={basket}
      />

      <PayCard sum={sum} cargoPrice={cargoPrice} />
    </div>
  );
};

export default Basket;
