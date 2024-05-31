import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import About from "./About";
import { MemoryRouter } from "react-router-dom";

describe('render elements from About page', () => {
  test('renders about title', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const aboutTitle = screen.getByRole('heading', { name: /About me/i })
    expect(aboutTitle).toBeInTheDocument()
  })
  test('renders about me text', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const aboutMe = screen.getByText('I’m a communicator transitioning to coding. I’m highly driven to solve problems as a team player. Research and critical thinking is how I reach solutions.')
    expect(aboutMe).toBeInTheDocument()
  })
})