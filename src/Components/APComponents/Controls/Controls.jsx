import { useState, useEffect, useRef, useCallback } from 'react';
import './Controls.css';
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
// import Musics from '../../../assets/data/mp3s';

import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
} from 'react-icons/io5';

import {
    IoMdVolumeHigh,
    IoMdVolumeOff,
    IoMdVolumeLow,
} from 'react-icons/io';
import { set } from 'mongoose';

const Controls = ({
    audioRef,
    progressBarRef,
    duration,
    setDuration,
    timeProgress,
    setTimeProgress,
    Musics,
    trackIndex,
    setTrackIndex,
    currentTrack,
    setCurrentTrack,
    handleNext,
    isPlaying,
    setIsPlaying
}) => {

    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);
    const [musicNumber, setMusicNumber] = useState(0);
    const [open, setOpen] = useState(false)

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
        console.log('isPlaying2', isPlaying)
    };

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
        console.log('isPlaying', isPlaying)
    };

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value
    }

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    const skipForward = () => {
        audioRef.current.currentTime += 15;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 15;
    };

    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = Musics.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(Musics[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(Musics[trackIndex - 1]);
        }
    };

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    return (
        <>
            <main>
                <section className='audio-player-header flex justify-between'>
                    <i className=" text-white text-3xl" onClick={() => setOpen(true)}><MdOutlineQueueMusic /></i>
                    <h3 className='mx-10'>Now Playing {trackIndex + 1}/{Musics.length}</h3>
                    <i className=" text-white text-3xl" onClick={() => setOpen(true)}><MdOutlineQueueMusic /></i>
                </section>
                <div className={`list ${open ? 'show' : ''}`}>
                    <div className="header">
                        <div>
                            <i className="react-icons">
                                <MdOutlineQueueMusic />
                            </i>
                            <span>Music List</span>
                        </div>
                        <i className='react-icons' onClick={() => setOpen(false)}>
                            <IoMdClose />
                        </i>
                    </div>
                    <ul>
                        {Musics.map((music, index) => (
                            <li key={music.id} onClick={() => {
                                setMusicNumber(index);
                                setCurrentTrack(Musics[index]);
                                setTrackIndex(music.id - 1);
                                setIsPlaying(true);
                            }} className={`${musicNumber === index ? 'playing' : ''}`}>
                                <div className="row">
                                    <span>{music.title}</span>
                                    <p>{music.artist}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </main>

            <main className='audio-image'>
                <audio
                    src={currentTrack.src}
                    ref={audioRef}
                    onLoadedMetadata={onLoadedMetadata}
                    onEnded={handleNext}
                />
                <article className="flex flex-col audio-info">
                    <section className=" ">
                        <img className={isPlaying ? 'album-cover-playing' : 'album-cover'} src={currentTrack.thumbnail} alt="audio avatar" />
                    </section>
                    <section className="text">
                        <p className="title">{currentTrack.title}</p>
                        <p>{currentTrack.artist}</p>
                    </section>
                </article>
            </main>
            <main className='progress-container'>
                <div className="progress">
                    <span className="current-time current">{formatTime(timeProgress)}</span>
                    <input
                        className='track-slider'
                        type="range"
                        ref={progressBarRef}
                        defaultValue='0'
                        onChange={handleProgressChange} />
                    <span className="time">{formatTime(duration)}</span>
                </div>
            </main>
            <main className="controls-wrapper">
                <article className="controls">
                    <button onClick={handlePrevious}>
                        <IoPlaySkipBackSharp />
                    </button>
                    <button onClick={skipBackward}>
                        <IoPlayBackSharp />
                    </button>
                    <button id='playPause' onClick={togglePlayPause}>
                        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                    </button>
                    <button onClick={skipForward}>
                        <IoPlayForwardSharp />
                    </button>
                    <button onClick={handleNext}>
                        <IoPlaySkipForwardSharp />
                    </button>
                </article>
                <article className="volume">
                    <button className='volume-icons' onClick={() => setMuteVolume((prev) => !prev)}>
                        {muteVolume || volume < 5 ? (
                            <IoMdVolumeOff />
                        ) : volume < 40 ? (
                            <IoMdVolumeLow />
                        ) : (
                            <IoMdVolumeHigh />
                        )}
                    </button>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        style={{
                            background: `linear-gradient(to right, #971522 ${volume}%, #ccc ${volume}%)`,
                        }}
                    />
                    <h3 className='volume-num'>{volume}</h3>
                </article>
            </main>
        </>

    );
};

export default Controls;