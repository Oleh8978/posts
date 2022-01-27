import {all} from 'redux-saga/effects';
import { combineReducers, Reducer } from 'redux';

// reducers

// interface
import { IStore } from "./interfaces";

export const rootSaga = function* () {
    yield all([

    ])
}

export const rootReducer = (): Reducer => 
    combineReducers<IStore>({

});