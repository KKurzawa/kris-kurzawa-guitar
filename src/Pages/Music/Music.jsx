import './Music.css'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'
import Sly from '../../assets/images/Sly.jpg';
import VisionQuest from '../../assets/images/VisionQuest.jpeg'
import ZapToro from '../../assets/images/ZapToro.jpeg'

const Music = () => {
    return (
        <main className='flex flex-col justify-center items-center'>
            <header className='text-[whitesmoke] text-center text-3xl py-3'>Listen</header>
            <article className='mainMusic'>
                <section className='w-full'>
                    <AudioPlayer />
                </section>
            </article>
            <header className='text-[whitesmoke] text-center text-3xl py-3'>Download</header>
            <a href='https://www.amazon.com/Zap-Toro/dp/B004P91DSU' target="_blank" rel="noreferrer"><img src={ZapToro} className='w-[325px] h-auto py-4' /></a>
            <a href='https://www.amazon.com/Vision-Quest-Zap-Toro/dp/B01M9CIBPC' target="_blank" rel="noreferrer"><img src={VisionQuest} className='w-[325px] h-auto py-4 ' /></a>
            <a href='https://www.amazon.com/Sly-Kris-Kurzawa/dp/B01AXGA21W' target="_blank" rel="noreferrer"><img src={Sly} className='w-[325px] h-auto py-4 mb-4' /></a>
        </main>

    )
}

export default Music