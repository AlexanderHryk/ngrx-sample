import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../comments.module';
import * as CommentsActions from './comments.actions';
import * as ItemsActions from '../../items/store/items.actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Comment } from '../comment.model';
import { Item } from 'src/app/items/item.model';

@Injectable()
export class CommentsEffects {

    @Effect()
    requestFetchCommentsEffect$ = this._actions$.pipe(
        ofType(CommentsActions.REQUEST_FETCH_COMMENTS),

        map((action: CommentsActions.RequestFetchCommentsAction) => {
            return action.payload;
        }),

        switchMap((itemId: number) => {
            return this._httpClient.get<Comment[]>(`${this.API_URL}/items/${itemId}/comments`)
                .pipe(
                    catchError(err => {
                        return of([]);
                    })
                );
        }),

        map((comments: Comment[]) => {
            return {
                type: CommentsActions.SET_COMMENTS,
                payload: comments
            };
        })
    );

    @Effect()
    requestAddCommentEffect$ = this._actions$.pipe(
        ofType(CommentsActions.REQUEST_ADD_COMMENT),

        map((action: CommentsActions.RequestAddCommentAction) => {
            return action.payload;
        }),

        switchMap((payload: { item: Item, comment: Comment }) => {
            return this._httpClient.post<Comment>(`${this.API_URL}/items/${payload.item.id}/comments`, {
                comment: payload.comment.comment
            }).pipe(
                catchError(err => {
                    return of(null);
                }),

                map((comment: Comment) => {
                    if (comment) payload.item.comments++;

                    return {
                        item: payload.item,
                        comment: comment
                    }
                })
            );
        }),

        mergeMap((payload: { item: Item, comment: Comment }) => {
            console.log(payload);
            return [
                {
                    type: CommentsActions.ADD_COMMENT,
                    payload: payload.comment
                },
                {
                    type: ItemsActions.UPDATE_ITEM,
                    payload: payload.item
                }
            ];
        })
    );

    constructor(private _actions$: Actions,
        private _httpClient: HttpClient,
        @Inject(API_URL) public readonly API_URL: string) {

    }
}
