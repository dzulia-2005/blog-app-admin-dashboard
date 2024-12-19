import dayjs from 'dayjs'

export const formatDate = (time: string) => {
    const postDate = dayjs(time)
    const fullDate = postDate.format("YYYY-MM-DD HH:mm")
    return fullDate
}