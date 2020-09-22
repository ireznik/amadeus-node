import Amadeus from '../../src/amadeus';

let amadeus: any;

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Namespaces', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports an Client object', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Amadeus).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      amadeus = new Amadeus({
        clientId: '123',
        clientSecret: '234'
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should define all expected paths', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.urls).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.urls.checkinLinks).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.location).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.airports).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointOfInterest).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointsOfInterest).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointsOfInterest.bySquare).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.airlines).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.recommendedLocations).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.schedule).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.schedule.flights).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.traveled).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.booked).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.predictions).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.predictions.tripPurpose).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.predictions.flightDelay).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.tripParserJobs).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.tripParserJobs('XXX').result).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightDates).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightDestinations).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffers).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffersSearch).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffers.prediction).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffers.pricing).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.seatmaps).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.flightOrders).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffers).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffersByHotel).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffer).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.flightOrder).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.hotelBookings).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.eReputation).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.eReputation.hotelSentiments).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.media).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.media.files).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.media.files.generatedPhotos).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.airport).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.airport.predictions).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.airport.predictions.onTime).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocations).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocations.bySquare).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocation).toBeDefined();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should define all expected .get methods', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.urls.checkinLinks.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.location('ALHR').get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.airports.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointOfInterest('XXX').get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointsOfInterest.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.locations.pointsOfInterest.bySquare.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.airlines.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.referenceData.recommendedLocations.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.traveled.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.booked.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.analytics.airTraffic.busiestPeriod.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.predictions.tripPurpose.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.predictions.flightDelay.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.tripParserJobs('XXX').get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.tripParserJobs('XXX').result.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightDates.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightDestinations.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffersSearch.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.seatmaps.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffers.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffersByHotel.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.hotelOffer('XXX').get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.flightOrder('XXX').get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.schedule.flights.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.eReputation.hotelSentiments.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.media.files.generatedPhotos.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.airport.predictions.onTime.get).toBeDefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocations.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocations.bySquare.get).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.safety.safetyRatedLocation('XXX').get).toBeDefined();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should define all expected .post methods', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffers.prediction.post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.flightOrders.post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffersSearch.post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.travel.tripParserJobs('XXX').post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.flightOffers.pricing.post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.shopping.seatmaps.post).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.hotelBookings.post).toBeDefined();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should define all expected .delete methods', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.booking.flightOrder('XXX').delete).toBeDefined();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.urls.checkinLinks.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.urls.checkinLinks.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/reference-data/urls/checkin-links', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.location().get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.location('ALHR').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/ALHR', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.locations.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.locations.airports.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.airports.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/airports', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.recommendedLocations.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.recommendedLocations.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/recommended-locations', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.locations.pointsOfInterest.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointsOfInterest.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.locations.pointOfInterest("XXX").get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointOfInterest('XXX').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/XXX');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.locations.pointsOfInterest.bySquare.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.locations.pointsOfInterest.bySquare.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/locations/pois/by-square', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.referenceData.airlines.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.referenceData.airlines.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/reference-data/airlines', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.schedule.flights.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.schedule.flights.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/schedule/flights', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.analytics.airTraffic.traveled.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.traveled.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/traveled', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.analytics.airTraffic.booked.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.booked.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/booked', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.analytics.airTraffic.busiestPeriod.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.analytics.airTraffic.busiestPeriod.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/analytics/air-traffic/busiest-period', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.tripParserJobs().get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.tripParserJobs('XXX').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/travel/trip-parser-jobs/XXX');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.tripParserJobs().result.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.tripParserJobs('XXX').result.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/travel/trip-parser-jobs/XXX/result');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.tripParserJobs().post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.travel.tripParserJobs().post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v2/travel/trip-parser-jobs', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightDates.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDates.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-dates', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightDestinations.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightDestinations.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/flight-destinations', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightOffers.prediction.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffers.prediction.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers/prediction', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.booking.flightOrders.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.booking.flightOrders.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/booking/flight-orders', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightOffers.pricing.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffers.pricing.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/flight-offers/pricing', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightOffersSearch.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.flightOffersSearch.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.flightOffersSearch.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.shopping.flightOffersSearch.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v2/shopping/flight-offers', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.seatmaps.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.seatmaps.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.seatmaps.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.shopping.seatmaps.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/shopping/seatmaps', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.hotelOffers.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffers.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.hotelOffersByHotel.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffersByHotel.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/by-hotel', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.shopping.hotelOffer().get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.shopping.hotelOffer('XXX').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/shopping/hotel-offers/XXX', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.booking.flightOrder().get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.booking.flightOrder('XXX').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.booking.flightOrder().delete', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.delete = jest.fn();
      amadeus.booking.flightOrder('XXX').delete();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.delete)
        .toHaveBeenCalledWith('/v1/booking/flight-orders/XXX');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.booking.hotelBookings.post', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.post = jest.fn();
      amadeus.booking.hotelBookings.post();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.post)
        .toHaveBeenCalledWith('/v1/booking/hotel-bookings', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.eReputation.hotelSentiments.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.eReputation.hotelSentiments.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/e-reputation/hotel-sentiments', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.predictions.tripPurpose.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.predictions.tripPurpose.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/trip-purpose', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.media.files.generatedPhotos.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.media.files.generatedPhotos.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v2/media/files/generated-photos', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.travel.predictions.flightDelay.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.travel.predictions.flightDelay.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/travel/predictions/flight-delay', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.airport.predictions.onTime.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.airport.predictions.onTime.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/airport/predictions/on-time', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.safety.safetyRatedLocations.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocations.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.safety.safetyRatedLocations.bySquare.get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocations.bySquare.get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations/by-square', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('.amadeus.safety.safetyRatedLocation().get', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.client.get = jest.fn();
      amadeus.safety.safetyRatedLocation('XXX').get();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client.get)
        .toHaveBeenCalledWith('/v1/safety/safety-rated-locations/XXX');
    });
  });
});
