import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import './StartPage.scss';
const Background = styled.div`
    width:100%;
    height:3123px;
    transform:${props => `translateY(-${props.transy}px)`};
    background-image:linear-gradient(to bottom, #00B2FF, #052C3D);
    position:absolute;
    transition:0.5s;
`
const StyledTemplate = styled.div`
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:auto;
    height:auto;
`
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`
const QustionContainer = styled.div`
    width: 71.8rem;
    height: 47.2rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
    @media only screen and (max-width: 718px) {
        width:95vw;
  }   
`
const BlankTop = styled.div`
    width:100%;
    margin-top:${props => props.margin}rem;
`
const Strong = styled.strong`
    font-size:3.2rem;
    text-align: center;
    font-weight: bold;
`
const QustionTitle = styled.span`
    font-size:3.2rem;
    text-align: center;
`
const Button = styled.button`
    background:  #0066FF;
    border-radius: 30px;
    font-size:3rem;
    font-weight:bold;
    color: white;
    border: none;
    padding: 6px 55px;
    &:disabled{
        background-color:#C4C4C4;
    }
`
const InputOne = styled.input`
    width: 4rem;
    height: 4rem;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    background-color:  #F4F5F7;
    position: relative;
    &::before{
        content:'1';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        border: 1px solid black;
        text-align:center;
        line-height:1.5;
    }
    &:checked{
        color: #d6d6d6;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    outline: none;
    border: solid 7px #0066FF;
    background-color: rgba(6, 49, 135, 0.1);
    position: relative;
    margin-right: 2.4rem;
    box-shadow:0 0 10px #B4D2FE;

    }
    &:checked&::before{
        content:'1';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        text-align:center;
        line-height:1.5;
        color:#0066FF;
        background-color:white;
        border:none;
    }
`
const InputTwo = styled.input`
    width: 4rem;
    height: 4rem;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    background-color:  #F4F5F7;
    position: relative;
    &::before{
        content:'2';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        border: 1px solid black;
        text-align:center;
        line-height:1.5;
    }
    &:checked{
        color: #d6d6d6;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    outline: none;
    border: solid 7px #0066FF;
    background-color: rgba(6, 49, 135, 0.1);
    position: relative;
    margin-right: 2.4rem;
    box-shadow:0 0 10px #B4D2FE;

    }
    &:checked&::before{
        content:'2';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        text-align:center;
        line-height:1.5;
        color:#0066FF;
        background-color:white;
        border:none;
    }
`
const InputThree = styled.input`
    width: 4rem;
    height: 4rem;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    background-color:  #F4F5F7;
    position: relative;
    &::before{
        content:'3';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        border: 1px solid black;
        text-align:center;
        line-height:1.5;
    }
    &:checked{
        color: #d6d6d6;
    appearance: none;
    border-radius: 100%;
    margin-right: 0.1rem;
    outline: none;
    border: solid 7px #0066FF;
    background-color: rgba(6, 49, 135, 0.1);
    position: relative;
    margin-right: 2.4rem;
    box-shadow:0 0 10px #B4D2FE;

    }
    &:checked&::before{
        content:'3';
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        font-size: 1.6rem;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 100%;
        text-align:center;
        line-height:1.5;
        color:#0066FF;
        background-color:white;
        border:none;
    }
`
const StartPage = () => {


    const [transy, setTransy] = useState(0);
    const [qustionNumber,setQustionNumber] = useState(0);
    const [birthYear,setBirthYear] = useState(0);
    const [birthMonth,setBirthMonth] = useState(0);
    const [birthDay,setBirthDay] = useState(0);
    const [house,setHouse] = useState();
    const [randomOne,setRandomOne] = useState();
    const [randomTwo,setRandomTwo] = useState();
    const [randomThree,setRandomThree] = useState();
    const [randomFour,setRandomFour] = useState();
    const [randomFive,setRandomFive] = useState();
    const [randomQustion, setRandomQustion] = useState([])
    useEffect(() => {

        (async () => {
            try {
                const result = await Axios.get('http://13.209.144.115:3030/api/questions/short');
                setRandomQustion(result);
                console.log(result)
            } catch (e) { 
            }
        })();
    }, []);

    const onClickHandler = () => {

        if(transy < 2000){
            setTransy(transy+400);
            setQustionNumber(qustionNumber+1);
        }else{
            setTransy(2000);
        }
    }
    const HouseClick=(e)=> {
        setHouse(e.target.value);
        console.log(house)
    }
    const RandomOneChange = (e) => {
        setRandomOne(e.target.value);
    }
    const RandomTwoChange = (e) => {
        setRandomTwo(e.target.value);
    }
    const RandomThreeChange = (e) => {
        setRandomThree(e.target.value);
    }
    const RandomFourChange = (e) => {
        setRandomFour(e.target.value);
    }
    const RandomFiveChange = (e) => {
        setRandomFive(e.target.value);
    }
    const ChangeYear = (e) => {
        let value = e.target.value;
        if(value.length <= 2) setBirthYear(value)
    }
    const ChangeMonth = (e) => {
        let value = e.target.value;
        if(value.length <= 2) setBirthMonth(value)
    }
    const ChangeDay = (e) => {
        let value = e.target.value;
        if(value.length <= 2) setBirthDay(value)
    }
    let birthCount = birthYear + birthMonth + birthDay;
    if(qustionNumber === 0){
        return(
            <div>
                <Background transy={transy}/>
                    <StyledTemplate>
                        <Wrap>
                        <QustionContainer>
                            <QustionTitle><Strong>나의 생일</Strong>은 언제인가요?</QustionTitle>
                            <BlankTop margin='14.2'/>
                            <div style={{width:'40rem', borderBottom:'1px solid black',display:"flex",justifyContent:'center'}}>
                                <input type='number' style={{width:'4.7rem',border:'none',fontSize:'3.2rem',appearance:'none'}} placeholder='95' minLength='2' maxLength='2' value={birthYear===0 ? undefined :birthYear}required onChange={ChangeYear}/>
                                <span style={{lineHeight:'2', margin:'0 10px',fontSize:'3.2rem'}}> - </span>
                                <input type='number' style={{width:'4.7rem',border:'none',fontSize:'3.2rem',appearance:'none'}} placeholder='07' minLength='2' maxLength='2' value={birthMonth===0 ? undefined :birthMonth}required onChange={ChangeMonth}/>
                                <span style={{lineHeight:'2', margin:'0 10px',fontSize:'3.2rem'}}> - </span>
                                <input type='number' style={{width:'4.7rem',border:'none',fontSize:'3.2rem',appearance:'none'}} placeholder='09' minLength='2' maxLength='2' value={birthDay===0 ? undefined :birthDay}required onChange={ChangeDay}/>
                            </div>
                        </QustionContainer>
                        <BlankTop margin='3.9'/>
                        {birthCount.length===6 ?
                            <Button onClick={onClickHandler} >던지기</Button>
                         :               
                             <Button onClick={onClickHandler} disabled >던지기</Button>
                        }
                        </Wrap>
                    </StyledTemplate>
    
            </div>
        )
    }else if(qustionNumber===1){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle><Strong>당신의 집</Strong>은 어떤 모습인가요?</QustionTitle>
                        <BlankTop margin='7.5'/>
                        <div style={{width:'40rem', display:"flex",alignItems:'center',flexDirection:'column'}}>
                            <div style={{display:'block'}}>
                                <div>
                                    <InputOne style={{marginRight:'1.2rem'}} type='radio' name='qustion2' value='1' onClick={HouseClick} id='1'/><label style={{fontSize:'3.2rem', fontWeight:'500',position:'relative',top:'-7px'}}htmlFor='1'>오래된 한옥</label>
                                </div>
                                <BlankTop margin='2'/>
                                <div>
                                   <InputTwo style={{marginRight:'1.2rem'}} type='radio' name='qustion2' value='2' onClick={HouseClick} id='2'/><label style={{fontSize:'3.2rem', fontWeight:'500',position:'relative',top:'-7px'}} htmlFor='2'>회색빛 모던 주택가</label>
                                </div>
                                <BlankTop margin='2'/>
                                <div>
                                  <InputThree style={{marginRight:'1.2rem'}} type='radio' name='qustion2' value='3' onClick={HouseClick} id='3'/><label style={{fontSize:'3.2rem', fontWeight:'500',position:'relative',top:'-7px'}} htmlFor='3'>자연속 캠핑카</label>
                                </div>
                            </div>                          
                        </div>
                        <BlankTop margin='5.5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { house ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }else if(qustionNumber===2){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle>요즘 내가 소속감을 느끼는 곳이 있나요?</QustionTitle>
                        <BlankTop margin='5'/>
                            <textarea className='notes' value={randomOne} onChange={RandomOneChange}></textarea>
                        <BlankTop margin='5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { randomOne ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }else if(qustionNumber===3){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle>요즘 내가 소속감을 느끼는 곳이 있나요?</QustionTitle>
                        <BlankTop margin='5'/>
                            <textarea className='notes' value={randomTwo} onChange={RandomTwoChange}></textarea>
                        <BlankTop margin='5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { randomTwo ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }else if(qustionNumber===4){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle>요즘 내가 소속감을 느끼는 곳이 있나요?</QustionTitle>
                        <BlankTop margin='5'/>
                            <textarea className='notes' value={randomThree} onChange={RandomThreeChange}></textarea>
                        <BlankTop margin='5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { randomThree ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }else if(qustionNumber===5){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle>요즘 내가 소속감을 느끼는 곳이 있나요?</QustionTitle>
                        <BlankTop margin='5'/>
                            <textarea className='notes' value={randomFour} onChange={RandomFourChange}></textarea>
                        <BlankTop margin='5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { randomFour ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }else if(qustionNumber===6){
        return(
            <div>
            <Background transy={transy}/>
                <StyledTemplate>
                    <Wrap>
                    <QustionContainer>
                        <QustionTitle>요즘 내가 소속감을 느끼는 곳이 있나요?</QustionTitle>
                        <BlankTop margin='5'/>
                            <textarea className='notes' value={randomFive} onChange={RandomFiveChange}></textarea>
                        <BlankTop margin='5'/>
                    </QustionContainer>
                    <BlankTop margin='3.9'/>
                    { randomFive ?
                        <Button onClick={onClickHandler} >던지기</Button>
                     :               
                         <Button onClick={onClickHandler} disabled >던지기</Button>
                    }
                    </Wrap>
                </StyledTemplate>

        </div>    
        )
    }

}

export default StartPage;