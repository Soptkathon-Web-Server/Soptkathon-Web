import axios from 'axios';

const url = '얍';

const getMyStones = async () => {
    try{
        const { data } = await axios.get(`${url}/`);
        console.log('[SUCCESS] GET My Stones', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET My Stones', e);
        throw e;
    }
}

const getOneStone = async (id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        console.log('[SUCCESS] GET One Stone', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET One Stone', e);
        throw e;
    }
};

export { getMyStones, getOneStone };