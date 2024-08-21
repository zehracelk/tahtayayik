import Section1 from "../components/Section1";
import SliderTop from "../components/SliderTop";
import React from "react"
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";

const Page = () => {
  return (
    <div className="w-full m-auto relative">
      <SliderTop />
      <Section1 />
      <Section3 />
      <Section2 />
      <Section5 />
      <Section4 />
    </div>
  );
};

export default Page;
