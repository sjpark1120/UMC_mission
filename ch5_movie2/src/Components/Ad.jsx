import React from 'react'
import adimg from '../ad.svg'
function Ad({ adflag }) {
  return (
    <>
      {adflag && <img src={adimg} alt='adimg' style={{width: "100%"}} />}
    </>
  )
}
export default Ad