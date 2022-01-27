import { IPostsState } from "./allPostsReducer/models";
import { IPostState } from "./singlePostReducer/models";
import { IErrorsState } from "./errorReducer/models";
import { ILoaderState } from "./loaderReducer/models";
import { ISelectedState } from "./selectPostReducer/models";

export interface IStore {
    allPosts: IPostsState,
    singlePost: IPostState,
    errors: IErrorsState,
    loader: ILoaderState,
    selectedPost: ISelectedState,
}