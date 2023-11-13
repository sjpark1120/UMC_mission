import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function ContentDetail() {
    const { state } = useLocation();
    console.log(state);
    const navigate = useNavigate();

  return (
    <>
      <div className='movie_detail_container'>
        <img className='movie_detail_img' src={state.poster} alt={state.title} width="200px" height="300px" />
        <h1 className='movie_detail_title'>{state.title}</h1>
        <span className='star_vote'>{state.vote}</span>
        <div className='movie_detail_text'>{state.overview}</div>
        <button className='goback_btn' onClick={() => navigate(-1)}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default ContentDetail