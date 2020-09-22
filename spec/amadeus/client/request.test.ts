import Request from '../../../src/amadeus/client/request';

let host = 'test.api.amadeus.com';
let port = 443;
let verb = 'GET';
let ssl = true;
let path = '/foo/bar';
let params = { foo: 'bar' };
let bearerToken = 'token';
let clientVersion = '1.2.3';
let languageVersion = '2.3.4';
let appId = 'amadeus-cli';
let appVersion = '3.4.5';

let request: any;

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Request', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports an Request object', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Request).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      request =  new Request({
        host: host,
        port: port,
        ssl: ssl,
        verb: verb,
        path: path,
        params: params,
        bearerToken: bearerToken,
        clientVersion: clientVersion,
        languageVersion: languageVersion,
        appId: appId,
        appVersion: appVersion
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should store the instance variables', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.verb).toBe(verb);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.path).toBe(path);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.params).toBe(params);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.queryPath).toBe('/foo/bar?foo=bar');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.bearerToken).toBe(bearerToken);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.clientVersion).toBe(clientVersion);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.languageVersion).toBe(languageVersion);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.appId).toBe(appId);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.appVersion).toBe(appVersion);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(request.headers).toEqual({
        'Accept': 'application/json, application/vnd.amadeus+json',
        'User-Agent': 'amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5',
        'Authorization': 'Bearer token',
        'Content-Type': 'application/vnd.amadeus+json'
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.userAgent', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should build the user agent', () => {
        request.appId = undefined;
        request.appVersion = undefined;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.userAgent()).toBe('amadeus-node/1.2.3 node/2.3.4');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should build use the custom App ID and Version when present', () => {
        request.appId = 'amadeus-cli';
        request.appVersion = '3.4.5';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.userAgent()).toBe('amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.fullQueryPath', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return just the path in case of a POST call', () => {
        request.verb = 'POST';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe(path);
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should serialize params and merge them with the path', () => {
        request.verb = 'GET';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe('/foo/bar?foo=bar');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept nested objects', () => {
        request.verb = 'GET';
        request.params = { foo: { bar: 'baz' }};
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe('/foo/bar?foo%5Bbar%5D=baz');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept empty params', () => {
        request.verb = 'GET';
        request.params = {};
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept undefined params', () => {
        request.verb = 'GET';
        request.params = undefined;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept null params', () => {
        request.verb = 'GET';
        request.params = null;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.fullQueryPath()).toBe('/foo/bar?');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.body', () => {

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return an empty string in case of a non-POST call', () => {
        request.verb = 'GET';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toEqual('');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return a serialized body if token is not present', () => {
        request.verb = 'POST';
        request.bearerToken = undefined;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toEqual('foo=bar');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return the params', () => {
        request.verb = 'POST';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toStrictEqual({'foo': 'bar'});
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept nested objects', () => {
        request.verb = 'POST';
        request.params = { foo: { bar: 'baz' }};
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toStrictEqual({'foo': { 'bar' : 'baz'}});
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept empty params', () => {
        request.verb = 'POST';
        request.params = {};
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toStrictEqual({});
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept null params', () => {
        request.verb = 'POST';
        request.params = null;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toBe(null);
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should accept undefined params', () => {
        request.verb = 'POST';
        request.params = undefined;
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.body()).toBe(undefined);
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.options', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should combine the options object for making an API call', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.options()).toEqual({
          method: verb,
          host: 'test.api.amadeus.com',
          port: 443,
          path: '/foo/bar?foo=bar',
          protocol: 'https:',
          headers: {
            Accept: 'application/json, application/vnd.amadeus+json',
            Authorization: 'Bearer token',
            'User-Agent': 'amadeus-node/1.2.3 node/2.3.4 amadeus-cli/3.4.5',
            'Content-Type': 'application/vnd.amadeus+json'
          }
        });
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.addAuthorizationHeader', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should add the authorization header if the token is present', () => {
        request.bearerToken = '123456789';
        request.headers = {};
        request.addAuthorizationHeader();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.headers['Authorization']).toBe('Bearer 123456789');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('skip if the token is not present', () => {
        request.bearerToken = undefined;
        request.headers = {};
        request.addAuthorizationHeader();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.headers['Authorization']).toBeUndefined();
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.addContentTypeHeader', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should add the x-www-form-urlencoded header if the token is not present', () => {
        request.verb = 'POST';
        request.headers = {};
        request.bearerToken = undefined;
        request.addContentTypeHeader();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('skip if the verb is not POST', () => {
        request.verb = 'GET';
        request.headers = {};
        request.addContentTypeHeader();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(request.headers['Content-Type']).toBe('application/vnd.amadeus+json');
      });
    });
  });
});
