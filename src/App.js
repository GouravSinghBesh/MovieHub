import './App.css';
import { useEffect ,useState} from 'react';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard';

const App =()=> {
  const [movies, setmovies] = useState([])
  const [searchTerm, setsearchTerm] = useState('');
  const Url = 'http://www.omdbapi.com/?apikey=c695d37d';

  const SearchMovies = async(title)=>{
      const response = await fetch(`${Url}&s=${title}`);
      const data = await response.json();
      console.log(data.Search);
      setmovies(data.Search);
  }
useEffect(() => {
 SearchMovies('batman')
}, [])

  return (
    <div className='app'>
        <h1>Movie Hub</h1>

        <div className="search">

          <input 
          placeholder='Search for movies' 
          value={searchTerm}  
          onChange={(e)=>setsearchTerm(e.target.value)}/>

          <img src={SearchIcon} 
          alt="search"
          onClick={()=>SearchMovies(searchTerm)} />

        </div>
        {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie)=>(<Moviecard movie1={movie} />))}
        </div>
        ) : (
          <div className="empty">
            <h2>Movies Not Found</h2>
          </div>
        )}
    </div>
  );
}

export default App;
