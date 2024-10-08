import './Home.css'
import Sly from '../../assets/images/Sly.jpg';
import SingleShowCard from '../../Components/SingleShowCard/SingleShowCard';
import { videoLinks } from '../../assets/data/videoLinks';

const Home = () => {
    const singleVideoLink = videoLinks[0].link;
    const singleVideoTitle = videoLinks[0].title;

    return (
        <main className='mainHome flex flex-col'>
            <article className='flex flex-col items-center'>
                <header className=' mt-5 text-3xl font-bold'>Download</header>
                <button onClick={() => setTimeout(() => window.open('https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W', '_blank'), 500)}><img src={Sly} className='sly w-[20rem] md:w-[35rem] lg:w-[50rem] h-auto mt-1 mb-4' /></button>
                {/* large */}
                <article className='hidden lg:flex flex-col py-5'>
                    <header className='text-center pb-1 text-3xl font-bold'>{singleVideoTitle}</header>
                    <iframe className='singleVideo' width="750" height="421.875" src={singleVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                </article>
                {/* small and medium */}
                <article className='lg:hidden flex flex-col py-5'>
                    <header className='text-center pb-1 text-3xl font-bold'>{singleVideoTitle}</header>
                    <iframe className='singleVideo md:hidden' width="325" height="175.5" src={singleVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    <iframe className='singleVideo hidden md:block' width="500" height="280" src={singleVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                </article>
                <SingleShowCard />
            </article>
        </main>
    )
}

export default Home