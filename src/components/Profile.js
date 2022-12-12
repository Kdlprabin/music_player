import React, { useContext } from "react";
import musicContext from "../context/musicContext";
import Button from "react-bootstrap/Button";
function Profile() {
  const a = useContext(musicContext);
  return (
    <div className="profile">
      <h1>Now Playing</h1>
      <div className="circle"></div>
      <h2>{a.state.music}</h2>
      <h3>{a.state.singer}</h3>
      <audio controls autoplay>
        <source src="../audios/free-love-storytelling-instrumental-i-love.mp3" type="audio/mpeg" />
      </audio>
      <Button variant="primary" onClick={a.update}>
        Next
      </Button>
    </div>
  );
}

export default Profile;
