import TripPurpose from './predictions/trip_purpose';
import FlightDelay from './predictions/flight_delay';

/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions;
 * ```
 *
 * @param {Client} client
 * @property {TripPurpose} tripPurpose
 * @property {FlightDelay} flightDelay
 */
class Predictions {
  client: any;
  flightDelay: any;
  tripPurpose: any;
  constructor(client: any) {
    this.client = client;
    this.tripPurpose = new TripPurpose(client);
    this.flightDelay = new FlightDelay(client);
  }
}

export default Predictions;