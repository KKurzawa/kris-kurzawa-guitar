import './Videos.css'
// import { Player } from 'video-react';
// import cliffsOfDover from '../../assets/videos/CliffsOfDover.mp4'
// import "node_modules/video-react/dist/video-react.css"; // import css

const Videos = () => {
    return (
        <main className='flex flex-col justify-center text-2xl'>
            <section className='flex flex-row justify-center'>
                <article className='videoContainer w-[40%] text-[whitesmoke] mr-14 my-14'>
                    <header>Live at the Dirty Dog 2/2/24</header>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Un7uMlsFc30?si=UXp6dgH5p_5hQYMn&amp;start=304" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
                <article className='w-[40%] text-[whitesmoke] ml-14 my-14'>
                    <header>Cliffs of Dover</header>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9fNWY-U0X_c?si=p_UMoMo3n5K9ZYMP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
            </section>

        </main>
    )
}

export default Videos