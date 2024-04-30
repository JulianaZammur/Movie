import './App.css';
import Sensei from './components/Sensei.js';
import Navbar from './components/Navbar.js';
import Movie from './components/Movie.js';
import CardGallery from './components/CardGallery .js';


const movies = [

];

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">Lista de Películas</h1>
        <Movie movies={movies} />
        <Sensei />
        <CardGallery />
      </div>
    </div>
  );
}

export default App;
