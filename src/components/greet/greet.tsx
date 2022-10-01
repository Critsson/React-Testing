import React from "react"

interface Props {
    name?: string
}

export default function Greet(props: Props) {
    return (
        <div>Hello {props.name ? props.name : "Guest"}</div>
    )
}