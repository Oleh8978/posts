import { appName } from "../../config/appName";
import {createAction } from "typesafe-actions";

import { ISearchState } from "./models";

/* Actions */
export const widgetName = "SEARCH";

export const setWord = createAction(
    `${appName}/${widgetName}/SET_WORD`
  )<ISearchState>();