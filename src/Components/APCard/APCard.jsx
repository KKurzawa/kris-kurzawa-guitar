import './APCard.css'
import Musics from '../../assets/data/mp3s.jsx';
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { timer } from '../../Utils/timer.js';
import { FaPause } from "react-icons/fa";
import { MdVolumeOff } from "react-icons/md";
import { visualizer } from '../../Utils/visualizer.js';

const APCard = ({ props: { musicNumber, setMusicNumber, setOpen } }) => {
    const [duration, setDuration] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [play, setPlay] = useState(false);
    const [showVolume, setShowVolume] = useState(false);
    const [volume, setVolume] = useState(0);
    const [repeat, setRepeat] = useState('repeat');

    const audioRef = useRef();
    const canvasRef = useRef();

    function handleLoadStart() {
        // const src = e.nativeEvent.srcElement.src;
        // const audio = new Audio(src);
        // audio.onloadedmetadata = function () {
        //     if (audio.readyState > 0) {
        //         setDuration(audio.duration)
        //     }
        // }
        setDuration(audioRef.current.duration)
        if (play) { audioRef.current.play() }
        console.log('')
    }

    function handlePlayingAudio() {
        visualizer(audioRef.current, canvasRef.current, play)
        if (play) {
            audioRef.current.pause();
            setPlay(false)
        } else {
            audioRef.current.play();
            setPlay(true)
        }
        console.log('handlePlayingAudio')
    }

    function handleTimeUpdate() {
        const currentTime = audioRef.current.currentTime;
        setCurrentTime(currentTime);
    }

    function changeCurrentTime(e) {
        const currentTime = Number(e.target.value);
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime);
    }

    function handleNextPrev(n) {
        setMusicNumber(value => {
            if (n > 0)
                return value + n > Musics.length - 1 ? 0 : value + n;
            return value + n < 0 ? Musics.length - 1 : value + n;
        })
        console.log('handleNextPrev')
    }

    useEffect(() => {
        audioRef.current.volume = volume / 100;
    }, [volume]);

    function handleRepeat() {
        setRepeat(value => {
            switch (value) {
                case 'repeat':
                    return 'repeat_one';

                case 'repeat_one':
                    return 'shuffle';

                case 'shuffle':
                    return 'repeat';

                default:
                    return 'shuffle'
            }
        })
    }

    function EndedAudio() {
        switch (repeat) {
            case 'repeat_one':
                return audioRef.current.play();

            case 'shuffle':
                return handleShuffle();

            default:
                return handleNextPrev(1);
        }
    }

    function handleShuffle() {
        const num = randomNumber()
        setMusicNumber(num)
    }

    function randomNumber() {
        const number = Math.floor(Math.random() * (Musics.length - 1));
        if (number === musicNumber)
            return randomNumber();

        return number;
    }

    return (
        <div className="card">
            <div className="apNav">
                <i id='mobileRepeat' className="material-symbols-outlined" onClick={handleRepeat}>{repeat}</i>
                {/* <i className="react-icons"><MdExpandMore /></i> */}
                <span>Now Playing {musicNumber + 1}/{Musics.length}</span>
                <i className="react-icons" onClick={() => setOpen(prev => !prev)}><MdOutlineQueueMusic /></i>
            </div>
            <div className="img">
                <img src={Musics[musicNumber].thumbnail} alt='' className={`${play ? 'playing' : ''}`} />
                <canvas ref={canvasRef} />
            </div>

            <div className="details">
                <p className="title">{Musics[musicNumber].title}</p>
                <p className="artist">{Musics[musicNumber].artist}</p>
            </div>
            <div className="progress">
                <input type="range" min={0} max={duration} value={currentTime} onChange={e => changeCurrentTime(e)} style={{
                    background: `linear-gradient(to right, #971522 ${currentTime / duration * 100}%, #e5e5e5 ${currentTime / duration * 100}%)`
                }} />
            </div>
            <div className="timer">
                <span>{timer(currentTime)}</span>
                <span>{timer(duration)}</span>
            </div>
            <div className="controls">

                <i id='repeat' className="material-symbols-outlined" onClick={handleRepeat}>{repeat}</i>
                <i className="react-icons" id='prev' onClick={() => handleNextPrev(-1)}><IoPlaySkipBackSharp /></i>
                <div className="play" onClick={handlePlayingAudio}>
                    <i className="react-icons">{play ? <FaPause /> : <FaPlay />}</i>
                </div>
                <i className="react-icons" id='next' onClick={() => handleNextPrev(1)}><IoPlaySkipForward /></i>

                {/* volume */}
                <i id='volume' className="react-icons" onClick={() => setShowVolume(prev => !prev)}><FaVolumeUp /></i>

                <div className={`volume ${showVolume ? 'show' : ''}`}>
                    <i className="react-icons" onClick={() => setVolume(v => v > 0 ? 0 : 100)}>{volume === 0 ? <MdVolumeOff /> : <FaVolumeUp />}</i>
                    <input type="range" min={0} max={100} value={volume} onChange={e => setVolume(Number(e.target.value))} style={{
                        background: `linear-gradient(to right, #971522 ${volume}%, #e5e5e5 ${volume}%)`
                    }} />
                    <span>{volume}</span>
                </div>
            </div>
            <audio src={Musics[musicNumber].src} hidden ref={audioRef}
                onLoadedData={handleLoadStart} onTimeUpdate={handleTimeUpdate} onEnded={EndedAudio} />
        </div>
    )
}

export default APCard

