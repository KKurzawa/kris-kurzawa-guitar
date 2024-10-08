import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../../assets/data/navLinks';
import { icons } from '../../assets/data/icons';
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
      {/* // large and medium  */}
      <main className='navbar hidden md:block'>
        <header className='flex justify-between items-center w-full py-2'>
          <article className='justify-start'>
            <h1 className='kk-header pl-4 md:text-5xl lg:text-6xl'>Kris <span className='kurzawa'>Kurzawa</span></h1>
          </article>
          <i className='flex justify-end'>
            {icons.map((icon) => (
              <button className='large-icons mx-3 lg:mx-5 p-2 md:text-3xl lg:text-4xl' key={icon.id} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                {icon.symbol}
              </button>
            ))}
          </i>
        </header>
        <img src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
        <nav className='gca flex justify-between items-baseline w-full py-2'>
          <header className='justify-start'>
            <h2 className='pl-4 text-md lg:text-xl'>Guitarist/ Compsoser/Music Educator</h2>
          </header>
          <ol className='nav-list flex justify-end'>
            <li className='pr-5 text-md lg:text-xl'>
              <button onClick={goToHome} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[0].title}</button>
              <button onClick={goToMusic} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[1].title}</button>
              <button onClick={goToVideo} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[2].title}</button>
              <button onClick={goToBio} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[3].title}</button>
              <button onClick={goToShows} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[4].title}</button>
              <button onClick={goToContact} className='nav-link ml-2 lg:ml-[1.8em]'>{navLinks[5].title}</button>
            </li>
          </ol>
        </nav>
      </main>
      {/* small  */}
      <main className={!open ? "navbar flex flex-col md:hidden text-center h-auto" : 'navbar flex flex-col md:hidden text-center h-auto'}>
        <article className='hamburger-container flex justify-between items-center'>
          <i className='hamburger-btn'>
            <Hamburger toggled={open} size={20} toggle={setOpen} />
          </i>
          <h1 className='kk-header text-4xl font-bold'>Kris <span className='kurzawa'>Kurzawa</span></h1>
          <i className='hamburger-btn'>
            <Hamburger toggled={open} size={20} toggle={setOpen} />
          </i>
        </article>
        <article>
          <img src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
          <h2 className='gca text-center py-1 text-md'>Guitarist/Compsoser/Music Educator</h2>
        </article>
        <AnimatePresence>
          {open && (
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .5 }}
              className="dropdown md:hidden flex justify-center absolute z-10 top-[13.4rem] left-0 right-0 pt-0 border-b-[1px]"
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
                  className={!open ? "hidden" : 'open-nav w-full h-[78vh]'}
                >
                  <ol className='flex flex-col items-center pb-[1rem] text-5xl'>
                    <button onClick={goToHome} className='small-nav-link'>{navLinks[0].title}</button>
                    <button onClick={goToMusic} className='small-nav-link'>{navLinks[1].title}</button>
                    <button onClick={goToVideo} className='small-nav-link'>{navLinks[2].title}</button>
                    <button onClick={goToBio} className='small-nav-link'>{navLinks[3].title}</button>
                    <button onClick={goToShows} className='small-nav-link'>{navLinks[4].title}</button>
                    <button onClick={goToContact} className='small-nav-link'>{navLinks[5].title}</button>
                  </ol>
                  <i className='flex justify-center'>
                    {icons.map((icon) => (
                      <button className='small-icons px-2 pb-5 text-4xl' key={icon.index} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                        {icon.symbol}
                      </button>
                    ))}
                  </i>
                </motion.li>
              </ul>
            </motion.article>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}

export default Navbar