import Client from '../../src/amadeus/client';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'https' or its corresponding ty... Remove this comment to see the full error message
import https  from 'https';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'events' or its corresponding t... Remove this comment to see the full error message
import EventEmitter from 'events';

let client: any;
let credentials = {
  clientId: '123',
  clientSecret: '234'
};

let verb = 'GET';
let path = '/foo/bar';
let params = { baz: 'qux' };

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Client', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports an Client object', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Client).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      client = new Client(credentials);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should export an Client object', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client).toBeInstanceOf(Client);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should throw an error without required credentials', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(() => { new Client(); }).toThrow();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should initialize all default values', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.clientId).toBe('123');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.clientSecret).toBe('234');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logger).toBe(console);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.host).toBe('test.api.amadeus.com');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.customAppId).toBe(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.customAppVersion).toBe(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.http).toBe(https);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logLevel).toBe('silent');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow for setting a custom logger', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      let logger = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logger' : logger };
      let client = new Client(options);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logger).toBe(logger);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow for setting debug mode', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'logLevel' : 'debug' };
      let client = new Client(options);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logLevel).toBe('debug');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow for setting a different hostname', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'hostname' : 'test' };
      let client = new Client(options);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.host).toBe('test.api.amadeus.com');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow for setting a custom App ID and Version', () => {
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'customAppId' : 'cli', 'customAppVersion' : '1.0.0' };
      let client = new Client(options);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.customAppId).toBe('cli');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.customAppVersion).toBe('1.0.0');
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should allow for setting a custom http client', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      let http = jest.fn();
      let options = { 'clientId' : '123', 'clientSecret' : '234', 'http' : http };
      let client = new Client(options);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.http).toBe(http);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.get', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let call = client.unauthenticatedRequest = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: (resolve: any) => resolve('token') };
        }};
        // make an authenticated POST call
        client.get(path, params);
        // ensure Client.call() was called with the right parameters
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(call).toHaveBeenCalledWith('GET', path, params, 'token');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should work without params', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let call = client.unauthenticatedRequest = jest.fn();
        client.accessToken = { bearerToken: () => {
          return { then: (resolve: any) => resolve('token') };
        }};
        client.get(path);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(call).toHaveBeenCalledWith('GET', path, {}, 'token');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.post', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should create a new request and call it', () => {
        // mock the Client.call() method
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let call = client.unauthenticatedRequest = jest.fn();
        // replace the AccessToken instance to mock a new Bearer Token
        client.accessToken = { bearerToken: () => {
          return { then: (resolve: any) => resolve('token') };
        }};
        // make an authenticated POST call
        client.post(path, params);
        // ensure Client.call() was called with the right parameters
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(call).toHaveBeenCalledWith('POST', path, params, 'token');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should work without params', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let call = client.unauthenticatedRequest = jest.fn();
        client.accessToken = { bearerToken: () => {
          return { then: (resolve: any) => resolve('token') };
        }};
        client.post(path);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(call).toHaveBeenCalledWith('POST', path, {}, 'token');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.unauthenticatedRequest', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should create a new request and call it', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.accessToken.bearerToken = jest.fn(() => Promise.resolve('data'));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.execute = jest.fn();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let request = jest.mock();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.buildRequest = jest.fn(() => { return request; });
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.buildPromise = jest.fn();
        client.unauthenticatedRequest(verb, path, params);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.buildPromise).toHaveBeenCalledWith(expect.any(EventEmitter));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.buildRequest).toHaveBeenCalledWith(verb, path, params, null);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.execute).toHaveBeenCalledWith(request, expect.any(EventEmitter));
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.execute', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should make a request and bind the handlers', () => {
        let emitter = new EventEmitter();
        let request = client.buildRequest('GET', '/foo/bar', {});

        let http_request = {
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
          on: jest.fn(),
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
          write: jest.fn(),
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
          end: jest.fn()
        };

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        client.http.request = jest.fn().mockImplementation(() => {
          return http_request;
        });

        client.execute(request, emitter);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.http.request).toHaveBeenCalledWith(expect.any(Object));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_request.on).toHaveBeenCalledTimes(2);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_request.on).toHaveBeenCalledWith('response', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_request.on).toHaveBeenCalledWith('error', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_request.write).toHaveBeenCalledWith('');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_request.end).toHaveBeenCalled();
      });
    });


    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.buildPromise', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return a new promise with the emitter bound to resolve/reject', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let onFn = jest.fn();
        let emitter = { on: onFn };

        client.buildPromise(emitter);

        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(onFn).toHaveBeenCalledTimes(2);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(onFn).toHaveBeenCalledWith('resolve', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(onFn).toHaveBeenCalledWith('reject', expect.any(Function));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should listen to the emitter on resolve', () => {
        let emitter = new EventEmitter();
        let promise = client.buildPromise(emitter);

        emitter.emit('resolve', 'success');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(promise).resolves.toBe('success');
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should listen to the emitter on reject', () => {
        let emitter = new EventEmitter();
        let promise = client.buildPromise(emitter);

        emitter.emit('reject', 'error');
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(promise).rejects.toBe('error');
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.debug', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should be true if the log level is debug', () => {
        client.logLevel = 'debug';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.debug()).toBeTruthy();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should be false if the log level is not debug', () => {
        client.logLevel = 'warn';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.debug()).toBeFalsy();
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.warn', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should be true if the log level is debug', () => {
        client.logLevel = 'debug';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.warn()).toBeTruthy();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should be true if the log level is warn', () => {
        client.logLevel = 'warn';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.warn()).toBeTruthy();
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should be false if the log level is not debug or warn', () => {
        client.logLevel = 'silent';
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(client.warn()).toBeFalsy();
      });
    });
  });
});
