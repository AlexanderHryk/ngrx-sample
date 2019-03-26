import { Action } from '@ngrx/store';
import { Item } from '../item.model';

export const REQUEST_FETCH_ITEMS = 'REQUEST_FETCH_ITEMS';
export const SET_ITEMS = 'SET_ITEMS';
export const SELECT_ITEM = 'SELECT_ITEM';
export const REQUEST_DELETE_ITEM = 'REQUEST_DELETE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REQUEST_ADD_ITEM = 'REQUEST_ADD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const REQUEST_SEARCH_BY_NAME = 'REQUEST_SEARCH_BY_NAME';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export class RequestFetchItemsAction implements Action {
    readonly type = REQUEST_FETCH_ITEMS;
}

export class SetItemsAction implements Action {
    readonly type = SET_ITEMS;

    constructor(public payload: Item[]) { }
}

export class SelectItemAction implements Action {
    readonly type = SELECT_ITEM;

    constructor(public payload: Item) { }
}

export class RequestDeleteItemAction implements Action {
    readonly type = REQUEST_DELETE_ITEM;

    constructor(public payload: number) { }
}

export class DeleteItemAction implements Action {
    readonly type = DELETE_ITEM;

    constructor(public payload: Item) { }
}

export class RequestAddItemAction implements Action {
    readonly type = REQUEST_ADD_ITEM;

    constructor(public payload: Item) { }
}

export class AddItemAction implements Action {
    readonly type = ADD_ITEM;

    constructor(public payload: Item) { }
}

export class RequestSearchByName implements Action {
    readonly type = REQUEST_SEARCH_BY_NAME;

    constructor(public payload: string) { }
}

export class UpdateItemAction implements Action {
    readonly type = UPDATE_ITEM;

    constructor(public payload: Item) { }
}

export type ItemsActions =
    RequestFetchItemsAction |
    SetItemsAction |
    SelectItemAction |
    RequestDeleteItemAction |
    DeleteItemAction |
    RequestAddItemAction |
    AddItemAction |
    UpdateItemAction;