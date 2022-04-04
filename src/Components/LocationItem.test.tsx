import React from "react"
import { render, screen } from "@testing-library/react"
import { LocationItem } from "./LocationItem"
import { simpleLocation } from "../mock/locations"

test("render loading item", async () => {
  render(<LocationItem location={simpleLocation} />)
  expect(screen.getByText(/Airbnb/i)).toBeInTheDocument()
  expect(screen.queryByText(/foobar/i)).not.toBeInTheDocument()
})
