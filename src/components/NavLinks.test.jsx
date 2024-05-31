import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, test } from "vitest";
import NavLinks from "./NavLinks";

describe('renders nav elements', () => {
  it('renders nav elements', () => {
    render(<MemoryRouter>
      <NavLinks />
    </MemoryRouter>)
    //home, programming, creative, cv, about
    const home = screen.getByText(/Home/i)
    const programming = screen.getByText(/Programming/i)
    const creative = screen.getByText(/Creative/i)
    const about = screen.getByText(/About/i)
    const cv = screen.getByText(/CV/i)

    expect(home).toBeInTheDocument()
    expect(programming).toBeInTheDocument()
    expect(creative).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(cv).toBeInTheDocument()
  })
})