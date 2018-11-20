export const REQUEST_QUOTES = 'quotes/REQUEST_QUOTES';
export const RECEIVE_QUOTES = 'quotes/RECEIVE_QUOTES';

const initialState = {
    quote: '',
};


export default(state=initialState, action)=>{

    switch (action.type) {
    case REQUEST_QUOTES:
        return { ...state, loading: true };
    case RECEIVE_QUOTES:
        return { ...state, quote:action.quote ,loading: false };
    default:
        return state;
    }


}

export const requestQuotes = () => ({
    type: REQUEST_QUOTES,
    quote: '',
});
export const receivedQuotes = cat => ({
    type: RECEIVE_QUOTES,
    quote: cat,
});
export function fetchQuotes() {
    return function (dispatch) {
        dispatch(requestQuotes());
        return fetch('https://api.tronalddump.io/random/quote')
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
               dispatch(receivedQuotes(json));
            },
                 );
    };
}
