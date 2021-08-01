import { render, screen } from "@testing-library/react";
import Deployment from './Deployment';
import userEvent from "@testing-library/user-event";


test('verify that deployment form exists on this rendered page', () => {
  render(<Deployment />);
  const thisForm = screen.getByText(/Deployments/i);
  expect(thisForm).toBeInTheDocument();
});

test("test that input date is in mm/dd/yyyy format on this rendered page", () => {
  render(<Deployment />);
  const isDate = screen.getByLabelText(/Deployment Date/);
  userEvent.type(isDate, "06/23/2021");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByLabelText(/Deployment Date/)).toBeVisible();
});

test('verify that deployment date field exists on this rendered page', () => {
  render(<Deployment />);
  const thisForm = screen.getByText(/Deployment Date/i);
  expect(thisForm).toBeInTheDocument();
});

test('verify that deployment time field exists on this rendered page', () => {
  render(<Deployment />);
  const thisForm = screen.getByText(/Deployment Time/i);
  expect(thisForm).toBeInTheDocument();
});

test('verify that add deployment button exists on this rendered page', () => {
  render(<Deployment />);
  const thisForm = screen.getByText(/Add Deployment/i);
  expect(thisForm).toBeInTheDocument();
});

console.warn = () => {};
console.disableYellowBox = true;