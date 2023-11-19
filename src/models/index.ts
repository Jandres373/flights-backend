import User from './user.model'
import Flight from './flight.model'
import Stay from './stay.model'
import Place from './place.model'
import Country from './country.model'

// userFlights as pivot table for users and flights
User.belongsToMany(Flight, {through: "userFlights"})
Flight.belongsToMany(User, {through: "userFlights"})


// userStays as pivot table for users and stays
User.belongsToMany(Stay, {through: "userStays"})
Stay.belongsToMany(User, {through: "userStays"})

// Country has many places
Country.hasMany(Place);
Place.belongsTo(Country);

// Place has many stays
Place.hasMany(Stay)
Stay.belongsTo(Place)

// Place has many flights as arrivals and departures
Place.hasMany(Flight, { foreignKey: 'originId', as: 'departures' });
Place.hasMany(Flight, { foreignKey: 'destinationId', as: 'arrivals' });
Flight.belongsTo(Place, { foreignKey: 'originId', as: 'origin' });
Flight.belongsTo(Place, { foreignKey: 'destinationId', as: 'destination' });