import { render, screen } from "@testing-library/react";

import App from "./App";

it("renders a heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /Vite/i,
  });
  expect(heading).toBeInTheDocument();
});
