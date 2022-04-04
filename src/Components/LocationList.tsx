import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { API } from "../client"
import { ILocationItemProps, LocationItem } from "./LocationItem"

interface ILocationListProps {}

export const LocationList: React.FC<ILocationListProps> = React.memo(
  ({}: ILocationListProps) => {
    const [locations, setLocations] = useState<
      ILocationItemProps["location"][]
    >([])
    const BATCH_SIZE = 3
    const [loading, setLoading] = useState<number | boolean>(false)
    const [offset, setOffset] = useState(0)
    const [requestNextBatch, setRequestNextBatch] = useState<number>(BATCH_SIZE)
    const [noMoreItems, setNoMoreItems] = useState(false)

    const listRef =
      useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

    const onScroll = useCallback(() => {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current

        if (scrollTop + clientHeight === scrollHeight) {
          !noMoreItems &&
            !loading &&
            setRequestNextBatch((prev) => prev + BATCH_SIZE)
        }
      }
    }, [loading, noMoreItems])

    const fetchLocations = React.useCallback(
      async (offset: number) => {
        try {
          setLoading(offset)

          const resp = await API.post("/locations", {
            start: offset,
            limit: BATCH_SIZE
          })
          setLocations((prev) => [...prev, ...resp.locations] || [])
          if (resp.locations && resp.locations.length) {
            setOffset((prev) => prev + BATCH_SIZE)
            onScroll()
          } else {
            setNoMoreItems(true)
          }
          setLoading(false)
        } catch (error) {
          console.error(error)
          setNoMoreItems(true)
        } finally {
          setLoading(false)
        }
      },
      [onScroll]
    )

    useEffect(() => {
      if (noMoreItems || loading !== false) {
        return
      }

      requestNextBatch > offset && fetchLocations(offset)
    }, [fetchLocations, requestNextBatch, loading, offset, noMoreItems])

    const list = useMemo(() => {
      return locations.map((item) => (
        <LocationItem key={item.locationId} location={item} />
      ))
    }, [locations])

    return (
      <div
        style={{ height: "calc(100vh - 50px)", overflow: "auto" }}
        onScroll={onScroll}
        ref={listRef}
        className="location-list"
      >
        {list}
        {loading !== false && <div className="preloader">Loading...</div>}
        {noMoreItems && (
          <div className="noMoreItems">There are no more items to load</div>
        )}
      </div>
    )
  }
)
