import './Home.css'
import KrisKurzawaGuitar from '../../assets/images/KrisKurzawaGuitar.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import Sly from '../../assets/images/Sly.jpg';

const awards = [
    { title: '2023 Outstanding Tribute Band' },
    { title: '2017 Outstanding Jazz Composer' },
    { title: '2016 Outstanding Jazz Recording' },
    { title: '2016 Outstanding Modern Jazz Artist' },
    { title: '2015 Outstanding World Artist' },
    { title: '2015 Outstanding World Songwriter' },
    { title: '2011 Outstanding World Songwriter' }
]

const nominations = [
    { title: '2015 Outstanding Jazz Composer' },
    { title: '2015 Outstanding Jazz Instrumentalist' },
    { title: '2015 Outstanding World Instrumentalist' },
    { title: '2015 Outstanding Jazz Composer' },
    { title: '2012 Outstanding Jazz Instrumentalist' },
    { title: '2012 Outstanding World Instrumentalist' },
    { title: '2012 Outstanding World Songwriter' },
    { title: '2011 Outstanding World Instrumentalist' },
    { title: '2011 Outstanding Urban Musician' },
    { title: '2010 Outstanding Urban Musician' },
    { title: '2009 Outstanding Urban Musician' },
]

const Home = () => {

    return (
        <main className='mainHome text-[whitesmoke] flex flex-col'>
            <LazyLoadImage src={KrisKurzawaGuitar} className='guitarPic w-full' />
            <article className='flex flex-col'>
                <header className='text-[whitesmoke] text-3xl mt-5 font-bold'>Download</header>
                <a href='https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W' target="_blank" rel="noreferrer"><LazyLoadImage src={Sly} className=' sly w-[50rem] h-auto my-4' /></a>
                <section className='section1 lg:mx-32 mx-3 my-5 p-4 lg:p-10 text-center'>
                    <h2 className=' text-md lg:text-2xl mx-5'>Kris Kurzawa’s versatility has led him to become one of Detroit area’s most in demand guitarists
                        since the early 2000’s; crossing multiple genres including jazz, fusion, rock, world music and
                        R+B. He released his first album ‘Sly’ in 2016 earning him his fifth Detroit Music Award. He
                        earned his bachelors degree in 2003 and his masters degree in 2012 with a concentration in
                        jazz studies from Wayne State University. Kris has over 20 years teaching experience and is
                        the head of the guitar department at the Detroit Institute of Music Education and adjunct faculty
                        in Wayne State Universities jazz studies program.</h2>
                </section>
                <section className='section2 p-4 lg:p-10 my-5 text-center'>
                    <a href='https://www.detroitmusicawards.net/' target="_blank" rel="noreferrer" className='text-3xl lg:text-4xl mb-2 font-bold'>Detroit Music Awards</a>
                    <ul className='mb-5'>
                        <header className="text-2xl lg:text-3xl mb-1 font-bold">Awards</header>
                        {awards.map((award) => (
                            <li className='text-lg lg:text-2xl' key={award.index}>{award.title}</li>
                        ))}
                    </ul>
                    <ul className='mb-5'>
                        <header className="text-2xl lg:text-3xl mb-1 font-bold">Nominations</header>
                        {nominations.map((nomination) => (
                            <li className='text-lg lg:text-2xl' key={nomination.index}>{nomination.title}</li>
                        ))}
                    </ul>
                </section>
            </article>
        </main>
    )
}

export default Home