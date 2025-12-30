import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders name header", () => {
  render(<App />);
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toHaveTextContent(/Arjun/i);
});
