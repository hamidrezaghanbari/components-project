import { useEffect, useState } from "react"

export const useFetchPost = () => {
    const [post, setPost] = useState(null)
    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch('https://jsonplaceholder.ir/posts?id=1')
            const posts = await res.json()
            setPost(posts[0])
        }

        fetchPost()
    }, [])

    return post
}