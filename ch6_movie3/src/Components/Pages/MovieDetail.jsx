import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function MovieDetail() {
    const { MovieId } = useParams();

    const { state } = useLocation();
    console.log(state);

  return (
    <>
      <div className='movie_detail_container'>
        <img className='movie_detail_img' src={state.poster_path} alt={state.title} width="200px" height="300px" />
        <h1 className='movie_detail_title'>{state.title}</h1>
        <span>{state.vote_average}</span>
        <div className='movie_detail_text'>{state.overview}</div>
        <Link to="/Movies">영화 목록으로 돌아가기</Link>
      </div>
    </>
  )
}

export default MovieDetail