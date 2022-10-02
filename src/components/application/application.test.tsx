import Application from "./application"
import { render, screen } from "@testing-library/react"

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />)

        const headingElelment = screen.getByRole("heading", {
            level: 1
        })
        expect(headingElelment).toBeInTheDocument()

        const bioElement = screen.getByRole("textbox", {
            name: "Bio"
        })
        expect(bioElement).toBeInTheDocument()

        const nameElement = screen.getByRole("textbox", {
            name: "Name"
        })
        expect(nameElement).toBeInTheDocument()

        const nameElement2 = screen.getByLabelText("Name")
        expect(nameElement2).toBeInTheDocument( )

        const closeElement = screen.getByTitle("close")
        expect(closeElement).toBeInTheDocument()

        const dropDownElement = screen.getByRole("combobox")
        expect(dropDownElement).toBeInTheDocument()

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument()

        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()

        const paragraphElement = screen.getByText(/mandatory/i)
        expect(paragraphElement).toBeInTheDocument()
    })

})