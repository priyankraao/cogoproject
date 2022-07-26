import { useEffect, useState } from "react";

const Fav = () => {
  const [movie, setMovie] = useState([]);
  // console.log("inside fav");
  let data = JSON.parse(localStorage.getItem("Fav"));
  // console.log("data: ", data);
  useEffect(() => {
    setMovie(data);
  }, []);
  // setMovie(data);
  // console.log(movie)
  // data.map((movie)=> {
  //     console.log("movie: ", movie.movieTitle, movie.image);
  // })
  return (
    <div className="all_movies">
      {
        //  console.log(movie)
        movie.map((mov, index) => {
          return (
            <div className="moviedetails">
              <img
                className="imageID"
                src={mov.image}
                height="100"
                width="60"
              />
              <div>
                <h3>{mov.movieTitle}</h3>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Fav;
