import { GiAbstract116 } from "react-icons/gi";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="mx-auto px-4">
        <div className="h-16 flex justify-between md:justify-center items-center">
          <div className="flex space-x-4">
            {/* Logo eller ikon för små skärmar */}
            <div className="flex items-center text-white text-lg">
              <GiAbstract116 className="md:hidden text-3xl"/>
            </div>

            {/* Huvudmeny */}
            <div className="hidden md:flex items-center md:gap-4">
              <NavLink to="/" className="navLinkMD">Home</NavLink>
              <NavLink to="/program" className="navLinkMD">Program</NavLink>
              {/* Ikon endast synlig på stora skärmar */}
              <GiAbstract116 className="hidden md:block mx-auto text-3xl" />
              <NavLink to="/tickets" className="navLinkMD">Tickets</NavLink>
              <NavLink to="/contact" className="navLinkMD">Contact</NavLink>
            </div>
          </div>

          {/* Mobilmenyknapp */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobilmeny */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <NavLink to="/" className="navLinkSM">Home</NavLink>
        <NavLink to="/program" className="navLinkSM">Program</NavLink>
        <NavLink to="/tickets" className="navLinkSM">Tickets</NavLink>
        <NavLink to="/contact" className="navLinkSM">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
