import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import Work from "./Work";

describe('renders Work page elements', () => {
  it('renders my work title', () => {
    render(<Work />)
    const myWork = screen.getByText('My work')
    expect(myWork).toBeInTheDocument()
  })

  it('renders work titles', () => {
    render(<Work />)
    const programmingTitle = screen.getByText('PROGRAMMING')
    const photographyTitle = screen.getByText('PHOTOGRAPHY')
    const cookingTitle = screen.getByText('COOKING')
    const cvTitle = screen.getByText('CV')

    expect(programmingTitle).toBeInTheDocument()
    expect(photographyTitle).toBeInTheDocument()
    expect(cookingTitle).toBeInTheDocument()
    expect(cvTitle).toBeInTheDocument()
  })
})