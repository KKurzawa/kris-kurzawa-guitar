import './AudioPlayer.css'
import APCard from '../APCard/APCard';
import { useState } from 'react';
import APList from '../APList/APList'

const AudioPlayer = () => {
    const [musicNumber, setMusicNumber] = useState(0);
    const [open, setOpen] = useState(false)
    return (
        <main>
            <APCard props={{ musicNumber, setMusicNumber, setOpen }} />
            <APList props={{ open, setOpen, musicNumber, setMusicNumber }} />
        </main>
    )
}

export default AudioPlayer
