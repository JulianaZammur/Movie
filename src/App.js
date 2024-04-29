 import './App.css';
import Sensei from './components/Sensei.js';
import Navbar from './components/Navbar.js';
import Movie from './components/Movie.js';
import Carousel from './components/CardGallery .js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sensei />
    <Movie />
    <Carousel/>
    </div>
    

  );
}

export default App;
