import Listener          from '../../../src/amadeus/client/listener';
import Response          from '../../../src/amadeus/client/response';
import { ResponseError } from '../../../src/amadeus/client/errors';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'events' or its corresponding t... Remove this comment to see the full error message
import EventEmitter      from 'events';

let handler: any;
let request: any;
let emitter: any;
let client;

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Listener', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports the module', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Listener).toBeDefined();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.instance', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      emitter = new EventEmitter();
      request = 'request';
      client  = {
        warn: () => { return false; },
        debug: () => { return false; }
      };
      handler = new Listener(request, emitter, client);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should initialize the params', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(handler.request).toBe(request);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(handler.emitter).toBe(emitter);
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onResponse', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should create a response object and listed to http events', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        let http_response = { on: jest.fn() };
        handler.onResponse(http_response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_response.on).toHaveBeenCalledTimes(4);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_response.on).toHaveBeenCalledWith('data', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_response.on).toHaveBeenCalledWith('end', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_response.on).toHaveBeenCalledWith('close', expect.any(Function));
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(http_response.on).toHaveBeenCalledWith('error', expect.any(Function));
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onError', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should create and trigger onNetworkError', () => {
        let http_response = {};
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        handler.onNetworkError = jest.fn(() => { return () => {}; });
        handler.onError(http_response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(handler.onNetworkError).toHaveBeenCalledWith(expect.any(Response));
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onEnd', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should parse the response and trigger success if it parsed', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        handler.onSuccess = jest.fn();
        let response = new Response({}, {});
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        response.parse = jest.fn();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        response.success = jest.fn(() => { return true; });

        handler.onEnd(response)();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(handler.onSuccess).toHaveBeenCalledWith(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parse).toHaveBeenCalled();

      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should parse the response and trigger fail if it did not parse', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        handler.onFail = jest.fn();
        let response = new Response({}, {});
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        response.parse = jest.fn();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        response.success = jest.fn(() => { return false; });

        handler.onEnd(response)();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(handler.onFail).toHaveBeenCalledWith(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parse).toHaveBeenCalled();
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onSuccess', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should emit the response', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        handler.emitter.emit = jest.fn();
        let response = 'response';
        handler.onSuccess(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('resolve', response);
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onFail', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a ServerError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 500 }, {});
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ServerError'}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a AuthenticationError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 401 }, {});
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'AuthenticationError'}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a NotFoundError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 404 }, {});
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'NotFoundError'}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a ClientError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 403 }, {});
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ClientError'}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a ParserError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 200 }, {});
        response.addChunk('{ a: "b"');
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'ParserError'}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should handle a UnknownError', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        emitter.emit = jest.fn();
        let response = new Response({ statusCode: 200 }, {});
        response.parsed = true;
        handler.onFail(response);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(emitter.emit).toHaveBeenCalledWith('reject', expect.objectContaining({ code: 'UnknownError'}));
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('.onNetworkError', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should try to parse and then return a NetworkError', () => {
        let response = new Response({}, {});
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        response.parse = jest.fn();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        handler.emitter.emit = jest.fn();

        handler.onNetworkError(response)();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(response.parse).toHaveBeenCalled();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(handler.emitter.emit).toHaveBeenCalledWith('reject', expect.any(ResponseError));
      });
    });
  });
});
