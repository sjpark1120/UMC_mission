import React from 'react'
import { movies } from '../../movieDummy'
import Movie from '../Movie/Movie'
import { useNavigate } from 'react-router-dom'

function Movies() {
  const navigate = useNavigate();

  const onClickMovie = (item) =>{
    console.log('click');
    navigate((`/Movies/${item.title}`),{
      state: item
    })
  } 

  return (
    <div className="app-container">
      <div className="list_container">
        {
          movies.results.map((item) => {
            return (
              <div key={item.id} onClick={() => onClickMovie(item)}>
              <Movie
                key={item.id}
                title={item.title}
                poster={item.poster_path}
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

export default Movies