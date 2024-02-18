import './Music.css'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import Sly from '../../assets/images/Sly.jpg';
import VisionQuest from '../../assets/images/VisionQuest.jpeg'
import ZapToro from '../../assets/images/ZapToro.jpeg'

const Music = () => {
    return (
        <>
            {/* small-medium */}
            <main className='lg:hidden flex flex-col justify-center items-center'>
                <header className='text-[whitesmoke] text-center text-3xl py-3'>Listen</header>
                <article className='mainMusic'>
                    <section className='w-full'>
                        <AudioPlayer />
                    </section>
                </article>
                <header className='text-[whitesmoke] text-center text-3xl py-3'>Download</header>
                <a href='https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W' target="_blank" rel="noreferrer"><img src={Sly} className='w-[325px] h-auto py-4' /></a>
                <a href='https://www.amazon.com/Zap-Toro/dp/B004P91DSU' target="_blank" rel="noreferrer"><img src={ZapToro} className='w-[325px] h-auto py-4' /></a>
                <a href='https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC' target="_blank" rel="noreferrer"><img src={VisionQuest} className='w-[325px] h-auto py-4 mb-4' /></a>
            </main>
            {/* large */}
            <main className='hidden lg:flex w-full justify-center mb-10'>
                <section className='flex-col'>
                    <article className='flex flex-row'>
                        <header className='text-[whitesmoke] text-3xl py-3'>Listen</header>
                        <header className='text-[whitesmoke] text-3xl py-3'>Download</header>
                    </article>
                    <section className=''>
                        <article className='flex flex-row'>
                            <section className='mainMusic mr-20'>
                                <section className='w-full'>
                                    <AudioPlayer />
                                </section>
                            </section>
                            <article className='flex flex-col ml-20'>
                                <section className='flex flex-row mb-6'>
                                    <a href='https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W' target="_blank" rel="noreferrer" className='h-[250px] mr-3'><img src={Sly} className='w-[250px] h-auto py-4' /></a>
                                    <a href='https://www.amazon.com/Zap-Toro/dp/B004P91DSU' target="_blank" rel="noreferrer" className='h-[250px] ml-3'><img src={ZapToro} className='w-[272px] h-auto py-4' /></a>
                                </section>
                                <section>
                                    <a href='https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC' target="_blank" rel="noreferrer" className='h-[250px]'><img src={VisionQuest} className='w-[250px] h-auto py-4 mb-4 ml-36' /></a>
                                </section>
                            </article>

                        </article>
                    </section>

                </section>
            </main>
        </>


    )
}

export default Music