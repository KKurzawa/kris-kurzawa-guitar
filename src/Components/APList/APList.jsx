import './APList.css'
import Musics from '../../assets/data/mp3s';
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';
import { timer } from '../../Utils/timer';

const List = ({ props: { open, setOpen, musicNumber, setMusicNumber } }) => {

    return (
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
                    <li key={music.id} onClick={() => setMusicNumber(index)} className={`${musicNumber === index ? 'playing' : ''}`}>
                        <div className="row">
                            <span>{music.title}</span>
                            <p>{music.artist}</p>
                        </div>
                        <Duration music={music} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default List

const Duration = ({ music }) => {
    const [duration, setDuration] = useState(0);
    useEffect(() => {
        const audio = new Audio(music.src)
        audio.onloadedmetadata = function () {
            if (audio.readyState > 0) {
                setDuration(audio.duration)
            }
        }
        console.log(music)
    }, [music])
    return (
        <span className='duration'>{timer(duration)}</span>
    )
}