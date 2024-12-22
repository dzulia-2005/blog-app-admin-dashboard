import { BLOGS_QUERY_KEYS } from "../enum"

export const useBlogsquerykeys = () => {
    return {blogs:BLOGS_QUERY_KEYS.BLOG_LIST}
}

export const useGetblogquerykeys = () => {
    return {oneblog :BLOGS_QUERY_KEYS.ONE_BLOG }
}