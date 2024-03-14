import './Landing.css'
import Logo from '/logo7.png'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-container hidden h-screen md:flex justify-center'>
                <article className='fade-out flex justify-center items-center w-full h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h1 className='logo-text text-7xl mb-4 pb-2 text-[whitesmoke]'>Kris <span className='text-[#eed29bb1]'>Kurzawa</span></h1>
                    <h2 className='logo-text text-4xl mb-2 pb-2 text-[whitesmoke]'>Guitarist / Composer / Music Educator</h2>
                </article>
            </main>
            {/* sm  */}
            <main className='landing-container h-screen flex justify-center md:hidden'>
                <article className='sm-fade-out flex justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <h1 className='sm-logo-text text-2xl mb-2 text-[whitesmoke]'>Kris <span className='text-[#eed29bb1]'>Kurzawa</span></h1>
                    <h2 className='sm-logo-text text-md mb-2 text-[whitesmoke]'>Guitarist/Composer/Music Educator</h2>
                </article>
            </main>
        </>
    )
}

export default Landing