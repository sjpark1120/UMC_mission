import React from 'react'
import { Link } from 'react-router-dom'

import LoginControl2 from './LoginControl2'

function Header({ isLoggedin, setIsLoggedin}) {
  return (
    <>
    <div className='navigation'>
      <Link to="/">
        <img className='logo_img'
		  style={{ width: "154px", height: "20px" }}
		  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		  alt="로고"
        />
      </Link>
      <ul className='nav_ul'>
        <li><Link to="/Movies">영화</Link></li>
        <li><Link to="/Tv">TV 프로그램</Link></li>
        <li><Link to="/Celebirity">인물</Link></li>
      </ul>
      <LoginControl2 isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>
    </div>
    </>
  )
}

export default Header