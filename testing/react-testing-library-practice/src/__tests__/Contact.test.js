import Contact from "../Contact";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// .getByX throws an error | or the element
// .queryByX returns null | or the element
// .findByX allows us to test components that renders asynchronously
// waitFor (when something disappears from the html)

test("Check Contact Compoent", async () => {
  render(<Contact />);
  const button = screen.getByRole('button')
  const header = screen.queryByText("Hey Everybody");
  expect(header).toBeDefined()
  userEvent.click(button)

  await waitFor(() => {
    const header = screen.queryByText("Hey Everybody");
    expect(header).toBeNull()
  })
});
