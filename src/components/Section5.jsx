import React from "react";
import Image from "next/image";
import image from "../images/roundedbutter.png";

const Section5 = () => {
  return (
    <div className="flex mt-10 relative group justify-center">
      <div className="hidden xl:flex">
        <div className="bg-beige shadow-sm group-hover:bg-soft text-lg rounded-full w-36 h-36 whitespace-pre pt-6 text-center absolute bottom-16 left-48 ring-offset-2 ring-2 ring-soft">
          Siparişiniz <br></br>
          ayrıntısıyla <br></br>
          kaydedilir.
        </div>

        <div className="flex flex-col ">
          <div className="bg-beige group-hover:bg-soft text-lg rounded-full w-36 h-36 text-center pt-8 mx-auto ring-offset-2 ring-2 ring-soft">
            Özenle <br></br>paketlenir.
          </div>
          <div className="flex justify-between w-full">
            <div className="bg-beige group-hover:bg-soft text-lg rounded-full w-36 h-36 pt-4 text-center ring-offset-2 ring-2 ring-soft">
              1 er kg lık<br></br> paketler<br></br> halinde<br></br>{" "}
              vakumlanır.
            </div>
            <div className="bg-beige group-hover:bg-soft text-lg rounded-full  w-36 h-36 text-center pt-4 ring-offset-2 ring-2 ring-soft">
              Takip<br></br> numarası<br></br> sizinle<br></br> paylaşılır.
            </div>
          </div>
          <div>
            <Image src={image} alt="image" />
          </div>
        </div>
        <div className="bg-beige group-hover:bg-soft text-lg rounded-full  w-36 h-36 text-center pt-5 absolute bottom-16 right-48 ring-offset-2 ring-2 ring-soft">
          En taze<br></br> haliyle<br></br> adresinize<br></br> ulaşır.
        </div>
      </div>
      <div className="xl:hidden flex w-11/12 flex-col justify-center items-center  bg-soft md:bg-slate-50">
        <div>
          <Image src={image} alt="image" />
        </div>

        <div className="flex mt-4 flex-col md:flex-row">
          <div className="shadow-sm bg-beige  text-lg rounded-full w-36 h-36 whitespace-pre pt-6 text-center ring-offset-2 ring-2 ring-soft">
            Siparişiniz <br></br>
            ayrıntısıyla <br></br>
            kaydedilir.
          </div>
          <div className="bg-beige  text-lg rounded-full w-36 h-36 text-center pt-8 ring-offset-2 ring-2 ring-soft">
            Özenle <br></br>paketlenir.
          </div>
          <div className="bg-beige  text-lg rounded-full w-36 h-36 pt-4 text-center ring-offset-2 ring-2 ring-soft">
            1 er kg lık<br></br> paketler<br></br> halinde<br></br> vakumlanır.
          </div>
          <div className="bg-beige  text-lg rounded-full  w-36 h-36 text-center pt-4 ring-offset-2 ring-2 ring-soft">
            Takip<br></br> numarası<br></br> sizinle<br></br> paylaşılır.
          </div>

          <div className="bg-beige  text-lg rounded-full  w-36 h-36 text-center pt-5  ring-offset-2 ring-2 ring-soft">
            En taze<br></br> haliyle<br></br> adresinize<br></br> ulaşır.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
