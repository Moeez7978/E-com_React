import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByText(/some text from App/i)).toBeInTheDocument();
  });
});
