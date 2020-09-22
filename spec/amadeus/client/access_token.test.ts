import AccessToken from '../../../src/amadeus/client/access_token';
import Client from '../../../src/amadeus/client';

let accessToken: any;
let client: any;
let clientParams = { clientId: '123', clientSecret: '234' };

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Request', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports an AccessToken object', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(AccessToken).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      accessToken = new AccessToken();
      client = new Client(clientParams);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.bearerToken', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should make a new API call if no token has been loaded before', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.unauthenticatedRequest = jest.fn(() => Promise.resolve({ result: { access_token: 'token' } }));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.assertions(2);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(accessToken.bearerToken(client)).resolves.toEqual('token');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.unauthenticatedRequest).toHaveBeenCalledWith('POST', '/v1/security/oauth2/token', {
          'grant_type' : 'client_credentials',
          'client_id' : client.clientId,
          'client_secret' : client.clientSecret
        });
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should bubble errors', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.unauthenticatedRequest = jest.fn(() => Promise.reject('error'));

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.assertions(2);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(accessToken.bearerToken(client)).rejects.toEqual('error');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.unauthenticatedRequest).toHaveBeenCalled();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return a cached token if it still valid', () => {
        accessToken.expiresAt = Date.now()+100;
        accessToken.accessToken = 'old_token';

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.unauthenticatedRequest = jest.fn();

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.assertions(1);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.unauthenticatedRequest).not.toHaveBeenCalled();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should make a new API call the old token expired', () => {
        accessToken.expiresAt = Date.now();
        accessToken.accessToken = 'old_token';

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.unauthenticatedRequest = jest.fn(() => Promise.resolve({ result: { access_token: 'token' } }));

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.assertions(2);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(accessToken.bearerToken(client)).resolves.toEqual('token');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.unauthenticatedRequest).toHaveBeenCalledWith('POST', '/v1/security/oauth2/token', {
          'grant_type' : 'client_credentials',
          'client_id' : client.clientId,
          'client_secret' : client.clientSecret
        });
      });
    });
  });
});
