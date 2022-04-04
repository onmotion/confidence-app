const defaultLocations = [
  {
    locationId: "ABBB0C49",
    locationName: "Airbnb - Mountains",
    locationDetails: "",
    locationType: "Airbnb",
    numberofTasks: 10,
    numberofMyTasks: 10,
    numberofDevices: 0,
    address: {
      addressLine1: "5600 3rd Street",
      city: "San Francisco",
      state: "CA",
      zip: "94124"
    },
    locationUserRole: "Member",
    active: true,
    subscriptionActive: true
  },
  {
    locationId: "GOVG57YG",
    locationName: "Govt Offices",
    locationDetails: "",
    locationType: "Government",
    numberofTasks: 1,
    numberofMyTasks: 1,
    numberofDevices: 0,
    address: {
      addressLine1: "425 1st Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105"
    },
    locationUserRole: "Member",
    active: true,
    subscriptionActive: true
  },
  {
    locationId: "BUSBMJFT",
    locationName: "SRP Restaurant",
    locationDetails: "Restaurant 1",
    locationType: "Business",
    numberofTasks: 1,
    numberofMyTasks: 1,
    numberofDevices: 0,
    address: {
      addressLine1: "233 Franklin Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102"
    },
    locationUserRole: "Manager",
    active: true,
    subscriptionActive: true
  },
  {
    locationId: "SCHGU4YS",
    locationName: "Graham",
    locationDetails: "Graham Middle school",
    locationType: "School",
    numberofTasks: 5,
    numberofMyTasks: 5,
    numberofDevices: 0,
    address: {
      addressLine1: "1175 Castro Street",
      city: "Mountain View",
      state: "CA",
      zip: "94040"
    },
    locationUserRole: "Member",
    active: true,
    subscriptionActive: true
  },
  {
    locationId: "BUSLCHXM",
    locationName: "San Mateo Business",
    locationDetails: "shailaja's Workspace",
    locationType: "Business",
    numberofTasks: 0,
    numberofMyTasks: 0,
    numberofDevices: 0,
    address: {
      addressLine1: "3428 16th Street",
      city: "San Francisco",
      state: "CA",
      zip: "94114"
    },
    locationUserRole: "Member",
    active: true,
    subscriptionActive: true
  },
  {
    locationId: "OFFV55VJ",
    locationName: "Health Club Title 1",
    locationDetails: "Health Club ",
    locationType: "Office",
    numberofTasks: 4,
    numberofMyTasks: 4,
    numberofDevices: 0,
    address: {
      addressLine1: "432 Octavia Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102"
    },
    locationUserRole: "Member",
    active: true,
    subscriptionActive: true
  }
]
const locations = [...defaultLocations]
for (let i = 0; i < 2; i++) {
  locations.push(
    ...defaultLocations.map((loc) => {
      const newloc = {}
      Object.getOwnPropertyNames(loc).forEach((prop) => {
        newloc[prop] =
          typeof loc[prop] === "string"
            ? loc[prop] + " " + i.toString()
            : loc[prop]
      })
      return newloc
    })
  )
}

exports.locations = {
  locations: locations,

  numberOfLocations: locations.length
}
