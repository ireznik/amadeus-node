import Response from '../../../src/amadeus/client/response';

let response: any;
let http_response = {
  statusCode: 200,
  headers: {
    'content-type' : 'application/json'
  }
};
let request = 'request';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Response', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports the module', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Response).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      response = new Response(http_response, request);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should initialize the params', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.statusCode).toBe(200);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.headers).toEqual(http_response.headers);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.request).toEqual(request);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.body).toEqual('');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.result).toEqual(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.data).toEqual(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(response.parsed).toBeFalsy();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.addChunk', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should append chunks to the body', () => {
        response.addChunk('test');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.body).toEqual('test');
        response.addChunk('1234');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.body).toEqual('test1234');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.parse', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should parse the body if json', () => {
        response.addChunk('{ "data" : "b"}');
        response.parse();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parsed).toBeTruthy();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.result).toEqual({ data: 'b' });
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.data).toEqual('b');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should not parse if not json', () => {
        response.contentType = 'plain/text';
        response.parse();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parsed).toBeFalsy();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.result).toBeNull();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.data).toBeNull();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle badly formed json', () => {
        response.addChunk('{ "a" : ');
        response.parse();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parsed).toBeFalsy();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.result).toBeNull();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.data).toBeNull();
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.success', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('be true if the document was parsed and with a 2XX status code', () => {
        response.statusCode = 201;
        response.parsed = true;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.success()).toBeTruthy();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('be false if the document was parsed and with a non-2XX status code', () => {
        response.statusCode = 301;
        response.parsed = true;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.success()).toBeFalsy();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('be false if the document was not parsed and with a 2XX status code', () => {
        response.statusCode = 201;
        response.parsed = false;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.success()).toBeFalsy();
      });
    });
  });
});
