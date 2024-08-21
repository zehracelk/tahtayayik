import React from "react";

const Footer = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-between">
      <div className="w-11/12 m-auto grid sm:grid-cols-3 py-10">
        <div>
          <p className="font-bold text-3xl">TAHTAYAYIK</p>
          <p>KAHVALTI ÜRÜNLERİ</p>
        </div>
        <div>
          <p className="font-bold underline underline-offset-8 decoration-soft decoration-bold mt-3">
            HAKKIMIZDA
          </p>
          <p className="font-bold underline underline-offset-8 decoration-soft decoration-bold mt-3">
            İLETİŞİM
          </p>
          <p className="font-bold underline underline-offset-8 decoration-soft decoration-bold mt-3">
            TERMS AND CONDITIONS
          </p>
        </div>

        <div className="sm:flex flex-col p-4 hidden">
          <p className="font-bold underline underline-offset-8 decoration-soft decoration-bold">
            NEWSLETTER
          </p>

          <p className=" break-words mt-1 text-grayText2 text-xs pt-2">
            Stay up to date with news and promotions by
            <br></br>
            signing up for our newsletter
          </p>
          <input
            className="bg-soft rounded-full h-12 outline-none mt-4 w-full px-2"
            placeholder="Email"
          ></input>
        </div>
      </div>

      <div className="h-10 bg-earth items-center flex text-sm ">
        <p className="ml-10">
          Copyright © 2014, Your Store,All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
