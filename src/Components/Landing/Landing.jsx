import './Landing.css';
import Logo from '/favicon.ico'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-container hidden h-screen md:flex justify-center'>
                <article className='fade-out flex justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h2 className='logo-text text-2xl  text-[#B62C04]'>Guitarist / Composer / Music Educator</h2>
                </article>
            </main>
            {/* sm  */}
            <main className='landing-container h-screen flex justify-center md:hidden'>
                <article className='sm-fade-out flex justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <h2 className='sm-logo-text text-xl  text-[#B62C04]'>Guitarist/Composer/Music Educator</h2>
                </article>
            </main>
        </>
    )
}

export default Landing