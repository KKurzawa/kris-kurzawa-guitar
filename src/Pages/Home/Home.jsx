import './Home.css'
import KrisKurzawaGuitar from '../../assets/images/KrisKurzawaGuitar.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Sly from '../../assets/images/Sly.jpg';
import SingleShowCard from '../../Components/SingleShowCard/SingleShowCard';
import { videoLinks } from '../../assets/data/videoLinks';

const Home = () => {
    const singleVideoLink = videoLinks[0].link;
    const singleVideoTitle = videoLinks[0].title;

    return (
        <main className='mainHome text-[whitesmoke] flex flex-col'>
            {/* <LazyLoadImage src={KrisKurzawaGuitar} className='guitarPic w-full' /> */}
            <article className='flex flex-col items-center'>
                <header className='text-[whitesmoke] text-3xl mt-5 font-bold'>Download</header>
                <a href='https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W' target="_blank" rel="noreferrer"><LazyLoadImage src={Sly} className=' sly w-[23rem] lg:w-[50rem] h-auto mt-1 mb-4' /></a>
                {/* large */}
                <article className='text-[whitesmoke] hidden lg:flex flex-col py-5'>
                    <header className='pb-1 text-center text-3xl font-bold'>{singleVideoTitle}</header>
                    <iframe className='singleVideo' width="750" height="421.875" src={singleVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
                {/* small and medium */}
                <article className='text-[whitesmoke] lg:hidden flex flex-col py-5'>
                    <header className='pb-1 text-center text-3xl font-bold'>{singleVideoTitle}</header>
                    <iframe className='singleVideo' width="350" height="196.875" src={singleVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
                <SingleShowCard />
            </article>
        </main>
    )
}

export default Home