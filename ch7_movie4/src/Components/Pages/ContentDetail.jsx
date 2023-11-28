import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Content from '../Movie/Content'
function ContentDetail() {
    const { state } = useLocation();
    console.log(state);
    const navigate = useNavigate();
    const baseurl = "https://image.tmdb.org/t/p/w1280"
  return (
    <>
      <div className='movie_detail_container'>
        <img className='movie_detail_img' src={state.poster} alt={state.title} width="200px" height="300px" />
        <h1 className='movie_detail_title'>{state.title}</h1>
        <span className='star_vote'>{state.vote}</span>
        <div className='movie_detail_text'>{state.overview || state.known_for_department}</div>
        {state.known_for && <h2>작품 목록</h2>}
        {
          state.known_for &&
          state.known_for.map((item) => {
            return (
              <div className='known_for' key={item.id}>
              <Content
                key={item.id}
                title={item.title || item.name}
                poster={baseurl+item.poster_path}
                vote={item.vote_average}
                overview={item.overview}
              />
              </div>
            )
          })
        }
        <button className='goback_btn' onClick={() => navigate(-1)}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default ContentDetail