import './MyStone.scss';
import { withRouter } from 'react-router-dom';

function Stone({ stoneData, history }) {
    return (
        <div className="ModalBackGround">
            <div className="ModalWrap">
                <div className="mystone" draggable onClick={ () => history.push(`/my-stone/${stoneData.id}`) }>
                        <div className="image-area">
                            <img src={stoneData.imageUrl} alt="image"/>
                        </div>
                        <div className="content-area">
                            <div className="stone_question">{stoneData.qustion1}</div>
                            <div className="stone_answer">{stoneData.answer1}</div>
                            <div className="stone_question">{stoneData.qustion2}</div>
                            <div className="stone_answer">{stoneData.answer2}</div>
                            <div className="stone_question">{stoneData.qustion3}</div>
                            <div className="stone_answer">{stoneData.answer3}</div>
                            <div className="stone_question">{stoneData.qustion4}</div>
                            <div className="stone_answer">{stoneData.answer4}</div>
                            <div className="stone_question">{stoneData.qustion5}</div>
                            <div className="stone_answer">{stoneData.answer5}</div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Stone);