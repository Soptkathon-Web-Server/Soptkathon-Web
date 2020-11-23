import React from 'react';
import './MyPage.scss'
import img from '../../assets/mystone.png';

const MyPage = () => {
  return (
    <div class ="outerrrr">
        <a href ="/mystone/modal"><img id="img" src={img}/></a>
    </div>
  );
}

export default MyPage;