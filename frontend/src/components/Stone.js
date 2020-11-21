import './Stone.scss';
import { withRouter } from 'react-router-dom';

function Stone({ stoneData }) {
    return (
        <div className="stone" draggable onClick={ () => history.push(`/my-stone/${stoneData.id}`) }>
            <div className="image-area">
                <img src={stoneDataImageUrl} alt="image"/>
            </div>
        </div>
    );
}

export default withRouter(Stone);