import { createReducer, ActionType } from "typesafe-actions";

// Actions
import * as actions from "./action";

// Interfaces
import { ISelectedState } from "./models";

export type SelectedItemType = ActionType<typeof actions>;

/* Reducer */
const initialState: ISelectedState = {
    selectedItem: 0
};

export const selectPostReducer = createReducer<ISelectedState, SelectedItemType>(
    initialState
)
  .handleAction(actions.setSelectedItem, (state, { payload }) => ({
    selectedItem: payload.selectedItem
}))