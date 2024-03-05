import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { navLinks } from '../../assets/data/navLinks';
import { icons } from '../../assets/data/icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaHome } from 'react-icons/fa';
import KrisKurzawaGuitar2 from '../../assets/images/KrisKurzawaGuitar2.jpg'
// import NavLogo from '../../assets/images/navLogo.png'

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
      <main className='navbar hidden lg:block text-[whitesmoke] bg-[#97161D]'>
        <header className='flex justify-between w-full items-center py-2'>
          <article className='justify-start'>
            <h1 className='pl-4 text-6xl font-bold'>Kris Kurzawa</h1>
          </article>
          <i className='flex justify-end'>
            {icons.map((icon) => (
              <button className='large-icons mx-5 p-2 text-4xl' key={icon.index} onClick={() => setTimeout(() => window.open(icon.link, '_blank'), 500)}>
                {icon.symbol}
              </button>
            ))}
          </i>
        </header>
        <LazyLoadImage src={KrisKurzawaGuitar2} className='navGuitarPic w-full' />
        <nav className='flex justify-between w-full items-baseline py-2'>
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
      <main className='navbar flex flex-col lg:hidden text-[#f5f5f5]'>
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
      </main>
    </>
  )
}

export default Navbar