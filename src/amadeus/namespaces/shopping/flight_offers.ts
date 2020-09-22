import FlightChoicePrediction from './flight_offers/flight_choice_prediction';
import Pricing from './flight_offers/pricing';

/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
class FlightOffers {
  client: any;
  prediction: any;
  pricing: any;
  constructor(client: any) {
    this.client = client;
    this.prediction = new FlightChoicePrediction(client);
    this.pricing = new Pricing(client);
  }
}

export default FlightOffers;
