export const REQUEST_FUCKS = 'fuck/REQUEST_FUCKS';
export const RECEIVE_FUCKS = 'fuck/RECEIVE_FUCKS';

const initialState = {
    fuck: '',
}


export default(state=initialState, action)=>{

    switch (action.type) {
    case REQUEST_FUCKS:
        return { ...state, loading: true };
    case RECEIVE_FUCKS:
        return { ...state, fuck:action.fuck ,loading: false };
    default:
        return state;
    }


}

export const requestFucks = () => ({
    type: REQUEST_FUCKS,
    fuck: '',
});
export const receivedFucks = fuck => ({
    type: RECEIVE_FUCKS,
    fuck: fuck,
});
export function fetchFucks() {
    return function (dispatch) {
        dispatch(requestFucks());
        const request = new Request('http://www.foaas.com/bag/:anus', {
            headers: new Headers({
                'Accept': 'application/json'
            })
        })

        return fetch(request)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((fuck) => {
                console.log(fuck);
               dispatch(receivedFucks(fuck));
            },
                 );
    };
}
