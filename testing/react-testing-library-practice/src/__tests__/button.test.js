import Button from "../components/button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("A Submit button is rendered", () => {
  render(<Button disabled={true}>Submit</Button>);
  const button = screen.getByText("Submit");
  const buttonTwo = screen.getByRole("button");
  expect(button).toBeDisabled();
});
