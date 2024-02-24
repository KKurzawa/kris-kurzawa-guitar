import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../assets/data/navLinks';
import { icons } from '../../assets/data/icons';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentPage = useLocation().pathname;

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <>
      {/* // large screen  */}
      <main className='navbar hidden lg:block text-[whitesmoke] bg-[#97161D]'>
        <header className='flex justify-between w-full items-baseline'>
          <div className='justify-start pt-3 pb-1'>
            <h1 className='pl-4 text-6xl font-bold'>Kris Kurzawa</h1>
          </div>
          <i className='flex justify-end'>
            {icons.map((icon) => (
              <a className='px-7 text-4xl' key={icon.index} href={icon.link} target="_blank" rel="noreferrer">
                {icon.symbol}
              </a>
            ))}
          </i>
        </header>
        <nav className='flex justify-between w-full items-baseline pb-2'>
          <header className='justify-start'>
            <h2 className='pl-4 text-xl'>Guitarist/ Compsoser/Music Educator</h2>
          </header>
          <ol className='flex justify-end'>
            <li className='pr-5 text-xl'>
              {navLinks.map((link, index) => (
                <Link
                  key={index} className={currentPage === link.link ? 'nav-link active' : 'nav-link'} to={link.link}>{link.title}
                </Link>
              ))}
            </li>
          </ol>
        </nav>
      </main>
      {/* small and medium */}
      <main className='navbar lg:hidden text-[whitesmoke] bg-[#971522]'>
        <header className='flex justify-between w-full'>
          <div className='invisible pl-4 text-3xl content-center justify-end text-gray-300 hover:text-white hover:bg-gray-600 '>
            <FaHome />
          </div>
          <div className='justify-center text-center pt-3'>
            <h1 className='text-4xl font-bold'>Kris Kurzawa</h1>
            <h2 className='text-md pb-3'>Guitarist/Compsoser/Music Educator</h2>
          </div>
          <button type='button' onClick={handleMenu} className=' pr-4 pb-6 text-4xl content-center justify-end '>
            <span className='sr-only'>Open Main Menu</span>
            {open == true ? <FaTimes className='text-3xl' /> : <FaBars className='text-3xl' />}
          </button>
        </header>
        {open ? (
          <div className='dropdown transition-all duration-[1s] ease-out lg:hidden h-screen'>
            <div className='text-5xl pb-3 pt-2 flex flex-col text-center ox-2'>
              {navLinks.map((link, index) => (
                <a
                  key={index} href={link.link} className='py-1'>{link.title}</a>
              ))}
            </div>
            <i className='flex justify-center'>
              {icons.map((icon) => (
                <a className='px-2 text-4xl' key={icon.index} href={icon.link} target="_blank" rel="noreferrer">
                  {icon.symbol}
                </a>
              ))}
            </i>
          </div>
        ) : null}
      </main>
    </>
  )
}

export default Navbar