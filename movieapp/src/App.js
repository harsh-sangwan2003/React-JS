import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';

function App() {
  return (
    <>
      <NavBar />
      {/* <Banner />
      <MovieList /> */}
      <Favourites />
    </>
  );
}

export default App;
