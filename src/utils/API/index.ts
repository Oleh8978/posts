import { BadRequest } from "./Exception";

export async function handleErrors<T = {}>(
    fetch: Promise<Response>
): Promise<T> {

    try {
        const res = await fetch;

        const data = await res.json();

        if (!res.ok) {
            const error = await res.json();

            if (error.statusCode === 422) {
                throw error
            }

            if (error.statusCode === 403 || error.statusCode === 401) {
                throw error
            } else {
                throw new BadRequest(error?.message)
            }
        }

        return data as T;
    } catch (e) {
        throw e;
    }
}