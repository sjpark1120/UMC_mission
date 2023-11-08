import Movie from "./Components/Movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      <div className="list_container">
        {
          movies.results.map((item) => {
            return (
              <Movie
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
