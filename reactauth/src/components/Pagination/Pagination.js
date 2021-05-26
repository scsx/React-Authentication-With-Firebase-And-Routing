import React, { useState, useEffect } from "react"
import { Jumbotron } from "react-bootstrap"
import axios from "axios"
import { Posts } from "./Posts"
import { PageButtons } from "./PageButtons"

export default function Pagination() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            )
            setPosts(res.data)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    // Get current set of posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    function paginateHandler(pageReq) {
        setCurrentPage(pageReq)
    }

    return (
        <div className='fullpage'>
            <Jumbotron className=''>
                <h1 className='text-gold'>Pagination</h1>
            </Jumbotron>
            <div className='posts'>
               <main><p className='mb-0'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://jsonplaceholder.typicode.com/posts'>
                        https://jsonplaceholder.typicode.com/posts
                    </a>
                </p></main> 
                <Posts posts={currentPosts} loading={loading} />
                <PageButtons
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginateHandler}
                />
            </div>
        </div>
    )
}
