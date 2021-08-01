import LeadTime from "./LeadTime";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

console.warn = () => {};
console.disableYellowBox = true;

test('verify that change in minutes information is on the page', () => {
  render(<LeadTime />);
  const thisForm = screen.getByText(/Change Lead Time/i);
  expect(thisForm).toBeInTheDocument();
});

test('verify that 0 is on the page as default', () => {
  render(<LeadTime />);
  const thisForm = screen.getByText(/From code pushed to code deployed: 0 minute/i);
  expect(thisForm).toBeInTheDocument();
});

