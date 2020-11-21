import './Login.scss'
import React from 'react';

const LoginPage = () => {
  return (
    <div class = "outer">
      <div class="container"></div>
        <div class = "left">
            <div class = "content">
                <div class = "title">내 호수로 가기 위해, 로그인</div>
                    <form class = "form">
                        <div><input class="inputbox" type="text" placeholder="호수의 이름"/></div>
                        <div><input class="inputbox" type="text" placeholder="비밀번호"/></div>
                        <div><input class="inputbox" type="text" placeholder="비밀번호 확인"/></div>
                    </form>
                    <button class = "loginBtn">로그인</button>
            </div>
        </div>
    </div>
  );
}

export default LoginPage;