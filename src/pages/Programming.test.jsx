import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, test } from "vitest";
import Programming from "./Programming";

describe('renders elements', () => {
  it.todo('renders skills', () => {

    render(
      <MemoryRouter>
        <Programming />
      </MemoryRouter>
    )
  })
})