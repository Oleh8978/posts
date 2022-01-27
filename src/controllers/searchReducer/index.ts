import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./actions";

// Interfaces
import { ISearchState } from "./models";

export type SearchType = ActionType<typeof actions>;

/* Reducer */
const initialState: ISearchState = {
    word: ''
};

export const searchWordReducer = createReducer<ISearchState, SearchType>(
    initialState
)
  .handleAction(actions.setWord, (state, { payload }) => ({
    word: payload.word
}))