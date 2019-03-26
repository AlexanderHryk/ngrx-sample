import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_INCORRECT_EMAIL_OR_PASSWORD = 'SET_INCORRECT_EMAIL_OR_PASSWORD';

export class LoginAction implements Action {
    readonly type = LOGIN;

    constructor(public payload: {
        email: string,
        password: string
    }) { }
}

export class LogoutAction implements Action {
    readonly type = LOGOUT;
}

export class SetTokenAction implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) { }
}

export class SetIncorrectEmailOrPassword implements Action {
    readonly type = SET_INCORRECT_EMAIL_OR_PASSWORD;

    constructor(public payload: boolean) { }
}

export type AuthActions =
    LoginAction |
    LogoutAction |
    SetTokenAction |
    SetIncorrectEmailOrPassword;