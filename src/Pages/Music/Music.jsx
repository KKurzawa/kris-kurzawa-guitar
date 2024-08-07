import './Music.css'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer.jsx';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Sly from '../../assets/images/Sly.jpg';
import VisionQuest from '../../assets/images/VisionQuest.jpg'
import ZapToro from '../../assets/images/ZapToro.png'

const Music = () => {
    return (
        <div className='music-page-container'>
            {/* small */}
            <main className='md:hidden flex flex-col justify-center items-center'>
                <header className='text-center py-3 text-3xl font-bold'>Listen</header>
                <article className='mainMusic'>
                    <section className='w-full'>
                        <AudioPlayer />
                    </section>
                </article>
                <header className='text-center mt-5 text-3xl font-bold'>Download</header>
                <button onClick={() => setTimeout(() =>
                    window.open('https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W', '_blank')
                    , 500)}><LazyLoadImage src={Sly} className='downloads w-[325px] h-auto my-4' /></button>
                <button onClick={() => setTimeout(() =>
                    window.open('https://www.amazon.com/Zap-Toro/dp/B004P91DSU', '_blank')
                    , 500)}><LazyLoadImage src={ZapToro} className='downloads w-[325px] h-auto my-4' /></button>
                <button onClick={() => setTimeout(() =>
                    window.open('https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC', '_blank')
                    , 500)}><LazyLoadImage src={VisionQuest} className='downloads w-[325px] h-auto mt-4 mb-10' /></button>
            </main>
            {/* medium */}
            <main className='hidden lg:hidden md:flex flex-col justify-center items-center w-full'>
                <header className='text-center mt-5 py-3 text-3xl font-bold'>Listen</header>
                <article className='mediumMainMusic'>
                    <section className='w-full'>
                        <AudioPlayer />
                    </section>
                </article>
                <header className='text-center mt-10 text-3xl font-bold'>Download</header>
                <article className='flex justify-evenly w-full'>
                    <button onClick={() => setTimeout(() =>
                        window.open('https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W', '_blank')
                        , 500)}><LazyLoadImage src={Sly} className='downloads w-[290px] h-auto my-4' /></button>
                    <button onClick={() => setTimeout(() =>
                        window.open('https://www.amazon.com/Zap-Toro/dp/B004P91DSU', '_blank')
                        , 500)}><LazyLoadImage src={ZapToro} className='downloads w-[325px] h-auto my-4' /></button>
                </article>
                <button onClick={() => setTimeout(() =>
                    window.open('https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC', '_blank')
                    , 500)}><LazyLoadImage src={VisionQuest} className='downloads w-[325px] h-auto mt-4 mb-10' /></button>
            </main>
            {/* large */}
            <main className='hidden lg:flex w-full justify-center mt-5 mb-10'>
                <section className='flex-col'>
                    <article className='flex flex-row justify-between font-bold'>
                        <header className='py-3 ml-[138px] text-3xl'>Listen</header>
                        <header className='py-3 mr-52 text-3xl'>Download</header>
                    </article>
                    <section className=''>
                        <article className='flex flex-row'>
                            <section className='mainMusic mr-20'>
                                <section className='w-full'>
                                    <AudioPlayer />
                                </section>
                            </section>
                            <article className='flex flex-col ml-20 mt-1'>
                                <section className='flex flex-row mb-6'>
                                    <button onClick={() => setTimeout(() =>
                                        window.open('https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W', '_blank')
                                        , 500)} className=' h-[250px] mr-3'><img src={Sly} className='downloads w-[250px] h-auto my-4' /></button>
                                    <button onClick={() => setTimeout(() =>
                                        window.open('https://www.amazon.com/Zap-Toro/dp/B004P91DSU', '_blank')
                                        , 500)} className='h-[250px] ml-3'><img src={ZapToro} className='downloads w-[279px] h-auto my-4' /></button>
                                </section>
                                <section className='w-[250px]'>
                                    <button onClick={() => setTimeout(() =>
                                        window.open('https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC', '_blank')
                                        , 500)} className='h-[250px] '><img src={VisionQuest} className='downloads w-[250px] h-auto my-4 mb-4 ml-36' /></button>
                                </section>
                            </article>
                        </article>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Music