import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import { test } from "vitest";


test("Contact component renders without crashing", () => {
    render(<Contact />);
    const heading=screen.getByRole("heading", { name: /let’s stay in touch/i });
    expect(heading).toBeInTheDocument();
});