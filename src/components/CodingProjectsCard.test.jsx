import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, test } from "vitest";
import CodingProjectsCard from "./CodingProjectsCard";

describe('renders project info', () => {
  it('renders used technologies', () => {
    render(
      <MemoryRouter>
        <CodingProjectsCard />
      </MemoryRouter>)


    const reactButtons = screen.queryAllByRole('button', { name: /react/i })
    const cssButtons = screen.queryAllByRole('button', { name: /css/i })
    const htmlButtons = screen.queryAllByRole('button', { name: /html/i })
    const muiButtons = screen.queryAllByRole('button', { name: /mui/i })
    const vitestButtons = screen.queryAllByRole('button', { name: /vitest/i })
    const testingButtons = screen.queryAllByRole('button', { name: /react-testing-library/i })
    const typescriptButtons = screen.queryAllByRole('button', { name: /typescript/i })

    expect(reactButtons.length).toBeGreaterThan(0)
    reactButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(cssButtons.length).toBeGreaterThan(0)
    cssButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(htmlButtons.length).toBeGreaterThan(0)
    htmlButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(muiButtons.length).toBeGreaterThan(0)
    muiButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(vitestButtons.length).toBeGreaterThan(0)
    vitestButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(testingButtons.length).toBeGreaterThan(0)
    testingButtons.forEach(b => expect(b).toBeInTheDocument())
    expect(typescriptButtons.length).toBeGreaterThan(0)
    typescriptButtons.forEach(b => expect(b).toBeInTheDocument())
  })

  it('renders project title', () => {
    render(
      <MemoryRouter>
        <CodingProjectsCard />
      </MemoryRouter>)

    const weatherTitle = screen.getByText(/Weather App/i)

    expect(weatherTitle).toBeInTheDocument()
  })

  it('renders description', () => {
    render(
      <MemoryRouter>
        <CodingProjectsCard />
      </MemoryRouter>)

    const weatherDescription = screen.getByText('A React SPA that fetches information from Open Weather’s API. It displays the current weather and a five-day forecast for the user’s location and five different cities. The background image changes dynamically based on weather data, with images created using Midjourney.')
    expect(weatherDescription).toBeInTheDocument()
  })

})