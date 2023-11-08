import Movie from "./Components/Movie/Movie";
import Movie2 from "./Components/Movie/Movie.style";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      <div className="list_container">
        {
          movies.results.map((item) => {
            return (
              <Movie2
                key={item.id}
                title={item.title}
                poster={item.poster_path}
                vote={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
