interface IHostEnv {
    MAIN_HOST_URL: string
}

export class Config {
    public static init(env: IHostEnv) {
        this.MAIN_HOST_URL = env.MAIN_HOST_URL
        this.MAIN_HOST_URL = env.MAIN_HOST_URL
    }

    public static MAIN_HOST_URL: string;

    public static get MAIN_PATH_POSTS_URI() {
        return this.MAIN_HOST_URL
    }
}