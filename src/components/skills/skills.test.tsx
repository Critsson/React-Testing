import {getAllByRole, getByRole, render, screen} from "@testing-library/react"
import Skills from "./skills"

describe("Skills", () => {

    const skills = ["HTML", "CSS", "Javascript"]

    test("renders properly", () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument()
    })

    test("renders all props", () => {
        render(<Skills skills={skills}/>)
        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(3)
    })
})