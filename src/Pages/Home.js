// import { render } from "react-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // const [data, updateData] = useState([]);
  const [searchData, searchDisplay] = useState([]);
  const [searchValue, searchUpdate] = useState("");
  const [favourites, setFavourites]=useState([]);


  const searchMovie = async () => {
    const response = await fetch(
      `https://omdbapi.com/?apikey=ba8ebbf4&s=${searchValue}`
    );
    const myJson = await response.json();
    const movies = myJson.Search;
     


    searchDisplay(() => {
      let movie = movies.map((movie) => {
        return {
          movieTitle: movie.Title,
          image: movie.Poster,
          movieId: movie.imdbID,
          type: movie.Type,
          year: movie.Year,
        };
      });

      return movie;
    });
  };
//   const addFavouriteMovie=(movie)=>{
//     const newFavouritesList= [...favourites, movie]
//      setFavourites(newFavouritesList); 
//   };
const controlLike = (id) => {

    let m = searchData.map((movie)=> {

            return {movieId: movie.movieId, image: movie.image, movieTitle: movie.movieTitle}

    })
    m = m.filter((movie)=> {
        return movie.movieId === id;
    })
    setFavourites((updatedList)=> {
        let newList = [...updatedList, m[0]]
        return newList;

    })
    localStorage.setItem('Fav', JSON.stringify(favourites));

  }
  return (
    <div className="Searchbutton">
        <div className="navbar">
        <Link to={`/Fav`}> <h2 >favourites <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"/></h2> </Link>
      <input type="text" onChange={(e) => searchUpdate(e.target.value)} /> 
      <button type="button" onClick={searchMovie}>
        Search
      </button>
        </div>
       

      <div  className="all_movies">
        {searchData.map((movie) => {
          return (
            <div className="moviedetails">
              <Link to={`/about/${movie.movieId}`}>
                <img
                  className="imageID"
                  src={movie.image}
                  height="100"
                  width="60"
                />
              </Link>
              <input type="checkbox" onChange={()=>controlLike(movie.movieId)}></input>
              <div>
                <h3>{movie.movieTitle}</h3>
                
                <h4>{movie.year}</h4>
                {/* <input type="checkbox"/>Add to favourites */}
                {/* <button onClick={addFavouriteMovie} >Add</button> */}
                <br></br>
                <h4>{movie.type}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
