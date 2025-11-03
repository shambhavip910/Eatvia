
import { render, screen } from "@testing-library/react";
import App from "../app";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
 expect(screen.getByText(/Taste Without The Wait/i)).toBeInTheDocument();
  });
});
