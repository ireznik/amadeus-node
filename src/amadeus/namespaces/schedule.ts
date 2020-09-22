import Flights from './schedule/flights';

/**
 * A namespaced client for the
 * `/v2/schedule` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.schedule.flights;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
class Schedule {
  client: any;
  flights: any;
  constructor(client: any) {
    this.client = client;
    this.flights = new Flights(client);
  }
}

export default Schedule;
