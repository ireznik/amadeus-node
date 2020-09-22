import {
  ServerError,
  NotFoundError,
  ClientError,
  ParserError,
  UnknownError,
  NetworkError,
  AuthenticationError
} from '../../../src/amadeus/client/errors';

import Response from '../../../src/amadeus/client/response';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Errors', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports all error types', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(ServerError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(NotFoundError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(ClientError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(ParserError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(UnknownError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(NetworkError).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(AuthenticationError).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should initialize the names', () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      let response = new Response({});

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new ServerError(response).code).toBe('ServerError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new NotFoundError(response).code).toBe('NotFoundError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new ClientError(response).code).toBe('ClientError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new ParserError(response).code).toBe('ParserError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new UnknownError(response).code).toBe('UnknownError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new NetworkError(response).code).toBe('NetworkError');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new AuthenticationError(response).code).toBe('AuthenticationError');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should extract a description for multiple errors', () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      let response = new Response({});
      response.result = { errors: ['errors'] };
      response.parsed = true;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new ServerError(response).description).toEqual(['errors']);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should extract a description for multiple errors', () => {
      // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
      let response = new Response({});
      response.result = { 'errors_description' : 'exists' };
      response.parsed = true;
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(new ServerError(response).description).toEqual({ 'errors_description' : 'exists' });
    });
  });
});
