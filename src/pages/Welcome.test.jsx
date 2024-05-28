import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, test } from "vitest";
import Welcome from "./Welcome";

describe('render elements from Welcome Page', () => {
  test('renders name', () => {
    render(<Welcome />)
    const name = screen.getByRole('heading', { name: /Alan Coste/i })
    expect(name).toBeInTheDocument()
  })
})