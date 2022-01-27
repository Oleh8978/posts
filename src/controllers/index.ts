import {all} from 'redux-saga/effects';
import { combineReducers, Reducer } from 'redux';
import { connectRouter } from "connected-react-router";

// reducers && sagas
import { postsReducer, allPostsSagas} from './allPostsReducer';
import { postReducer, postSaga } from './singlePostReducer';
import { errorsReducer } from './errorReducer';
import { loaderReducer } from './loaderReducer';
import { searchWordReducer } from './searchReducer';

// interface
import { IStore } from "./interfaces";

export const rootSaga = function* () {
    yield all([
        allPostsSagas(),
        postSaga(),
    ])
}

export const rootReducer = (history: History): Reducer => 
    combineReducers<IStore>({
        allPosts: postsReducer,
        singlePost: postReducer,
        errors: errorsReducer,
        loader: loaderReducer,
        word: searchWordReducer,
        // @ts-ignore
        router: connectRouter(history),
});