import './MyStoneDetail.scss';
import { useState, useEffect } from 'react';
import { getOneStone } from '../../lib/mystoneAPI';
import MyStoneModal from '../../components/MyStoneModal';

//모달창은 컴포넌트로 해야하는건가?
function MyStoneDetail({ match }) {

    const [ oneStoneState, setOneStoneState ] = useState({
        status: 'idle',
        stone: null
    });

    useEffect(() => {
        (async () => {
            try {
                setOneStoneState({ status: 'pending', stone: null });
                const data = await getOneStone(match.params.id);
                setOneStoneState({ status: 'resolved', stone: data });
            } catch (e) {
                setOneStoneState({ status: 'rejected', stone: null});
            }
        })();
    }, [match.params.id]);  //id값 변경시마다 실행

    switch (oneStoneState.status) {
        case 'pending':
            return ;
        case 'rejected':
            return <h1>해당 기록이 없습니다</h1>;
        case 'resolved':
            return <MyStoneModal stoneData={data.data}/>;
        case 'idle':
        default: 
            return <div></div>
    }
}

export default MyStoneDetail;