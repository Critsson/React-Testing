import Counter from "./counter"
import {screen, render} from "@testing-library/react"
import { count } from "console"

describe("Counter", () => {
    test("properly renders", () => {
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toBeInTheDocument()
        const incrementElement = screen.getByRole("button")
        expect(incrementElement).toBeInTheDocument()
    })

    test("renders a count of 0", () => {
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("0")
    })
})