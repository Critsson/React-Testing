import Counter from "./counter";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("properly renders", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking increment button", async () => {
    render(<Counter />);
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking increment button twice", async () => {
    render(<Counter />);
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementElement);
    await userEvent.click(incrementElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking set", async () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await userEvent.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setElement = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("resets properly", async () => {
    render(<Counter />);
    await userEvent.click(
      screen.getByRole("button", {
        name: "Reset",
      })
    );
    expect(screen.getByRole("heading")).toHaveTextContent("0");
  });

  test("elements are focused in correct order", async () => {
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    const setElement = screen.getByRole("button", {
      name: "Set",
    });
    const incrementElement = screen.getByRole("button", {
      name: "Increment",
    });
    const resetElement = screen.getByRole("button", {
      name: "Reset",
    });
    await userEvent.tab();
    expect(incrementElement).toHaveFocus();
    await userEvent.tab();
    expect(inputElement).toHaveFocus();
    await userEvent.tab();
    expect(setElement).toHaveFocus();
    await userEvent.tab();
    expect(resetElement).toHaveFocus();
  });
});
