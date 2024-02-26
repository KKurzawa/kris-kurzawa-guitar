import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer w-full h-28 bg-[#971522] text-[whitesmoke] text-center flex flex-col justify-center items-center text-xs lg:text-lg'>
            <p>Copyright @ 2024 Kriskurzawaguitar - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://immense-everglades-74554-f9bad473782a.herokuapp.com/', '_blank'), 500)} className='webdev-link'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer