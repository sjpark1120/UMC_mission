import React, { useState } from 'react';
import Axios from 'axios';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [loginCheck, setLoginCheck] =useState(false);
  const [loading, setLoading] =useState(false);
  const BaseURL = "http://localhost:8000";

  const onChangeId = (e) => {
    setId(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onLoginSubmit = async(e) => {
    e.preventDefault();
    if(password === '' || id === ''){
      alert('아이디와 비밀번호 칸은 비워둘 수 없습니다!');
      return ;
    }
    Axios({
      url: BaseURL+'/user/login',
      method: 'post',
      data: {
        id: id,
        pw: password,
      }
    })
      .then(function (response) {
        // 성공한 경우 실행
        setTimeout(() => {
          setLoading(false);
          setLoginCheck(true);
          console.log(response.data.result.userId)
          localStorage.clear();
          localStorage.setItem('id', response.data.result.userId);
          localStorage.setItem('token', response.data.result.AccessToken);
        }, 1500); //로딩끝
      })
      .catch(function (error) {
        // 에러인 경우 실행
        setTimeout(() => {
          setLoading(false);
          setErrMessage(`${error.response.data.message}`)
        }, 1500);//로딩끝
      })
      setLoading(true); //로딩시작
  }

  const onClciklogout = () =>{
    setLoginCheck(false);
  }
  return (
    <div className='login_container'>
      {loginCheck ? 
      <>
        <h1>마이페이지</h1><div className='welcome'>{id}님 환영합니다.</div><button className='btn' onClick={onClciklogout}>로그아웃</button>
      </> 
      :
      <>
        <form onSubmit={onLoginSubmit}>
          <h1>로그인</h1>
          <div>
            <label className='id_label'>아이디</label>
            <input value={id} onChange={onChangeId} />
          </div>
          <div>
            <label>비밀번호</label>
            <input value={password} type='password' onChange={onChangePassword}/>  
          </div>
          <div className='loading'>{loading ? <div>Loading...</div> : (errMessage ? errMessage : null)}</div>
          <input className='btn' type='submit' disabled={loading} />
        </form>
        </>
      }
    </div>
  )
}
