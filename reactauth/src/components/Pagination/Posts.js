import React from "react"
import { ListGroup } from "react-bootstrap"

export const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>loading...</h2>
    }
    return (
        <ListGroup>
            {posts.map((post) => (
                <ListGroup.Item key={post.id}>
                    {post.title}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
