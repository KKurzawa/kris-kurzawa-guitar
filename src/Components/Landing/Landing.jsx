import './Landing.css'
import Logo from '/logo7.png'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-container hidden h-screen md:flex justify-center'>
                <article className='fade-out flex justify-center items-center w-full h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <article className='flex flex-col items-center'>
                        <h1 className='kris-text text-7xl pb-1 text-[whitesmoke]'>Kris <span className='kurzawa-text text-[#eed29bb1]'>Kurzawa</span></h1>
                        <hr className='line mb-4' />
                    </article>
                    <article className='flex flex-col items-center'>
                        <h2 className='logo-text text-4xl pb-2 text-[whitesmoke]'>Guitarist / Composer / Music Educator</h2>
                        <hr className='line mb-4' />
                    </article>

                </article>
            </main>
            {/* sm  */}
            <main className='landing-container h-screen flex justify-center md:hidden'>
                <article className='sm-fade-out flex justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <article className='flex flex-col items-center'>
                        <h1 className='sm-kris-text text-2xl  text-[whitesmoke]'>Kris <span className='sm-kurzawa-text text-[#eed29bb1]'>Kurzawa</span></h1>
                        <hr className='sm-line mb-4' />
                    </article>
                    <article className='flex flex-col items-center'>
                        <h2 className='sm-logo-text text-md mb-[.2rem] text-[whitesmoke]'>Guitarist/Composer/Music Educator</h2>
                        <hr className='sm-line mb-4' />
                    </article>

                </article>
            </main>
        </>
    )
}

export default Landing