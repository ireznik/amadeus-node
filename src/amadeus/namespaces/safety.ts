import SafetyRatedLocations from './safety/safety_rated_locations';
import SafetyRatedLocation from './safety/safety_rated_location';

/**
 * A namespaced client for the
 * `/v1/safety` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety;
 * ```
 *
 * @param {Client} client
 * @property {SafetyRatedLocations} safetyRatedLocations
 */
class Safety {
  client: any;
  safetyRatedLocations: any;
  constructor(client: any) {
    this.client = client;
    this.safetyRatedLocations = new SafetyRatedLocations(client);
  }

  safetyRatedLocation(locationId: any) {
    return new SafetyRatedLocation(this.client, locationId);
  }
}

export default Safety;