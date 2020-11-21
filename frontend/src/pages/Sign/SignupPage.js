import './Signup.scss'
import React, { useState } from 'react';

const SignupPage = () => {
  const [password,setPassword] = useState('');
  const [passwordCheck,setPasswordCheck] = useState('');
  const [lake,setLake] = useState('');
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  }
  const onChangeLake = (e) => {
    setLake(e.target.value);
  }
  return (
    <div class = "outer">
    <div class="container"></div>
        <div class = "left">
            <div class = "content">
                <div class = "title">오늘의 돌멩이를 나만의 호수에 쌓아보세요.</div>
                <div class = "center">
                    <form class = "form">
                        <div><input class="inputbox" type="text" onChange={onChangeLake} value={lake} placeholder="호수의 이름"/></div>
                        <div><input class="inputbox" type="text" onChange={onChangePassword} value={password} placeholder="비밀번호"/></div>
                        <div><input class="inputbox" type="text" onChange={onChangePasswordCheck} value={passwordCheck}placeholder="비밀번호 확인"/></div>
                    </form>
                    <button class = "loginBtn">내 호수 생성하기</button>
                </div>
            </div>
        </div>
      </div>
  );
}

export default SignupPage;