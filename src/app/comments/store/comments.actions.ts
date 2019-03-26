import { Action } from '@ngrx/store';
import { Comment } from '../comment.model';
import { Item } from 'src/app/items/item.model';

export const REQUEST_FETCH_COMMENTS = 'REQUEST_FETCH_COMMENTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const REQUEST_ADD_COMMENT = 'REQUEST_ADD_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

export class RequestFetchCommentsAction implements Action {
    readonly type = REQUEST_FETCH_COMMENTS;

    constructor(public payload: number) {

    }
}

export class SetCommentsAction implements Action {
    readonly type = SET_COMMENTS;

    constructor(public payload: Comment[]) { }
}

export class RequestAddCommentAction implements Action {
    readonly type = REQUEST_ADD_COMMENT;

    constructor(public payload: {
        item: Item,
        comment: Comment
    }) { }
}

export class AddCommentAction implements Action {
    readonly type = ADD_COMMENT;

    constructor(public payload: Comment) { }
}

export type CommentsActions =
    RequestFetchCommentsAction |
    SetCommentsAction |
    RequestAddCommentAction |
    AddCommentAction;