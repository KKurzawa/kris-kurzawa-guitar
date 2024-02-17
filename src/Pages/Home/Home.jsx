import './Home.css'
import KrisKurzawaGuitar from '../../assets/images/KrisKurzawaGuitar.jpg'
// import Sly from '../../assets/images/Sly.jpg'
// import KrisKurzawaGuitar from './KrisKurzawaGuitar.jpg';

const Home = () => {

    return (
        <main className='mainHome flex flex-col justify-center text-[whitesmoke] text-center'>
            <img src={KrisKurzawaGuitar}></img>
            <h2 className='text-2xl mx-32'>Kris Kurzawa’s versatility has led him to become one of Detroit area’s most in demand guitarists
                since the early 2000’s; crossing multiple genres including jazz, fusion, rock, world music and
                R+B. He released his first album ‘Sly’ in 2016 earning him his fifth Detroit Music Award. He
                earned his bachelors degree in 2003 and his masters degree in 2012 with a concentration in
                jazz studies from Wayne State University. Kris has over 20 years teaching experience and is
                the head of the guitar department at the Detroit Institute of Music Education and adjunct faculty
                in Wayne State Universities jazz studies program.</h2>
        </main>
    )
}

export default Home