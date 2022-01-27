import { appName } from "../../config/appName";
import {createAction } from "typesafe-actions";

import { IError } from "./models";

/* Actions */
export const widgetName = "ERROR_ADDER";

export const setNewError = createAction(
    `${appName}/${widgetName}/SET_ERROR`
  )<IError>();

export const removeError = createAction(
    `${appName}/${widgetName}/REMOVE_ERROR`
)<IError>();