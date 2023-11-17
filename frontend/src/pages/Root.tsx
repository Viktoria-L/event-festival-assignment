import { Outlet } from "react-router-dom";
//import Navbar from "../components/Navbar";
//import { ProductInfo } from "../models/productModels";
//import Header from "../components/Header";
//import Footer from "../components/Footer";

const Root = () => {

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header />     
      <Navbar /> */}
      <Outlet />  
      {/* <Footer /> */}
    </div>

  )
}

export default Root