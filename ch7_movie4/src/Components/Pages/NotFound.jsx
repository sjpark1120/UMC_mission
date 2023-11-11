import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not_found'>
    <h1>해당 페이지를 찾지 못했습니다.</h1>
    <div className='not_found_text'>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
    <Link to="/" className='go_main'>메인 페이지로 이동</Link>
    </div>
  )
}
