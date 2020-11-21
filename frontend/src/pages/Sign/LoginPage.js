import './Login.scss'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_action';
import img from '../../assets/login.svg';
import logo from '../../assets/img_logo.svg';

const LoginPage = () => {
  const dispatch = useDispatch();

  const[lake,setLake] = useState('');
  const[password,setPassword] = useState('');
  const onChangeLake = (e) =>{
    setLake(e.target.value);
  }
  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }

  const toSubmit = () => {
    let variable = {
      nickname:lake,
      password:password
    }
    dispatch(loginUser(variable)).then(
      response => {
        if(response.data.success===false){
          alert(response.data.message)
        }
      }
    )
  }
  return (
    <div class = "outer">
      <img class="logo" src ={logo}/>
      <img class="pic" src ={img}/>
        <div className = "left">
            <div className = "content">
                <div className = "title">내 호수로 가기 위해, 로그인</div>
                    <form className = "form" toSubmit={toSubmit}>
                        <div><input className="inputbox" type="text" placeholder="호수의 이름" value={lake} onChange={onChangeLake}/></div>
                        <div><input className="inputbox" type="text" placeholder="비밀번호" value={password} onChange={onChangePassword} minLength='6'/></div>
                    </form>
                <button className = "loginBtn" toSubmit={toSubmit}>로그인</button>
            </div>
        </div>
    </div>
  );
  
}

export default LoginPage;