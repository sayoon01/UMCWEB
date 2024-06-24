import React from 'react'
import {useNavigate} from 'react-router-dom'

function Profile() {
  let navigate = useNavigate();
  return (
    <div>Profile 페이지입니당 <button onClick={()=>{navigate('/');}}>누르면 홈으로 이동합니다!</button></div>
  );
}

export default Profile