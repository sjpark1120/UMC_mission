import React from 'react'
import { movies } from '../../movieDummy'
import Movie from '../Movie/Movie'

export default function Movies() {
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
  )
}
