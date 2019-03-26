import * as CommentsActions from './comments.actions';
import { Comment } from '../comment.model';

export interface CommentsState {
    comments: Comment[]
};

const initialState: CommentsState = {
    comments: []
};

export function commentsReducer(state = initialState, action: CommentsActions.CommentsActions): CommentsState {
    switch (action.type) {

        case CommentsActions.SET_COMMENTS: {
            if (!action.payload) return state;

            const comments = [...action.payload];

            return {
                ...state,
                comments: comments
            };
        }

        case CommentsActions.ADD_COMMENT: {
            if (!action.payload) return state;

            return {
                ...state,
                comments: [...state.comments, { ...action.payload }]
            }
        }

        default:
            return state;
    }
}