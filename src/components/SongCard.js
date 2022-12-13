import React,{useContext} from 'react'
import MusicContext from '../context/MusicContext'
import {Button} from "react-bootstrap"
function SongCard() {
    const a = useContext(MusicContext);
  return (
    <div className="c-songCard" style={{backgroundColor: `${a.state.color}`}}>
        <h1>Now Playing</h1>
        <div className="songPic" style={{backgroundImage : `url(${a.state.image})`}}></div>
        <h2>{a.state.song_name}</h2>
        <h3>{a.state.artist}</h3>
        <div>
            <audio controls autoplay src={a.state.audio} />
            <Button onClick={a.update} id="next">Next</Button>
        </div>
    </div>
  )
}

export default SongCard