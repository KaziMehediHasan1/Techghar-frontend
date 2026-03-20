import AdminLayout from "@/components/layout/AdminLayout";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("renders admin sidebar and outlet section", () => {
  render(
    <MemoryRouter>
      <AdminLayout />
    </MemoryRouter>,
  );
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});
