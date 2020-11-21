import React from 'react';

function Login() {
    return(
        <div>야호2
            <div class = "title">내 호수로 가기 위해, 로그인</div>
            <form>
                <input type="text" placeholder="호수의 이름"/>
                <input type="text" placeholder="비밀번호"/>
                <input type="text" placeholder="비밀번호 확인"/>
            </form>
            <button class = "loginBtn">로그인</button>
        </div>
    )
}

export default Login;