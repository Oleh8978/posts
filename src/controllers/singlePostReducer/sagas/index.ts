import { all, put, takeEvery, select } from 'redux-saga/effects';

//APIs
import { PostAPI } from '../../allPostsReducer/transport/transport.api';

// Actions
import * as actions from '../action';
import { setLoader } from '../../loaderReducer/actions';
import { setNewError } from '../../errorReducer/action';

// interfaces
import { IPost } from '../../allPostsReducer/models';

// constants 
import * as CONSTANTS from '../../../config/constants';

export function* getSinglePostSaga({
  payload,
}: ReturnType<typeof actions.getPost.request>) {

  try {
    yield put(
      setLoader({
        loader: true
      })
    );

    const res: IPost = yield PostAPI.getPost(payload);
    
    if (!res ) {
      setLoader({
        loader: false
      })
    } else {
      yield put(
        setLoader({
          loader: false
        })
      );
      yield put(
        actions.getPost.success(res),
      );
    }

  } catch (error) {

    yield put(
      setLoader({
        loader: false
      })
    );

    yield put(
      setNewError({
        id: Math.random(),
        type: CONSTANTS.FAILED_LOAD_POST_DETAILS
      })
    );
  }
}

export function* SinglePostSagas() {
  yield all([takeEvery(actions.getPost.request, getSinglePostSaga)]);
}