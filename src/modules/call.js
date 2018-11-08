export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


export default(state={}, action)=>{

    switch (action.type) {
    case SELECT_CHANNEL:
        return { ...state, channel: action.channel };
    case REQUEST_POSTS:
        return { ...state, loading: true };
    case RECEIVE_POSTS:
        return { ...state, json: {'bob':'anus'}, loading: false };
    default:
        return state;
    }


}


export const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});
export const requestPosts = () => ({
    type: REQUEST_POSTS,
});
export const receivedPosts = json => ({
    type: RECEIVE_POSTS,
    json: json,
});
export function fetchPosts(channel) {
    return function (dispatch) {
        dispatch(requestPosts());
        return fetch(`https://reddit.com/r/singapore.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedPosts(json));
            },
                 );
    };
}
