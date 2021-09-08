import Input from "../components/input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("Input is rendered", async () => {
  render(<Input />);
  const input = screen.getByRole("textbox");
  userEvent.type(input, "Ok");
  expect(input).toHaveValue("Ok");
});
