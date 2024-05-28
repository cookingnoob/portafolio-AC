import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import Welcome from "./Welcome";
afterEach(cleanup);

describe('render elements from Welcome Page', () => {

  test('renders name', () => {
    render(<Welcome />)
    const name = screen.getByRole('heading', { name: /Alan Coste/i })
    expect(name).toBeInTheDocument()
  });
  test('renders copy titles', () => {
    render(<Welcome />)
    const copy = screen.getAllByRole('heading', { name: /Lorem/i })
    expect(copy.length).toBeGreaterThan(4)
  })
})