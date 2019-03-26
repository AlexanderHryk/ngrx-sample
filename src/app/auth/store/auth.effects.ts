import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import * as AuthActions from './auth.actions';
import { map, switchMap, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../auth.module';

@Injectable()
export class AuthEffects {

    @Effect()
    loginEffect$ = this._actions$.pipe(
        ofType(AuthActions.LOGIN),

        map((action: AuthActions.LoginAction) => {
            return action.payload;
        }),

        switchMap((payload: { email: string, password: string }) => {
            return this._httpClient.post(`${this.API_URL}/login`, {
                email: payload.email,
                password: payload.password
            }).pipe(
                catchError(err => {
                    return of({ token: null, error: true, status: err.status });
                })
            );
        }),

        tap((response: { token: string, error: boolean, status: number }) => {
            if (!response.error) {
                localStorage.setItem('token', response.token);
            }
        }),

        mergeMap((response: { token: string, error: boolean, status: number }) => {
            return [
                {
                    type: AuthActions.SET_TOKEN,
                    payload: response.token
                },
                {
                    type: AuthActions.SET_INCORRECT_EMAIL_OR_PASSWORD,
                    payload: response.error && (response.status === 403)
                }
            ];
        })
    );

    @Effect()
    logoutEffect$ = this._actions$.pipe(
        ofType(AuthActions.LOGOUT),

        switchMap(() => {
            return this._httpClient.post(`${this.API_URL}/logout`, {})
                .pipe(
                    catchError(err => {
                        return of({});
                    })
                );
        }),

        tap(() => {
            localStorage.removeItem('token');
        }),

        map(() => {
            return {
                type: AuthActions.SET_TOKEN,
                payload: null
            };
        })
    );

    constructor(private _actions$: Actions,
        private _httpClient: HttpClient,
        @Inject(API_URL) public readonly API_URL: string) {

    }
}