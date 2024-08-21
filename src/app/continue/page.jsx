import React from "react";
import { BsEmojiNeutral } from "react-icons/bs";

const Continue = () => {
  return (
    <div className="mt-40 w-11/12 flex flex-col justify-center mx-auto items-center">
      <div className="mb-10 flex text-2xl">
        <div className="mx-2">
          <BsEmojiNeutral size={40} />
        </div>
        <p>
          Kısa bir süreliğine online ödeme hizmeti veremeyeceğim için üzgünüm.
        </p>
      </div>
      <div className="w-6/12 flex justify-around mb-20 pb-20 rounded-sm">
        <a target="_blank" href="https://wa.me/+905526931476">
          <div className="border text-xl rounded-md shadow-lg hover:opacity-20 bg-soft w-56 p-6">
            <button>Whatsapp ile Devam Et</button>
          </div>
        </a>
        <a target="_blank" href="https://ig.me/m/tahtayayik">
          <div className="border text-xl rounded-md shadow-lg hover:opacity-20  bg-soft w-64 p-6">
            <button>İnstagram Dm ile Devam Et</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Continue;
