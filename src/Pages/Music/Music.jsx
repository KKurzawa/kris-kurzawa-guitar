import './Music.css'
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer'

const Music = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <header className='text-[whitesmoke] text-center text-2xl'>Listen</header>
            <main className='mainMusic'>

                <article className='w-full'>
                    <AudioPlayer />
                </article>

            </main>
        </div>

    )
}

export default Music