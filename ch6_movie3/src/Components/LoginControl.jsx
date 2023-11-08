import React, { useState } from 'react'

function LoginControl() {
	const [isLoggedin, setIsLoggedin] = useState(false);
	const handleLoginClick = () => {
		setIsLoggedin((prev) => !prev)
	};
  return (
	<>
	{isLoggedin ? <span className='login_text'><button className='login_btn' onClick={handleLoginClick}>로그아웃</button>환영합니다!</span> : <span className='login_text'><button className='login_btn' onClick={handleLoginClick}>로그인</button>로그인 해주세요!</span>}
    </>
  )
}


export default LoginControl