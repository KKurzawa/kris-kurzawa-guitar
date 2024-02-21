import './Gear.css'
import Guitars from '../../assets/images/GuitarCollection.jpg'
import PedalBoard from '../../assets/images/PedalBoard.jpg'
import Guitar2 from '../../assets/images/Guitar2.jpg'
import Guitar3 from '../../assets/images/Guitar3.jpg'

const meatPot = [
    {
        id: 1,
        name: "1997 Heritage 535",
        link: "https://heritageguitars.com/"
    },
    {
        id: 2,
        name: "GHS Sub-Zero Boomers Medium",
        link: "https://www.ghsstrings.com/"
    },
    {
        id: 3,
        name: "Wegen M150s",
        link: "https://www.wegenpicks.com/"
    },
    {
        id: 4,
        name: "Fender '68 Custom Pro Reverb",
        link: "https://www.fender.com/en-US/guitar-amplifiers/vintage-pro-tube/68-custom-pro-reverb/2278000000.html"
    },
    {
        id: 5,
        name: "Tech 21 Trademark 60",
        link: "https://www.tech21nyc.com/archive/trademark60-original/"
    }
]

const gravy = [
    {
        id: 1,
        name: "",
        link: ""
    }
]
const Gear = () => {
    return (
        <main className='text-[whitesmoke] flex flex-col lg:flex-row lg:justify-evenly py-10 w-full items-center'>
            <article className='gearContainer flex flex-col lg:pl-20 mb-10 lg:mb-0'>
                <h2 className='text-3xl font-bold pb-2'>Meat & Potatoes</h2>
                <img src={Guitar3} className='gear-image w-96 lg:w-[60.1%]' />
                <ol className='gear-img mt-2'>
                    {meatPot.map((meat) => (
                        <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-2xl'>{meat.name}</li></a>
                    ))}
                </ol>
            </article>
            <article className='gearContainer flex flex-col lg:pr-20'>
                <h2 className='text-3xl font-bold pb-2'>Gravy</h2>
                <img src={PedalBoard} className='gear-image w-96 lg:w-full' />
                <ol className='gear-img mt-2'>
                    {meatPot.map((meat) => (
                        <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-2xl'>{meat.name}</li></a>
                    ))}
                </ol>

            </article>
        </main>
    )
}

export default Gear