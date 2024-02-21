import './Gear.css'
import PedalBoard from '../../assets/images/PedalBoard.jpg'
import Guitar3 from '../../assets/images/Guitar3.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        name: "Fulltone Full-Drive 2",
        link: "https://www.fulltoneusa.com/"
    },
    {
        id: 2,
        name: "Fulltone Clyde Deluxe Wah",
        link: "https://www.fulltoneusa.com/"
    },
    {
        id: 3,
        name: "Xotic EP Booster Mini Boost",
        link: "https://xotic.us/"
    },
    {
        id: 4,
        name: "Ernie Ball Volume",
        link: "https://www.ernieball.com/"
    },
    {
        id: 5,
        name: "TC Electronic Stereo Chorus +",
        link: "https://www.tcelectronic.com/"
    },
    {
        id: 6,
        name: "Boss TR-2 Tremolo Pedal",
        link: "https://www.boss.info/us/"
    },
    {
        id: 7,
        name: "MXR M68 Uni-Vibe",
        link: "https://www.jimdunlop.com/products/electronics/mxr/"
    },
    {
        id: 8,
        name: "Line 6 ToneCore Echo Park Delay",
        link: "https://line6.com/"
    },
    {
        id: 9,
        name: "TC Electronic Flashback Delay",
        link: "https://www.tcelectronic.com/"
    }
]
const Gear = () => {
    return (
        <main className='text-[whitesmoke] flex flex-col lg:flex-row lg:justify-evenly items-center min-h-full lg:mb-5 py-5 '>
            <article className='gearContainer flex flex-col mb-5 lg:mb-0 lg:-mt-[6.65rem]'>
                <h2 className='text-3xl font-bold pb-2'>Meat & Potatoes</h2>
                <LazyLoadImage src={Guitar3} className='gear-image w-96 lg:max-w-full' />
                <ol className='gear-img mt-2'>
                    {meatPot.map((meat) => (
                        <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-xl'>{meat.name}</li></a>
                    ))}
                </ol>
            </article>
            <article className='gearContainer flex flex-col '>
                <h2 className='text-3xl font-bold pb-2'>Gravy</h2>
                <LazyLoadImage src={PedalBoard} className='gear-image w-96 lg:max-w-92' />
                <ol className='gear-img mt-2'>
                    {gravy.map((meat) => (
                        <a key={meat.id} href={meat.link} target="_blank" rel="noreferrer" className='my-[.15rem]'><li className='text-xl'>{meat.name}</li></a>
                    ))}
                </ol>

            </article>
        </main>
    )
}

export default Gear