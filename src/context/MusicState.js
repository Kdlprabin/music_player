import MusicContext from "./musicContext";
import { useState } from "react";
const MusicState = (props) => {
  const song1 = {
    music: "Ae mutu",
    singer: "Yabesh Thapa",
  };
  const song3 = {
    music: "Vawana ko Chitti",
    singer: "Prabin Kandel",
  };
  const song2 = {
    music: "Eaklopan",
    singer: "Kandel Prabin",
  };
  const [song, setSong] = useState(song1);
  const update = () => {
    setSong(song2);
  }
  return (
    <MusicContext.Provider value={{ state: song, update: update }}>
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicState;
