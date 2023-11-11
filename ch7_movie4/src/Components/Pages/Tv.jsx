import React from 'react'
import { tvs } from '../../TvDummy'
import Content from '../Movie/Content'
import { useNavigate } from 'react-router-dom'

function Tv() {
  const navigate = useNavigate();
  const baseurl = "https://image.tmdb.org/t/p/w1280"
  const onClickTv = (item) =>{
    console.log('click');
    navigate((`/Tv/${item.name}`),{
      state: {
        key : item.id,
        title : item.name,
        poster : baseurl + item.poster_path,
        vote : item.vote_average,
        overview : item.overview,
      }
    })
  } 

  return (
    <div className="app-container">
      <div className="list_container">
        {
          tvs.results.map((item) => {
            return (
              <div key={item.id} onClick={() => onClickTv(item)}>
              <Content
                key={item.id}
                title={item.name}
                poster={baseurl + item.poster_path}
                vote={item.vote_average}
                overview={item.overview}
              />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tv