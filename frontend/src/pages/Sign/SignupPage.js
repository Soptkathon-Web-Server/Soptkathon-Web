import './Signup.scss'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const SignupPage = () => {
  return (
    <div class = "outer">
    <div class="container"></div>
        <div class = "left">
            <div class = "content">
                <div class = "title">오늘의 돌멩이를 나만의 호수에 쌓아보세요.</div>
                <div class = "center">
                    <form class = "form">
                        <div><input class="inputbox" type="text" placeholder="호수의 이름"/></div>
                        <div><input class="inputbox" type="text" placeholder="비밀번호"/></div>
                        <div><input class="inputbox" type="text" placeholder="비밀번호 확인"/></div>
                    </form>
                    <button class = "loginBtn">내 호수 생성하기</button>
                </div>
            </div>
        </div>
      </div>
  );
}

export default SignupPage;