import './Videos.css'

const videoLinks = [
    {
        id: 1,
        link: "https://www.youtube.com/embed/Un7uMlsFc30?si=UXp6dgH5p_5hQYMn&amp;start=304",
        title: "Live at the Dirty Dog"
    },
    {
        id: 2,
        link: "https://www.youtube.com/embed/9fNWY-U0X_c?si=p_UMoMo3n5K9ZYMP",
        title: "Cliffs of Dover"
    },
    {
        id: 3,
        link: "https://www.youtube.com/embed/9fNWY-U0X_c?si=p_UMoMo3n5K9ZYMP",
        title: "Cliffs of Dover"
    },
    {
        id: 4,
        link: "https://www.youtube.com/embed/9fNWY-U0X_c?si=p_UMoMo3n5K9ZYMP",
        title: "Cliffs of Dover"
    },
]

const Videos = () => {
    return (
        <>
            {/* large */}
            <main className='hidden lg:flex flex-row justify-evenly text-2xl'>
                <section className='flex flex-col py-10'>
                    {videoLinks.map((video, index) => index % 2 === 0 && (
                        <article key={video.id} className='videoContainer text-[whitesmoke] flex flex-col py-5'>
                            <header>{video.title}</header>
                            <iframe width="560" height="315" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </article>
                    ))}
                </section>
                <section className='flex flex-col py-10'>
                    {videoLinks.map((video, index) => index % 2 !== 0 && (
                        <article key={video.id} className='text-[whitesmoke] flex flex-col py-5'>
                            <header>{video.title}</header>
                            <iframe width="560" height="315" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </article>
                    ))}
                </section>
            </main>
            {/* small-medium */}
            <main className='lg:hidden flex flex-col items-center text-2xl pb-5'>
                {videoLinks.map((video) => (
                    <article key={video.id} className='videoContainer text-[whitesmoke] flex flex-col py-5'>
                        <header>{video.title}</header>
                        <iframe width="350" height="196.875" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </article>
                ))}
            </main>
        </>

    )
}

export default Videos