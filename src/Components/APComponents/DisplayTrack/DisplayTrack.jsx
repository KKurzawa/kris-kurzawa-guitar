import "./DisplayTrack.css"

const DisplayTrack = ({
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
    handleNext,
    isPlaying
}) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
        console.log('isPlaying', isPlaying)
    };


    return (
        <main className='audio-image'>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={handleNext}
            />
            <article className="flex flex-col audio-info">
                <section className=" ">
                    <img className='' src={currentTrack.thumbnail} alt="audio avatar" />
                </section>
                <section className="text">
                    <p className="title">{currentTrack.title}</p>
                    <p>{currentTrack.artist}</p>
                </section>
            </article>
        </main>
    );
};
export default DisplayTrack;