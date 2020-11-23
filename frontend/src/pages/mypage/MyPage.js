import Logo from '../../asset/icon/img_logo.png'
import background from '../../asset/icon/mypage.jpg'
import './Mypage.scss';

const MyPage = () => {

    return (
        <div class = "outer">
            <a href="http://localhost:3000/popup">
            <img className="logo" src={Logo} alt="Arrow image"/>
            <img className="background" src={background} alt="Arrow image"/>
            </a>
        </div>
    ) ;

}

export default MyPage;