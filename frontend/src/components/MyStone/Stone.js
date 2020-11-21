import './MyStone.scss';
import { withRouter } from 'react-router-dom';

function Stone({ stoneData }) {
    return (
        <div className="stone">
            <div className="image-area">
                <img src={stoneData.stoneDataImageUrl} alt="image"/>
            </div>
        </div>
    );
}

export default withRouter(Stone);