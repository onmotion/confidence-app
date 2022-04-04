const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }))
app.use(bodyParser.json())

let { locations } = require("./data/locations")

app.post("/locations", (req, res) => {
  try {
    const body = req.body

    setTimeout(
      () =>
        res.send({
          ...locations,
          locations: locations.locations.slice(
            body.start,
            body.start + body.limit
          )
        }),
      1000
    )
  } catch (e) {
    res.status(500).send({ detail: e })
  }
})

app.listen(8080, () => {
  console.log(`app listening at http://localhost:8080`)
})
