import axios from "axios"
import { useEffect, useState } from "react"

export function useFetch(url) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url).then(res => {
            setUsers(res.data)
        })
    }, [])

    return users
}

export function useFetchAsync(url) {
    const [users, setUsers] = useState([])

    async function getUsers() {
        await axios.get(url).then(res => setUsers(res.data))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return users
}