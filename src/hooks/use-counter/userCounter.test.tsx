import { renderHook, screen } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
    test("should render the initial count of 0", () => {
        const {result} = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

})