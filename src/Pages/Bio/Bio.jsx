import './Bio.css'
import PedalBoard from '../../assets/images/PedalBoard.jpg'
import Guitar3 from '../../assets/images/Guitar3.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { awards } from '../../assets/data/awards';
import { nominations } from '../../assets/data/nominations';
import { meatPot } from '../../assets/data/meatPot';
import { gravy } from '../../assets/data/gravy';
// import KrisKurzawaGuitar2 from '../../assets/images/KrisKurzawaGuitar2.jpg'

const Bio = () => {
    return (
        <main className='text-[whitesmoke] flex flex-col lg:mb-5 py-5 '>
            <article className='flex flex-col items-center'>
                <header className='text-4xl font-bold'>Bio</header>
                <section className='section1 lg:mx-32 mx-3 mt-3 mb-5 p-4 lg:p-10 text-center'>
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
            <section className='flex flex-col lg:flex-row lg:justify-evenly'>
                <article className='gearContainer flex flex-col items-center mb-5 lg:mb-0 '>
                    <h2 className='text-3xl font-bold pb-2'>Meat & Potatoes</h2>
                    <LazyLoadImage src={Guitar3} className='gear-image w-96 lg:max-w-full' />
                    <ol className='gear-img mt-2 text-center'>
                        {meatPot.map((meat) => (
                            <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-xl'>{meat.name}</li></a>
                        ))}
                    </ol>
                </article>
                <article className='gearContainer flex flex-col items-center'>
                    <h2 className='text-3xl font-bold pb-2'>Gravy</h2>
                    <LazyLoadImage src={PedalBoard} className='gear-image w-96 lg:max-w-92' />
                    <ol className='gear-img mt-2 text-center'>
                        {gravy.map((meat) => (
                            <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-xl'>{meat.name}</li></a>
                        ))}
                    </ol>
                </article>
            </section>
        </main>
    )
}

export default Bio