import React, { useEffect, useState } from "react"
import { simpleLocation } from "../mock/locations"

export interface ILocationItemProps {
  location: typeof simpleLocation
}

export const LocationItem: React.FC<ILocationItemProps> = React.memo(
  ({ location }: ILocationItemProps) => {
    return (
      <div className="location-item">
        <p>
          <span className="location-item_prop-title">Location Details: </span>
          <span>{location.locationDetails}</span>
        </p>
        <p>
          <span className="location-item_prop-title">Address: </span>
          <span>{Object.values(location.address).join(", ")}</span>
        </p>
        <p>
          <span className="location-item_prop-title">Location Type: </span>
          <span>{location.locationType}</span>
        </p>
      </div>
    )
  }
)
