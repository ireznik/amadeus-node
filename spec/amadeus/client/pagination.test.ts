import Pagination from '../../../src/amadeus/client/pagination';

let pagination: any;
let client: any;

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Pagination', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports an Pagination class', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Pagination).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      client = {};
      pagination = new Pagination(client);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.page', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should make a call for the right page if it exists', () => {
        let response = {
          request: {
            verb: 'GET',
            path: '/foo/bar'
          },
          result: {
            meta: {
              links: {
                next: 'https://example.com?page=2'
              }
            }
          }
        };

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.request = jest.fn();
        pagination.page('next', response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.request).toHaveBeenCalledWith('GET', '/foo/bar', { page: { offset: '2' } });
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should resolve to null if no pagination headers were found', () => {
        let response = {
          request: {},
          result: {}
        };

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.call = jest.fn();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(pagination.page('next', response)).resolves.toBeNull();
      });
    });
  });
});
