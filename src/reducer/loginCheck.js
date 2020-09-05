const initLoginState = {
    isLogin: 0
}

const LoginReducer = (state = initLoginState, action) => {
    switch (action.type) {
        case 1:
            return {
                isLogin: 1
            }
        case 2:
            return{
                isLogin: 2
            }
        case 0:
            return initLoginState
        default:
            return state
    }
}

export default LoginReducer