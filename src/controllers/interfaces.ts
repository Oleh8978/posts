import { RouterState } from 'connected-react-router';

import { IPostsState } from "./allPostsReducer/models";
import { IPostState } from "./singlePostReducer/models";
import { IErrorsState } from "./errorReducer/models";
import { ILoaderState } from "./loaderReducer/models";
import { ISearchState } from './searchReducer/models';

export interface IStore {
    allPosts: IPostsState,
    singlePost: IPostState,
    errors: IErrorsState,
    loader: ILoaderState,
    router: RouterState,
    word: ISearchState
}