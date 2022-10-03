import {getAllByRole, getByRole, render, screen} from "@testing-library/react"
import { start } from "repl"
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

    test("renders login button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument()
    })

    test("does not render starting learning button", () => {
        render(<Skills skills={skills}/>)
        const startLearning = screen.queryByRole("button", {
            name: "Start Learning"
        })
        expect(startLearning).not.toBeInTheDocument()
    })

    test("start button eventually renders", async () => {
        render(<Skills skills={skills}/>)
        const startLearningButton = await screen.findByRole("button", {
            name: "Start Learning"
        })
    })
})