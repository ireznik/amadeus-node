import AirTraffic  from './analytics/air_traffic';

/**
 * A namespaced client for the
 * `/v2/travel/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */
class Analytics {
  airTraffic: any;
  client: any;
  constructor(client: any) {
    this.client        = client;
    this.airTraffic    = new AirTraffic(client);
  }
}

export default Analytics;
