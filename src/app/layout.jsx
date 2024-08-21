
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/modals/BasketModal";

export const metadata = {
  title: "tahtayayik",
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
