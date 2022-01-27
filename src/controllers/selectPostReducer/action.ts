import { appName } from "../../config/appName";
import {createAction } from "typesafe-actions";

import { ISelectedState } from "./models";

/* Actions */
export const widgetName = "SELECT_ITEM";

export const setSelectedItem = createAction(
    `${appName}/${widgetName}/SET_SELECTED_ITEM`
  )<ISelectedState>();