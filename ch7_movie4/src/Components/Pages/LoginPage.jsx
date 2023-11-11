import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function LoginPage({ isLoggedin, setIsLoggedin }) {
    const email_format = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const password_format = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/;

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value);
        if(email_format.test(e.target.value)){
            setCheckEmail(true)
        }else{
            setCheckEmail(false)
        }
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
        if(password_format.test(e.target.value)){
            setCheckPassword(true)
        }else{
            setCheckPassword(false)
        }
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(`submit ${email} ${password}`)
        setIsLoggedin(true);
        navigate('/')
    }
  return (
    <>
      <div className='login_container'>
        <h1 className='login_title'>이메일과 비밀번호를 입력해주세요</h1>
        <form onSubmit={onSubmit}>
            <label className='login_label' htmlFor='input_email'>이메일 주소</label>
            <input className='login_input' id='input_email' value={email} onChange={handleEmail}/>
            {checkEmail ? null : <div className='check_text'>올바른 이메일을 입력해주세요</div> }
            <label className='login_label' htmlFor='input_password'>비밀번호</label>
            <input  className='login_input' type='password' value={password} onChange={handlePassword} placeholder='영문, 숫자, 특수문자 포함 8자 이상' id='input_password'/>
            {checkPassword ? null : <div className='check_text'>올바른 비밀번호를 입력해주세요</div>}
            <input className='loginpage_btn' type="submit" value='확인' disabled={!(checkEmail && checkPassword )}/>
        </form>
      </div>
    </>
  )
}
export default LoginPage