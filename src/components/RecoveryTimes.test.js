import { render, screen } from "@testing-library/react";
import RecoveryTimes from "./RecoveryTimes";
import userEvent from "@testing-library/user-event";

test("return true when the duration is 55", () => {
  render(<RecoveryTimes />);
  const startDateFieldValue = screen.getByLabelText(/Start Date/);
  const startTimeFieldValue = screen.getByLabelText(/Start Time/);
  const durationFieldValue = screen.getByLabelText(/Duration/);
  expect(screen.getByText("Duration (minutes)")).toBeVisible();
  userEvent.type(startDateFieldValue, "2020-06-09");
  userEvent.type(startTimeFieldValue, "04:20 PM");
  userEvent.type(durationFieldValue, "55");
  expect(screen.getByText("Duration (minutes)")).toBeVisible();
  
});

console.warn = () => {};
console.disableYellowBox = true;