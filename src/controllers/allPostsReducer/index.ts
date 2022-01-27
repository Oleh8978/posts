import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { PostsListSaga } from './sagas';

// Actions
import * as actions from "./actions";

// Interfaces
import { IPostsState } from "./models";

export type PostsListType = ActionType<typeof actions>;

export const allPostsSagas = function* () {
    yield all([
        PostsListSaga()
    ]);
  };


/* Reducer */
const initialState: IPostsState = {
    posts: []
};

export const postsReducer = createReducer<IPostsState, PostsListType>(
    initialState
)
  .handleAction(actions.getPosts.request, (state, { payload }) => ({
    ...state
}))
.handleAction(actions.getPosts.success, (state, { payload }) => ({
    posts: [...payload]
}))
.handleAction(actions.getPosts.failure, (state, { payload }) => ({
    ...state
}))