export const LOGIN='account/LOGIN';;
export const LOGIN_REQUESTED='account/LOGIN_REQUESTED';
export const LOGOUT='account/LOGOUT';


const initialState = {
    username: "",
    isLoggedIn: false,
    isAuthenticating:false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUESTED: 
        return {
            ...state,
            username: action.username,
            isAuthenticating: true
        };
    case LOGIN:
        return{
            ...state,
            isAuthenticating:false,
            isLoggedIn:true
        };
    case LOGIN_SUCCESS:
        return{
            ...state,
            isAuthenticating:false,
            isLoggedIn:true
        };
    case LOGOUT:
        return{
            ...state,
            isAuthenticating:false,
            isLoggedIn:false
        };
    default:
        return state;
    }
};
export const login = username => ({
    type:LOGIN,
    username:username
});
export const requestLogin = ()=> ({
    type:LOGIN_REQUESTED,
});



// mimicking an async API login endpoing
const fakeLoginRequest = username =>
      new Promise((resolve, reject) =>
                  setTimeout(() => {
                      username === "foo" ? resolve(username) : reject("No such user");
                  }, 1000),
                 );

// handling async login 
export const doLogin = username => async dispatch => {
    return function(dispatch){
        dispatch(requestLogin());
        return fetch(''+username)
            .then(
                response=> response.json(),
                error=> console.log(error),
            )
            .then((json)=>{
                
            })
    }
 };
