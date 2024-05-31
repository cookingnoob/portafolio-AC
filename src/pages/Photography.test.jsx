import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import Photography from "./Photography";
import { MemoryRouter } from "react-router-dom";

describe('renders photography page elements', () => {

  it('renders photographyTitle', () => {
    render(
      <MemoryRouter>
        <Photography />
      </MemoryRouter>
    )
    const photographyTitle = screen.getByText('Photography')
    expect(photographyTitle).toBeInTheDocument()

  })

  it('renders skills', () => {
    render(
      <MemoryRouter>
        <Photography />
      </MemoryRouter>
    )
    const skillsHeader = screen.getByText('Skills')
    const skillOne = screen.getByText('Skill one')
    const skillTwo = screen.getByText('Skill two')
    const skillThree = screen.getByText('Skill three')
    const skillFour = screen.getByText('Skill four')
    const skillFive = screen.getByText('Skill five')
    expect(skillsHeader).toBeInTheDocument()
    expect(skillOne).toBeInTheDocument()
    expect(skillTwo).toBeInTheDocument()
    expect(skillThree).toBeInTheDocument()
    expect(skillFour).toBeInTheDocument()
    expect(skillFive).toBeInTheDocument()
  })

  it('renders photo', () => {
    render(<Photography />)
    const photo = screen.getByAltText('Ribeye steak with pomme pure and mushroom sauce')
    expect(photo).toBeInTheDocument()
  })
})