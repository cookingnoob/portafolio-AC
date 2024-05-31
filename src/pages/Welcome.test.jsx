import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import Welcome from "./Welcome";
import { MemoryRouter } from "react-router-dom";
afterEach(cleanup);

describe('render elements from Welcome Page', () => {

  test('renders name', () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    )
    const name = screen.getByRole('heading', { name: /Alan Coste/i })
    expect(name).toBeInTheDocument()
  });
  test('renders navlinkgs titles', () => {
    render(<MemoryRouter>
      <Welcome />
    </MemoryRouter>)
    const programmingTitle = screen.getByText('PROGRAMMING')
    const creativeTitle = screen.getByText('CREATIVE')
    const aboutTitle = screen.getByText('ABOUT')
    const cvTitle = screen.getByText('CV')

    expect(programmingTitle).toBeInTheDocument()
    expect(creativeTitle).toBeInTheDocument()
    expect(aboutTitle).toBeInTheDocument()
    expect(cvTitle).toBeInTheDocument()
  })
})