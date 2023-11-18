// import { NavLink } from 'react-router-dom';
// import './navbar.css';
// import { GiAbstract116 } from "react-icons/gi";

// const Navbar = () => {
//   return (
//     <header className='navbar-header bg-gray-900 text-center'>
//       <nav>
//         <div>
//           <ul className='menu'>
//             <li className='logo'>
//               <NavLink className='page-title' to='/'>
//                 <span className='inline-block mr-2'>
//                   <GiAbstract116 />
//                 </span>
//                 {/* <span className='font-fontZ tracking-wider'>Echoes of <strong>Shanti</strong></span> */}
//               </NavLink>
//             </li>
//             <li className='toggle'>
//               <input className='menu-btn' type='checkbox' id='menu-btn' />
//               <label className='menu-icon' htmlFor='menu-btn'>
//                 <span className='nav-icon'></span>
//               </label>
//             </li>
//             <li className='menu-item'>
//               <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
//                 Home
//               </NavLink>
//             </li>
//             <li className='menu-item'>
//               <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/vehicles'>
//                 Program
//               </NavLink>
//             </li>
// {/* Kanske lägga ikonen i mitten och ha meny på sidorna av den */}

//             <li className='menu-item'>
//               <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
//                 Tickets
//               </NavLink>
//             </li>
//             <li className='menu-item'>
//               <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/contact'>
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import { NavLink } from 'react-router-dom';
import { GiAbstract116 } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className='bg-black text-white'>
      <nav className='flex justify-center items-center p-4'>
        {/* Logo och navigation toggle */}
        <div className='absolute left-4 md:left-8 lg:left-16'>
        
        </div>

        {/* Menyn */}
        <ul className='hidden md:flex justify-center items-center space-x-6'>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-purple-500' : ''} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-purple-500' : ''} to='/vehicles'>
              Program
            </NavLink>
          </li>
          <NavLink className='flex items-center' to='/'>
            <GiAbstract116 className='text-3xl' />
            {/* <span className='ml-2 font-fontZ tracking-wider'>Echoes of <strong>Shanti</strong></span> */}
          </NavLink>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-purple-500' : ''} to='/about'>
              Tickets
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''} to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobilmeny toggle */}
        <div className='md:hidden flex items-center'>
          <input className='hidden' type='checkbox' id='menu-btn' />
          <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
          </label>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
