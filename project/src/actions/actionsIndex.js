import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchPlayers = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    axios.get('http://localhost:3333/players')
        .then(res => {
            console.log('from fetchPlayers: DATA', res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('from fetchPlayers: error', err)
            dispatch({ type: FETCH_FAIL, payload: err })
        })
}

export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const postPlayers = (player) => (dispatch) => {
    dispatch({ type: POST_DATA })
    axios
        .post('http://localhost:3333/players', player)
        .then(res => {
            console.log('from postSuccess', res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('from postError', err);
            dispatch({ type: POST_FAIL, payload: err })
        })
}