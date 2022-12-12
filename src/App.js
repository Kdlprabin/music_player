import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MusicState from './context/MusicState';
function App() {
  return (
    <MusicState>
    <Navbar/>
    <Profile/>
    </MusicState>
  );
}

export default App;