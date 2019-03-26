import * as AuthActions from './auth.actions';

export interface AuthState {
    token: string,
    authenticated: boolean,
    incorrectEmailOrPassword: boolean
};

const token = localStorage.getItem('token');

const initialState: AuthState = {
    token: token,
    authenticated: !!token,
    incorrectEmailOrPassword: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): AuthState {
    switch (action.type) {

        case AuthActions.SET_TOKEN: {
            const token = action.payload;

            return {
                ...state,
                token: token,
                authenticated: !!token
            };
        }

        case AuthActions.SET_INCORRECT_EMAIL_OR_PASSWORD: {
            return {
                ...state,
                incorrectEmailOrPassword: action.payload
            };
        }

        default:
            return state;
    }
}