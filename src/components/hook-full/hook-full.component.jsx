import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useFetchPost } from '../../effects/use-fetch-post.effect'
import FormHookComponent from './form-hook/form-hook.component'
import { useFetch, useFetchAsync } from './use-fetch.hook'

const HookFullComponent = () => {
    // simple usage of useState
    const [count, setCount] = useState(0)

    // simple use of setEffect for componentDidMount
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.ir/posts').then(res => {
            setPosts(res.data)
        })
    }, [])

    // simple use of useEffect for componentWillunmount
    useEffect(() => {
        return () => console.log('component will unmount this is cleanup function')
    }, [])

    // simple use of useEffect for componentWillReciveProps
    useEffect(() => {
        console.log(count, 'change happened to count')
    }, [count])

    // use hook for custom hooks
    const users = useFetch('https://jsonplaceholder.ir/users')

    // use hook for custom async await hooks
    const asyncUsers = useFetchAsync('https://jsonplaceholder.ir/users')

    // use hook for input and use async await in useEffect 
    const [name, setName] = useState('')
    const [user, setUser] = useState({})
    useEffect(() => {
        if (name.length > 0) {
            // it just run when name is changed
            const fetchFunc = async () => {
                const response = await fetch(`https://jsonplaceholder.ir/users?username=${name}`)
                const resJson = await response.json()
                setUser(resJson)
            }

            fetchFunc()
        }

    }, [name])


    // for edit form
    const customInitialValues = { name: 'hamidreza', email: 'hamidreza@gmail.com', password: 'password' }


    // react custom hook
    const post = useFetchPost()


    // hooks for react router
    let history = useHistory()
    const goToEtcPage = () => {
        history.push('/etc')
    }

    // get location
    const location = useLocation();
    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        // alert(currentPath)
        // alert(searchParams)
    }, [location]);

    // get params from url
    const { param } = useParams();

    // to get match
    const match = useRouteMatch();

    return (
        <HrWrapper>
            <h1>hook full</h1>

            <hr />
            <div>
                <p>simple use of use state {count}</p>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>add one to counter</button>
            </div>
            <hr />

            <hr />
            <p>simple use of use state for componentdidmount</p>
            <ul>
                {
                    posts.slice(0, 3).map((post, index) => {
                        return <li key={index}>{post.title}</li>
                    })
                }
            </ul>
            <hr />

            <hr />
            <p>use useeffect for show users list with custom hook</p>
            <ul>
                {
                    users.slice(0, 2).map((user, index) => {
                        return <li key={index}>{user.name}</li>
                    })
                }
            </ul>
            <hr />

            <hr />
            <p>use useeffect for show users list with custom hook with async await structure</p>
            <ul>
                {
                    asyncUsers.slice(2, 6).map((user, index) => {
                        return <li key={index}>{user.name}</li>
                    })
                }
            </ul>
            <hr />

            <hr />
            <p>use state for get user name</p>
            <input onChange={(e) => setName(e.target.value)} type="text" />
            <p>{name}</p>
            {
                user.length === 1 ? <em>{user[0].email}</em>
                    : <span>no user not fount</span>
            }
            <hr />

            <hr />
            <FormHookComponent />
            <hr />

            <hr />
            <FormHookComponent {...customInitialValues} />
            <hr />

            <hr />
            <p>use custom hook for get post</p>
            {
                post ? <p>{post.body.substring(0, 100)}</p> : 'not post fount yet'
            }
            <hr />

            <hr />
            <p>use hooks for react router</p>
            <button onClick={goToEtcPage}>click to go etc page</button>
            <hr />


        </HrWrapper>
    )
}

const HrWrapper = styled.div`
    hr {
        margin: 20px; 
    }
`

export default HookFullComponent
