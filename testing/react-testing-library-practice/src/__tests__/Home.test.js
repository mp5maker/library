import Home from "../Home";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// .getByX throws an error | or the element
// .queryByX returns null | or the element
// .findByX allows us to test components that renders asynchronously

test("Check Home Component", async () => {
  render(<Home />);
  const home = screen.queryByText("Goodbye!");
  expect(home).toBeNull();

  const button = screen.getByRole("button");
  userEvent.click(button);
  const header = await screen.findByText("Goodbye!");
  expect(header).toBeInTheDocument();
});
