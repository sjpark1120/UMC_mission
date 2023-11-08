function Movie({ title, poster, vote, overview }) {
    return (
      <>
        <div className="movie_container">
          <img src={poster} alt={title} width="200px" height="300px" />
          <div className="title_container">
            <div>{title}</div>
            <div>{vote}</div>
          </div>
          <div className="movie_overview"><h4>{title}</h4><div className="overview_text">{overview}</div></div>
        </div>
      </>
    )
  }
  
  export default Movie