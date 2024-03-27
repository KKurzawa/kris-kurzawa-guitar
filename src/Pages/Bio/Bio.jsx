import './Bio.css'
import PedalBoard from '../../assets/images/PedalBoard.jpg'
import Guitar3 from '../../assets/images/Guitar3.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { awards } from '../../assets/data/awards';
import { nominations } from '../../assets/data/nominations';
import { meatPot } from '../../assets/data/meatPot';
import { gravy } from '../../assets/data/gravy';

const Bio = () => {
    return (
        <main className='bio-main-container flex flex-col md:items-center w-full lg:mb-5 py-5'>
            <article className='flex flex-col items-center'>
                <header className='text-4xl font-bold'>Bio</header>
                <section className='section1 text-center lg:mx-32 mx-3 mt-3 mb-5 p-4 lg:p-10'>
                    <h2 className='mx-5 text-md lg:text-2xl'>Kris Kurzawa’s versatility has led him to become one of Detroit area’s most in demand guitarists
                        since the early 2000’s; crossing multiple genres including jazz, fusion, rock, world music and
                        R+B. He released his first album ‘Sly’ in 2016 earning him his fifth Detroit Music Award. He
                        earned his bachelors degree in 2003 and his masters degree in 2012 with a concentration in
                        jazz studies from Wayne State University. Kris has over 20 years teaching experience and is
                        the head of the guitar department at the Detroit Institute of Music Education and adjunct faculty
                        in Wayne State Universities jazz studies program.</h2>
                </section>
                <section className='section2 text-center p-4 lg:p-10 my-5'>
                    <a href='https://www.detroitmusicawards.net/' target="_blank" rel="noreferrer" className='text-3xl lg:text-4xl mb-2 font-bold'>Detroit Music Awards</a>
                    <ul className='mb-5'>
                        <header className="mb-1 text-2xl lg:text-3xl font-bold">Awards</header>
                        {awards.map((award) => (
                            <li className='text-lg lg:text-2xl' key={award.index}>{award.title}</li>
                        ))}
                    </ul>
                    <ul className='mb-5'>
                        <header className="mb-1 text-2xl lg:text-3xl font-bold">Nominations</header>
                        {nominations.map((nomination) => (
                            <li className='text-lg lg:text-2xl' key={nomination.index}>{nomination.title}</li>
                        ))}
                    </ul>
                </section>
            </article>
            <section className='flex flex-col md:flex-row md:justify-evenly lg:justify-evenly w-full'>
                <article className='gearContainer flex flex-col items-center mb-5 lg:mb-0 '>
                    <h2 className='pb-2 text-3xl font-bold'>Meat & Potatoes</h2>
                    <LazyLoadImage src={Guitar3} className='gear-image w-72 lg:w-96 lg:max-w-full' />
                    <ol className='gear-img flex flex-col items-center mt-2'>
                        {meatPot.map((meat) => (
                            <button key={meat.id} className='meat-container' onClick={() => setTimeout(() => window.open(meat.link, '_blank'), 500)}><li className='meat text-xl '>{meat.name}</li></button>
                        ))}
                    </ol>
                </article>
                <article className='gearContainer flex flex-col items-center'>
                    <h2 className='pb-2 text-3xl font-bold'>Gravy</h2>
                    <LazyLoadImage src={PedalBoard} className='gear-image w-72 lg:w-96 lg:max-w-92' />
                    <ol className='gear-img flex flex-col items-center mt-2'>
                        {gravy.map((gravy) => (
                            <button key={gravy.id} className='gravy-container' onClick={() => setTimeout(() => window.open(gravy.link, '_blank'), 500)}><li className='gravy text-xl '>{gravy.name}</li></button>
                        ))}
                    </ol>
                </article>
            </section>
        </main>
    )
}

export default Bio