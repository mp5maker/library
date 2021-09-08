import Home from "../Home";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// .getByX throws an error
// .queryByX returns null

test("A Submit button is rendered", async () => {
  render(<Home />);
  const home = screen.queryByText("Goodbye!");
  expect(home).toBeNull();

  const button = screen.getByRole("button");
  userEvent.click(button);
  const header = await screen.findByText("Goodbye!");
  expect(header).toBeInTheDocument();
});
