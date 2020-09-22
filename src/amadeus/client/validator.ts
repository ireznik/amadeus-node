// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'https' or its corresponding ty... Remove this comment to see the full error message
import https     from 'https';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'http' or its corresponding typ... Remove this comment to see the full error message
import http      from 'http';

const HOSTS = {
  'test'       : 'test.api.amadeus.com',
  'production' : 'api.amadeus.com'
};

const RECOGNIZED_OPTIONS = [
  'clientId',
  'clientSecret',
  'logger',
  'logLevel',
  'hostname',
  'host',
  'customAppId',
  'customAppVersion',
  'http',
  'ssl',
  'port'
];

/**
 * Helper class for validating parameters
 * @protected
 */
class Validator {

  /**
   * Initialise the client's default value, ensuring the required values are
   * present
   *
   * @param  {Client} client the client object to set the defaults for
   * @param  {Object} options the associative array of options passed to the
   *  client on initialization
   */
  validateAndInitialize(client: any, options: any) {
    this.initializeClientCredentials(client, options);
    this.initializeLogger(client, options);
    this.initializeHost(client, options);
    this.initializeCustomApp(client, options);
    this.initializeHttp(client, options);

    this.warnOnUnrecognizedOptions(options, client, RECOGNIZED_OPTIONS);
  }

  // PRIVATE

  initializeClientCredentials(client: any, options: any) {
    client.clientId = this.initRequired('clientId', options);
    client.clientSecret = this.initRequired('clientSecret', options);
  }

  initializeLogger(client: any, options: any) {
    // @ts-expect-error ts-migrate(2345) FIXME: Type 'Console' is not assignable to type 'null'.
    client.logger    = this.initOptional('logger', options, console);
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"silent"' is not assignable to p... Remove this comment to see the full error message
    client.logLevel = this.initOptional('logLevel', options, 'silent');
  }

  initializeHost(client: any, options: any) {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '"test"' is not assignable to par... Remove this comment to see the full error message
    let hostname = this.initOptional('hostname', options, 'test');
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    client.host  = this.initOptional('host', options, HOSTS[hostname]);
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '443' is not assignable to parame... Remove this comment to see the full error message
    client.port  = this.initOptional('port', options, 443);
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'true' is not assignable to param... Remove this comment to see the full error message
    client.ssl   = this.initOptional('ssl', options, true);
  }

  initializeCustomApp(client: any, options: any) {
    client.customAppId = this.initOptional('customAppId', options);
    client.customAppVersion = this.initOptional('customAppVersion', options);
  }

  initializeHttp(client: any, options: any) {
    let network = client.ssl ? https : http;
    client.http = this.initOptional('http', options, network);
  }

  initRequired(key: any, options: any) {
    let result = this.initOptional(key, options);
    if (!result) throw new ArgumentError(`Missing required argument: ${key}`);
    return result;
  }

  initOptional(key: any, options: any, fallback = null) {
    let value = options[key];
    let envKey = `AMADEUS_${key.toUpperCase()}`;
    if (value == undefined) { value = options[key]; }
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    if (value == undefined) { value = process.env[envKey]; }
    if (value == undefined) { value = fallback; }
    return value;
  }

  warnOnUnrecognizedOptions(options: any, client: any, recognizedOptions: any) {
    Object.keys(options).forEach((key) => {
      if (recognizedOptions.indexOf(key) === -1 && client.warn()) {
        client.logger.log(`Unrecognized option: ${key}`);
      }
    });
    return null;
  }
}

// PRIVATE

class ArgumentError extends Error {
  constructor(message: any) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export default Validator;
