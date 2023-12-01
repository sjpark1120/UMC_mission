import React, { useEffect, useState } from 'react'
import Content from '../Movie/Content'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Movies() {
  const [movieList, setMovieList] = useState('');
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week',
    params: {language: 'ko'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGIyNDI3NGMwM2RiYWE3YjI1M2UwZmQyYTMwZTc1OSIsInN1YiI6IjY1MjAyN2Y5M2QzNTU3MDBhZGI2MTc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3IY1FfMm4yPKRXWZQ02B3r2-uNRiV3-dT-wf1XkBano'
    }
  };
  useEffect(() => {
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setMovieList(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });

  },[]);
  const navigate = useNavigate();
  const baseurl = "https://image.tmdb.org/t/p/w1280"
  const onClickMovie = (item) =>{
    console.log('click');
    navigate((`/Movies/${item.title}`),{
      state :{
        key : item.id,
        title : item.title,
        poster : baseurl+item.poster_path,
        vote : item.vote_average,
        overview : item.overview,
      }
    })
  } 

  return (
    <div className="app-container">   
      <div className="list_container">
        {
          movieList &&
          movieList.results.map((item) => {
            return (
              <div key={item.id} onClick={() => onClickMovie(item)}>
              <Content
                key={item.id}
                title={item.title}
                poster={baseurl+item.poster_path}
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