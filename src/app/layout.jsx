import React from "react";
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "../components/modals/BasketModal";

export const metadata = {
  title: "Tahtayayik",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">

      <body className="relative">
        <Header />
        {children}
        <Footer />
        <Modal />
      </body>
    </html>
  );
};

export default Layout;
