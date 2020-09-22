import Amadeus    from '../src/amadeus';
import Client     from '../src/amadeus/client';
import Pagination from '../src/amadeus/client/pagination';

let amadeus: any;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Amadeus', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should export an Amadeus object', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Amadeus).not.toBe(null);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      amadeus = new Amadeus(credentials);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should initialize an Amadeus instance', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus).toBeInstanceOf(Amadeus);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should throw an error', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(() => { new Amadeus(); }).toThrowError();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should have an client property', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.client).toBeInstanceOf(Client);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should have an pagination property', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.pagination).toBeInstanceOf(Pagination);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass .next on to the paginator', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.pagination.page = jest.fn();
      amadeus.next({});
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.pagination.page).toHaveBeenCalledWith('next', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass .previous on to the paginator', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.pagination.page = jest.fn();
      amadeus.previous({});
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.pagination.page).toHaveBeenCalledWith('previous', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass .first on to the paginator', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.pagination.page = jest.fn();
      amadeus.first({});
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.pagination.page).toHaveBeenCalledWith('first', {});
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should pass .last on to the paginator', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      amadeus.pagination.page = jest.fn();
      amadeus.last({});
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(amadeus.pagination.page).toHaveBeenCalledWith('last', {});
    });
  });
});
