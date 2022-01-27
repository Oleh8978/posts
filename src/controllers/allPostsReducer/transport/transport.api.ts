import { Config } from '../../../config/api';
import { handleErrors } from '../../../utils/API';

import { IPost } from '../models';

class API {

    public async getPosts(): Promise<IPost[]> {

        const uriPosts = new URL(Config.MAIN_PATH_POSTS_URI + 'posts/');

        return handleErrors(
            fetch(uriPosts.toString(), {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        )
    }

    public async getPost(id: string): Promise<IPost[]> {

        const uriPosts = new URL(Config.MAIN_PATH_POSTS_URI + 'posts/' + id);

        return handleErrors(
            fetch(uriPosts.toString(), {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
        )
    }


}

export const PostAPI = new API()