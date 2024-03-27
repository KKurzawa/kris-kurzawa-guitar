import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../../assets/data/navLinks';
import { icons } from '../../assets/data/icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import KrisKurzawaGuitar2 from '../../assets/images/KrisKurzawaGuitar2.jpg'
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    });
  }

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  async function goToHome() {
    await wait(500);
    navigate(navLinks[0].link);
    handleMenu();
  }


  async function goToMusic() {
    await wait(500);
    navigate(navLinks[1].link);
    handleMenu();
  }

  async function goToVideo() {
    await wait(500);
    navigate(navLinks[2].link);
    handleMenu();
  }

  async function goToBio() {
    await wait(500);
    navigate(navLinks[3].link);
    handleMenu();
  }

  async function goToShows() {
    await wait(500);
    navigate(navLinks[4].link);
    handleMenu();
  }

  async function goToContact() {
    await wait(500);
    navigate(navLinks[5].link);
    handleMenu();
  }

  return (
    <>
      {/* // large screen  */}
      <main className='navbar hidden lg:block text-[#f5f5f5] bg-[#97161D]'>
        <header className='flex justify-between w-full items-center py-2'>
          <article className='justify-start'>
            <h1 className='kk-header pl-4 text-6xl'>Kris <span className='kk-header text-[#eed29bb1]'>Kurzawa</span></h1>
          </article>
          <i className='flex justify-end'>
            {icons.map((icon) => (
              <button className='large-icons mx-5 p-2 text-4xl' key={icon.id} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                {icon.symbol}
              </button>
            ))}
          </i>
        </header>
        <img src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
        <nav className='gca flex justify-between w-full items-baseline py-2'>
          <header className='justify-start'>
            <h2 className='pl-4 text-xl'>Guitarist/ Compsoser/Music Educator</h2>
          </header>
          <ol className='nav-list flex justify-end'>
            <li className='pr-5 text-xl'>
              <button onClick={goToHome} className='nav-link'>{navLinks[0].title}</button>
              <button onClick={goToMusic} className='nav-link'>{navLinks[1].title}</button>
              <button onClick={goToVideo} className='nav-link'>{navLinks[2].title}</button>
              <button onClick={goToBio} className='nav-link'>{navLinks[3].title}</button>
              <button onClick={goToShows} className='nav-link'>{navLinks[4].title}</button>
              <button onClick={goToContact} className='nav-link'>{navLinks[5].title}</button>
            </li>
          </ol>
        </nav>
      </main>
      {/* small and medium */}
      {/* <main className='navbar flex flex-col lg:hidden text-[#f5f5f5]'>
        <article className='flex flex-row justify-between items-center bg-[#971522]'>
          <button type='button' onClick={handleMenu} className='bars px-2 py-2'>
            <span className='sr-only'>Open Main Menu</span>
            {open == true ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl ' />}
          </button>
          <h1 className='kk text-4xl font-bold'>Kris Kurzawa</h1>
          <button type='button' onClick={handleMenu} className='bars px-2
          py-2'>
            <span className='sr-only'>Open Main Menu</span>
            {open == true ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl ' />}
          </button>
        </article>
        <article className='bg-[#971522]'>
          <LazyLoadImage src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
          <h2 className='text-md text-center py-1'>Guitarist/Compsoser/Music Educator</h2>
        </article>
        {open ? (
          <article className='dropdown transition-all duration-[1s] ease-out lg:hidden h-screen bg-none'>
            <ol className='text-5xl pb-3 pt-2 flex flex-col items-center'>
              <button onClick={goToHome} className='small-nav-link'>{navLinks[0].title}</button>
              <button onClick={goToMusic} className='small-nav-link'>{navLinks[1].title}</button>
              <button onClick={goToVideo} className='small-nav-link'>{navLinks[2].title}</button>
              <button onClick={goToBio} className='small-nav-link'>{navLinks[3].title}</button>
              <button onClick={goToShows} className='small-nav-link'>{navLinks[4].title}</button>
              <button onClick={goToContact} className='small-nav-link'>{navLinks[5].title}</button>
            </ol>
            <i className='flex justify-center'>
              {icons.map((icon) => (
                <button className='small-icons px-2 text-4xl' key={icon.index} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                  {icon.symbol}
                </button>
              ))}
            </i>
          </article>
        ) : null}
      </main> */}
      {/* hamburger experiment */}
      <main className={!open ? "navbar flex flex-col lg:hidden text-[#f5f5f5] text-center" : 'navbar flex flex-col lg:hidden text-[#f5f5f5] text-center '}>
        <div className='flex justify-between items-center bg-[#97161D]'>
          <div className='hamburger-btn'>
            <Hamburger toggled={open} size={20} toggle={setOpen} />
          </div>
          <h1 className='kk-header text-4xl font-bold'>Kris <span className='kk-header text-[#eed29bb1]'>Kurzawa</span></h1>
          <div className='hamburger-btn'>
            <Hamburger toggled={open} size={20} toggle={setOpen} />
          </div>
        </div>
        <div>
          <img src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
          <h2 className='gca text-md text-center py-1 bg-[#97161D]'>Guitarist/Compsoser/Music Educator</h2>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .5 }}
              className="absolute z-10 top-56 left-0 right-0 pt-0 border-b-[1px] border-[#eed29bb1] flex justify-center bg-black"
            >
              <ul className="text-center">
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 2 + navLinks.id / 10,
                  }}
                  className={!open ? "hidden" : 'open-nav w-full'}
                >
                  <ol className='text-5xl flex flex-col items-center pb-[1rem]'>
                    <button onClick={goToHome} className='small-nav-link'>{navLinks[0].title}</button>
                    <button onClick={goToMusic} className='small-nav-link'>{navLinks[1].title}</button>
                    <button onClick={goToVideo} className='small-nav-link'>{navLinks[2].title}</button>
                    <button onClick={goToBio} className='small-nav-link'>{navLinks[3].title}</button>
                    <button onClick={goToShows} className='small-nav-link'>{navLinks[4].title}</button>
                    <button onClick={goToContact} className='small-nav-link'>{navLinks[5].title}</button>
                  </ol>
                  <i className='flex justify-center'>
                    {icons.map((icon) => (
                      <button className='small-icons px-2 text-4xl pb-5' key={icon.index} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                        {icon.symbol}
                      </button>
                    ))}
                  </i>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>


      </main>
    </>
  )
}

export default Navbar