import React, { useState } from 'react'
import MusicContext from './MusicContext'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.png"
import image3 from "../images/image3.jpg"
import audio1 from "../audios/song1.mp3"
import audio2 from "../audios/song2.mp3"
import audio3 from "../audios/song3.mp3"

const MusicState = (props) => {
    const song1 = {
        "audio" : audio1,
        "image" : image1,
        "color" : "#FFC300",
        "artist" : "Prabin Kandel",
        "song_name" : "Vawana ko chitti"
    }
    const song2 = {
      "audio" : audio2,
      "image" : image2,
      "color" : "#5EE451",
      "artist" : "Prabin Kandel",
      "song_name" : "Biswas Mero"
  }
  const song3 = {
    "audio" : audio3,
    "image" : image3,
    "color" : "black",
    "artist" : "Prabin Kandel",
    "song_name" : "Eaklopan lai aangalera"
  }
  const[state,setState] = useState(song1);

  function update(){
    switch(state.audio){
      case (audio1):
        setState(song2)
        break;
      case (audio2):
        setState(song3);
        break;
      case (audio3):
        setState(song1);
        break;
      default:
    }
  }
  return (
    <MusicContext.Provider value={{state:state,update:update}}>
    {props.children}
    </MusicContext.Provider>
  )
}

export default MusicState