import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col justify-center items-center text-center w-full h-28 text-xs lg:text-lg'>
            <p>Copyright &copy; {today.getFullYear()} Kriskurzawaguitar - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://kris-dev-portfolio.vercel.app/', '_blank'), 500)} className='webdev-link'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer