import './MyStoneList.scss'
import React from 'react';
import { useEffect, useState } from 'react';
import { getMyStones } from '../../lib/mystoneAPI';
import Stone from '../../components/Stone';

function MyStoneList({ history, match }) {
    const [ stonesState, setStonesState ] = useState({
        status: 'idle',
        stones: null,
    });

    useEffect(() => {
        (async () => {
            setStonesState({ status: 'pending', stones: null });
            try {
                const result = await getMyStones();
                setTimeout(() => setStonesState({ status: 'resolved', stones: result }), 800);
            } catch (e) {
                setStonesState({ status: 'rejected', stones: null });
            }
        })();
    }, []);

    switch (stonesState.status) {
        case 'pending':
            return ;
        case 'rejected':
            return <div>데이터 로딩 실패</div>;
        case 'resolved':
            return (
                <div className="stones-list">
                    {stonesState.stones.map((stones, i) =><Stone key={"stone-" + i} stoneData={stones}/>)}
                </div>
            );
        case 'idle':
        default:
            return <div></div>
    }
}

export default MyStoneList;