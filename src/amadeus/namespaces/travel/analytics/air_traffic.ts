import Traveled from './air_traffic/traveled';
import Booked from './air_traffic/booked';
import BusiestPeriod from './air_traffic/busiest_period';

/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.airTraffic;
 * ```
 *
 * @param {Client} client
 */
class AirTraffic {
  booked: any;
  busiestPeriod: any;
  client: any;
  traveled: any;
  constructor(client: any) {
    this.client = client;
    this.traveled = new Traveled(client);
    this.booked = new Booked(client);
    this.busiestPeriod = new BusiestPeriod(client);
  }
}

export default AirTraffic;
