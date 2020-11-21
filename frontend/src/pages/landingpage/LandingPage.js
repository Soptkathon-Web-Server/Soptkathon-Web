import FirstStoneIcon from '../../asset/icon/first_storn_icon.svg';
import GotoPondIcon from '../../asset/icon/gotopond_icon.svg';
import './LandingPage.scss';

const LandingPage = () => {

    return ( 
        <>
            <div class="css-typing">
                <p>
                나도 나를 잘 모르겠을 때, 나에게 몰입하는 시간-
                </p>
                <p>
                매일 똑같이 지루한 일기 말고, 나를 기록하고 깊게 돌아볼 수 있는 방법.
                </p>
                <p>
                가볍게 호수에 돌멩이를 퐁당 던지듯,
                </p>
            </div> 

            <div class="landing-centertext" >
                <p>오직 나만의 호수에,</p>
                <p style={{fontWeight:'bold'}}> 퐁당</p>
            </div>
            
            <div class="landing-bnt">
                <div class="landing-bnt-box">
                    <p class="landing-buttontext">처음 시작한다면?</p>
                    <img src={FirstStoneIcon} alt="my image"/>
                </div>
                   
                <div class="landing-bnt-box">
                <p class="landing-buttontext">이미 내 호수가 있다면?</p>
                <img src={GotoPondIcon} alt="my image"/>
                </div>
            </div>

        </>
    );
}

export default LandingPage;