import { GiAbstract116 } from "react-icons/gi";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex justify-between md:justify-center items-center">
          <div className="flex space-x-4">
            {/* Logo eller ikon för små skärmar */}
            <div className="flex items-center text-white text-lg">
              <GiAbstract116 className="md:hidden text-3xl"/>
            </div>

            {/* Huvudmeny */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" className="py-5 px-3 text-white">Home</NavLink>
              <NavLink to="/program" className="py-5 px-3 text-white">Program</NavLink>
              {/* Ikon endast synlig på stora skärmar */}
              <GiAbstract116 className="hidden md:block mx-auto text-3xl" />
              <NavLink to="/tickets" className="py-5 px-3 text-white">Tickets</NavLink>
              <NavLink to="/contact" className="py-5 px-3 text-white">Contact</NavLink>
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
        <NavLink to="/" className="block py-2 px-4 text-sm text-white">Home</NavLink>
        <NavLink to="/program" className="block py-2 px-4 text-sm text-white">Program</NavLink>
        <NavLink to="/tickets" className="block py-2 px-4 text-sm text-white">Tickets</NavLink>
        <NavLink to="/contact" className="block py-2 px-4 text-sm text-white">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
