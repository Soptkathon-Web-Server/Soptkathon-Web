import FirstStoneIcon from '../../asset/icon/throw_stone_icon.svg';
import ArrowImg from '../../asset/icon/arrow_img.svg';
import StoneImg from '../../asset/icon/stone_img.svg';
import LandingImg from '../../asset/icon/landing_img.png'

import Axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FirstStoneIcon from '../../asset/icon/first_storn_icon.svg';
import GotoPondIcon from '../../asset/icon/gotopond_icon.svg';
import { initUser } from '../../_actions/user_action';

import './LandingPage.scss';

const LandingPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initUser()).then(
            response => console.log(response)
        )

    }, []);

    return ( 
        <div>
            <div className="css-typing">
                <p>
                나도 나를 잘 모르겠을 때, 나에게 몰입하는 시간-
                </p>
                <p>
                매일 똑같이 지루한 일기 말고,<br /> 나를 기록하고 깊게 돌아볼 수 있는 방법.
                </p>
                <p>
                가볍게 호수에 돌멩이를 퐁당 던지듯,
                </p>
            </div>

            <img className="landing-landingimg" src={LandingImg} alt="landing image"/>

            <img className="landing-arrow" src={ArrowImg} alt="Arrow image"/>

            <div className="landing-centertext">
                <p>오직 나만의 호수에,</p>
                <p style={{fontWeight:'bold'}}> 퐁당</p>
            </div>

            <img className="landing-stoneimg" src={StoneImg} alt="stone image"/>
            
            <div className="landing-bnt">
                
                <div className="landing-bnt-box"></div>
                    <img className="first-button" src={FirstStoneIcon} alt="my image"/>
                <p className="landing-buttontext">이미 내 호수가 있다면?</p>
            </div>
        </div>
    );
}

export default LandingPage;