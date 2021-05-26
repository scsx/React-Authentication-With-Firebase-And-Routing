import React, { useState } from "react"
import { ButtonGroup, Button } from "react-bootstrap"

export const PageButtons = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    const [isActive, setActive] = useState(1)

    function handleNumberAndCssClass(number) {
        setActive(number)
        paginate(number)
    }

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <ButtonGroup>
            {pageNumbers.map((number) => (
                <Button
                    className={[
                        "round",
                        isActive === number ? "active" : null
                    ].join(" ")}
                    key={number}
                    onClick={() =>
                        handleNumberAndCssClass(number)
                    }>
                    {number}
                </Button>
            ))}
        </ButtonGroup>
    )
}
