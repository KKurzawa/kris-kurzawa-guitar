import './Videos.css'
import { videoLinks } from '../../assets/data/videoLinks'


const Videos = () => {
    return (
        <>
            {/* large */}
            <main className='hidden lg:flex flex-row justify-evenly text-2xl font-semibold'>
                <section className='flex flex-col py-3'>
                    {videoLinks.map((video, index) => index % 2 === 0 && (
                        <article key={video.id} className='text-[whitesmoke] flex flex-col py-5'>
                            <header className='pb-1'>{video.title}</header>
                            <iframe className='video' width="560" height="315" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                        </article>
                    ))}
                </section>
                <section className='flex flex-col py-3'>
                    {videoLinks.map((video, index) => index % 2 !== 0 && (
                        <article key={video.id} className='text-[whitesmoke] flex flex-col py-5'>
                            <header className='pb-1'>{video.title}</header>
                            <iframe className='video' width="560" height="315" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                        </article>
                    ))}
                </section>
            </main>
            {/* small-medium */}
            <main className='lg:hidden flex flex-col items-center text-xl pt-3 pb-5 font-semibold'>
                {videoLinks.map((video) => (
                    <article key={video.id} className='videoContainer text-[whitesmoke] flex flex-col py-3'>
                        <header className='pb-1'>{video.title}</header>
                        <iframe className='video' width="350" height="196.875" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
                    </article>
                ))}
            </main>
        </>

    )
}

export default Videos