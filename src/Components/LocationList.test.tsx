import React from "react"
import { render, screen } from "@testing-library/react"
import { LocationList } from "./LocationList"

test("mount loading list", async () => {
  render(<LocationList />)
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
})
