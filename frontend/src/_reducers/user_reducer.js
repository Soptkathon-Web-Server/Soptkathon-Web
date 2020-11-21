import{INIT_USER,LOGIN_USER,REGISTER_USER, AUTH_USER, LOGOUT_USER,} from '../_actions/types'


export default function (state={}, action) {
    switch (action.type){
        case INIT_USER:
            return{...state,init:action.payload,isAuth:false};
            break;
        
        case LOGIN_USER:
                return {...state,loginSuccess:action.payload};
            break;
        case REGISTER_USER:
                return {...state,register:action.payload};
            break;

        case AUTH_USER:
                return {...state,userData:action.payload};
            break; 
        case LOGOUT_USER:
                return {...state };
        
        default:
            return state;

        
    }
}