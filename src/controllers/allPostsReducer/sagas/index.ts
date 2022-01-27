import { all, put, takeEvery, select } from 'redux-saga/effects';

//APIs
import { PostAPI } from '../transport/transport.api';

// Actions
import * as actions from '../actions';
import { setLoader } from '../../loaderReducer/actions';
import { setNewError } from '../../errorReducer/action';

// interfaces
import { IPost } from '../models';

// constants 
import * as CONSTANTS from '../../../config/constants';

export function* getPostsSagas({
  payload,
}: ReturnType<typeof actions.getPosts.request>) {

  try {
    yield put(
      setLoader({
        loader: true
      })
    );

    const res: IPost[] = yield PostAPI.getPosts();
    
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
        actions.getPosts.success(res),
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
        type: CONSTANTS.FAILED_LOAD_REDUCERS
      })
    );
  }
}

export function* PostsListSaga() {
  yield all([takeEvery(actions.getPosts.request, getPostsSagas)]);
}