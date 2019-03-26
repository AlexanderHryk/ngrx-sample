import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import * as ItemsActions from './items.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../items.module';
import { Item } from '../item.model';

@Injectable()
export class ItemsEffects {

    @Effect()
    requestFetchItemsEffect$ = this._actions$.pipe(
        ofType(ItemsActions.REQUEST_FETCH_ITEMS),

        switchMap(() => {
            return this._httpClient.get<Item[]>(`${this.API_URL}/items`).pipe(
                catchError(err => {
                    return of([]);
                })
            );
        }),

        map((items: Item[]) => {
            return {
                type: ItemsActions.SET_ITEMS,
                payload: items
            };
        })
    );

    @Effect()
    requestDeleteItemEffect$ = this._actions$.pipe(
        ofType(ItemsActions.REQUEST_DELETE_ITEM),

        map((action: ItemsActions.RequestDeleteItemAction) => {
            return action.payload;
        }),

        switchMap((id: number) => {
            return this._httpClient.delete<Item>(`${this.API_URL}/items/${id}`)
                .pipe(
                    catchError(err => {
                        return of(null);
                    })
                );
        }),

        map((item: Item) => {
            return {
                type: ItemsActions.DELETE_ITEM,
                payload: item
            };
        })
    );

    @Effect()
    requestAddItemEffect$ = this._actions$.pipe(
        ofType(ItemsActions.REQUEST_ADD_ITEM),

        map((action: ItemsActions.RequestAddItemAction) => {
            return action.payload;
        }),

        switchMap((item: Item) => {
            return this._httpClient.post<Item>(`${this.API_URL}/items`, {
                name: item.name
            }).pipe(
                catchError(err => {
                    return of(null);
                })
            );
        }),

        map((item: Item) => {
            return {
                type: ItemsActions.ADD_ITEM,
                payload: item
            };
        })
    );

    @Effect()
    requestSearchByNameEffect$ = this._actions$.pipe(
        ofType(ItemsActions.REQUEST_SEARCH_BY_NAME),

        map((action: ItemsActions.RequestSearchByName) => {
            return action.payload
        }),

        switchMap((name: string) => {
            return this._httpClient.get<Item[]>(`${this.API_URL}/items`, {
                params: { name }
            }).pipe(
                catchError(err => {
                    return of([]);
                })
            );
        }),

        map((items: Item[]) => {
            return {
                type: ItemsActions.SET_ITEMS,
                payload: items
            };
        })
    );

    constructor(private _actions$: Actions,
        private _httpClient: HttpClient,
        @Inject(API_URL) public readonly API_URL: string) {

    }
}