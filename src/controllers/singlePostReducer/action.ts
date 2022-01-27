import { appName } from '../../config/appName';
import { createAsyncAction } from 'typesafe-actions';

// interfaces
import { IPost } from '../allPostsReducer/models';

// const for actions 
export const widgetName = 'POST';

// ** Action
export const getPost = createAsyncAction(
  `${appName}/${widgetName}/GET_POST_REQUEST`,
  `${appName}/${widgetName}/GET_POST_SUCCESS`,
  `${appName}/${widgetName}/GET_POST_FAILED`,
)<string,IPost,string>();