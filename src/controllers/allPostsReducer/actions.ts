import { appName } from '../../config/appName';
import { createAsyncAction, createAction } from 'typesafe-actions';

// interfaces
import { IPost } from './models';

// const for actions 
export const widgetName = 'POSTS';

// ** Action
export const getPosts = createAsyncAction(
  `${appName}/${widgetName}/GET_POSTS_REQUEST`,
  `${appName}/${widgetName}/GET_POSTS_SUCCESS`,
  `${appName}/${widgetName}/GET_POSTS_FAILED`,
)<any,IPost[],string>();