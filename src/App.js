import './App.css';
import NoteState from './context/MusicState'
import SongCard from './components/SongCard'
function App() {
  return (
    <NoteState>
      <SongCard/>
    </NoteState>
  );
}

export default App;