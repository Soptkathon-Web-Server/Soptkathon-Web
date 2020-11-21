import './Stone.scss';
import { withRouter } from 'react-router-dom';

function Stone({ stoneData, history }) {
    return (
        <div className="ModalBackGround">
        <div className="ModalWrap">
            <div className="mystone" draggable onClick={ () => history.push(`/my-stone/${stoneData.id}`) }>
                <div className="image-area">
                    <img src={stoneData.imageUrl} alt="image"/>
                </div>
                    <div className="card__content card__text name">{stoneData.qustion1}</div>
                    <div className="card__content card__text instagram">{stoneData.answer1}</div>
                    <div className="card__content card__text name">{stoneData.qustion2}</div>
                    <div className="card__content card__text instagram">{stoneData.answer2}</div>
                    <div className="card__content card__text name">{stoneData.qustion3}</div>
                    <div className="card__content card__text instagram">{stoneData.answer3}</div>
                    <div className="card__content card__text name">{stoneData.qustion4}</div>
                    <div className="card__content card__text instagram">{stoneData.answer4}</div>
                    <div className="card__content card__text name">{stoneData.qustion5}</div>
                    <div className="card__content card__text instagram">{stoneData.answer5}</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Stone);