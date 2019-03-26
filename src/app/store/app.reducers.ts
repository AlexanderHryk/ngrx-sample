import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from '../auth/store/auth.reducers';
import { ItemsState, itemsReducer } from '../items/store/items.reducers';
import { CommentsState, commentsReducer } from '../comments/store/comments.reducers';

export interface AppState {
    auth: AuthState,
    items: ItemsState,
    comments: CommentsState
};

export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    items: itemsReducer,
    comments: commentsReducer
};