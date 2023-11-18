import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Root = () => {

  return (
    <div className="flex flex-col min-h-screen">   
      <Navbar />
      <div className="flex flex-grow">
      <Outlet />  
      </div>
      <Footer />
    </div>

  )
}

export default Root