import { PornHub } from "pornhub.js";

export const phubApi = async () => {
    const pornhub = new PornHub()
    const res = await pornhub.pornstarList({
        page: 1,
        gender: 'female',
        order: 'Most Popular'
    })

    const {models: data} = await res.json()
    return data
}