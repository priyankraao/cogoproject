import { useParams } from 'react-router-dom';
import {useState} from 'react'



const About = () => {
    const [movie, updateMovie] = useState({});

    let getMovie = async (id) => {
        const response = await fetch(`https://omdbapi.com/?apikey=ba8ebbf4&i=${id}`);
        const movie = await response.json(); 
        updateMovie(()=> {
            let movieDetails = {moviePoster: movie.Poster, movieTitle: movie.Title,
                                movieYear: movie.Year, movieReleased: movie.released,
                                movieGenre: movie.Genre, movieWriter: movie.Writer,
                                movieAwards: movie.Awards, movieRating: movie.Value
                            };
            return movieDetails;
        })
    }
    const { id } = useParams();
    getMovie(id);
    
    return (
        <div className='all_details'>
            <div className='only_movies'>
            <div>
                <img src={movie.moviePoster} height="290" width="200" />
            </div>
            <div className='only_details'>
                <h2>{movie.movieTitle}<span>({movie.movieYear})</span></h2>
                <h3>Writer: {movie.movieWriter}</h3>
                <h3>{movie.movieGenre}</h3>
                <input type="checkbox"/>Add to favourites
            </div>
            </div>
        </div>
    )
}


export default About;