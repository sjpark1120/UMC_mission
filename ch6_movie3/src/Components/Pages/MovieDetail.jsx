import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function MovieDetail() {
    const { MovieId } = useParams();

    const { state } = useLocation();
    console.log(state);

  return (
    <>
    <img src={state.poster_path} alt={state.title} width="200px" height="300px" />
    <h1>{state.title}</h1>
    <div>{state.vote_average}</div>
    <div>{state.overview}</div>
    <Link to="/Movies">영화 목록으로 돌아가기</Link>
    </>
  )
}

export default MovieDetail