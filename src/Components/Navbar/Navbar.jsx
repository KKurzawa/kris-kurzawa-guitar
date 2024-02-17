import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const navLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Music',
    link: '/Music',
  },
  {
    title: 'Videos',
    link: '/Videos',
  },
  {
    title: 'Gear',
    link: '/Gear',
  },
  {
    title: 'Shows',
    link: '/Shows',
  },
  {
    title: 'Contact',
    link: '/Contact',
  },
]

const icons = [
  {
    symbol: <FaFacebook />,
    link: 'https://www.facebook.com/KrisKurzawaGuitar',
  },
  {
    symbol: <FaInstagramSquare />,
    link: 'https://www.instagram.com/k_kurzawa/'
  },
  {
    symbol: <FaYoutube />,
    link: 'https://www.youtube.com/channel/UCosE-h5XuXSkR4dG_hBaCUg'
  },
  {
    symbol: <SiApplemusic />,
    link: 'https://music.apple.com/us/artist/kris-kurzawa/1071714493'
  },
  {
    symbol: <FaSpotify />,
    link: 'https://open.spotify.com/artist/6avBe32i2ADGGnJAFnQHYx'
  }
]

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
      <main className='hidden lg:block text-[whitesmoke] bg-[#97161D]'>
        <header className='flex justify-between w-full items-baseline'>
          <div className='justify-start pt-3 pb-1'>
            <h1 className='pl-4 text-6xl'>Kris Kurzawa</h1>
          </div>
          <i className='flex justify-end pr-5'>
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
          <ol className='flex justify-end pr-4'>
            <li className='px-5 text-xl'>
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
      <main className='lg:hidden text-[whitesmoke] bg-[#971522]'>
        <header className='flex justify-between w-full'>
          <div className='invisible pl-2 text-5xl content-center justify-end text-gray-300 hover:text-white hover:bg-gray-600 '>
            <FaHome />
          </div>
          <div className='justify-center text-center pt-3'>
            <h1 className='text-4xl'>Kris Kurzawa</h1>
            <h2 className='text-sm'>Guitarist/Compsoser/Music Educator</h2>
          </div>
          <button type='button' onClick={handleMenu} className=' pr-2 text-4xl content-center justify-end '>
            <span className='sr-only'>Open Main Menu</span>
            {open == true ? <FaTimes /> : <FaBars />}
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