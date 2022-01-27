import { createReducer, ActionType } from "typesafe-actions";
import { all } from "redux-saga/effects";

// sagas
import { SinglePostSagas } from './sagas';

// Actions
import * as actions from "./action";

// Interfaces
import { IPostState } from "./models";

export type SinglePostType = ActionType<typeof actions>;

export const postSaga = function* () {
    yield all([
        SinglePostSagas()
    ]);
  };


/* Reducer */
const initialState: IPostState = {
    post: {}
};

export const postReducer = createReducer<IPostState, SinglePostType>(
    initialState
)
  .handleAction(actions.getPost.request, (state, { payload }) => ({
    ...state
}))
.handleAction(actions.getPost.success, (state, { payload }) => ({
    post: payload
}))
.handleAction(actions.getPost.failure, (state, { payload }) => ({
    ...state
}))