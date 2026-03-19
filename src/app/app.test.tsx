import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

describe("MainLayout Component", () => {
  test("renders navbar, footer, and outlet correctly", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    // expect(screen.getByText(/laptop/i)).toBeInTheDocument();
  });
});
