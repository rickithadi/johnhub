export const REQUEST_CATS = 'cats/REQUEST_CATS';
export const RECEIVE_CATS = 'cats/RECEIVE_CATS';

const initialState = {
    cat: '',
}


export default(state=initialState, action)=>{

    switch (action.type) {
    case REQUEST_CATS:
        return { ...state, loading: true };
    case RECEIVE_CATS:
        return { ...state, cat:action.cat ,loading: false };
    default:
        return state;
    }


}

export const requestCats = () => ({
    type: REQUEST_CATS,
    cat: '',
});
export const receivedCats = cat => ({
    type: RECEIVE_CATS,
    cat: cat,
});
export function fetchCats() {
    return function (dispatch) {
        dispatch(requestCats());
        return fetch('https://placekitten.com/g/200/300')
            .then(
                response => response.blob(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                let objectURL = URL.createObjectURL(json);
                let src = objectURL; 
                dispatch(receivedCats(src));
            },
                 );
    };
}
