import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginControl2({ isLoggedin, setIsLoggedin }) {
    const navigate = useNavigate()
	// const [isLoggedin, setIsLoggedin] = useState(false);
	const handleLoginClick = () => {
		navigate('/Login')
	};
    const hadleLogoutClick = () => {
        setIsLoggedin(false);
    }
  return (
	<>
	{isLoggedin ? <span className='login_text'><button className='login_btn' onClick={hadleLogoutClick}>로그아웃</button>환영합니다!</span> : <span className='login_text'><button className='login_btn' onClick={handleLoginClick}>로그인</button>로그인 해주세요!</span>}
    </>
  )
}


export default LoginControl2