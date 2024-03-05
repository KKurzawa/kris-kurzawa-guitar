import { useRef, useState } from 'react';
import Musics from '../../../assets/data/mp3s';
import Controls from '../Controls/Controls';
import DisplayTrack from "../DisplayTrack/DisplayTrack";
import ProgressBar from "../ProgressBar/ProgressBar";
import './AudioPlayer.css'

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(Musics[trackIndex]);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= Musics.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(Musics[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(Musics[trackIndex + 1]);
        }
    };

    return (
        <main className="audio-player">
            <article className="main-container">
                <section className='audio-player-header'>
                    <h3>Now Playing {trackIndex + 1}/{Musics.length}</h3>
                </section>
                <DisplayTrack
                    {...{
                        currentTrack,
                        audioRef,
                        setDuration,
                        progressBarRef,
                        handleNext
                    }} />
                <ProgressBar
                    {...{ progressBarRef, audioRef, timeProgress, duration }} />
                <Controls
                    {...{
                        audioRef,
                        progressBarRef,
                        duration,
                        setTimeProgress,
                        Musics,
                        trackIndex,
                        setTrackIndex,
                        setCurrentTrack,
                        handleNext,
                        isPlaying,
                        setIsPlaying
                    }}
                />
            </article>
        </main>
    );
};
export default AudioPlayer;