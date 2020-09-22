import Validator from '../../../src/amadeus/client/validator';

const validator = new Validator();

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Validator', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
  it('should exports the functions', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(validator).not.toBe(null);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.initRequired', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should return the expected values', () => {
      let options = {
        'test1' : '1'
      };
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      process.env.AMADEUS_TEST2 = '2';
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initRequired('test1', options)).toBe('1');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initRequired('test2', options)).toBe('2');
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      process.env.AMADEUS_TEST2 = undefined;
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should throw error if key not found', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(() => {
        validator.initRequired('test3', {});
      }).toThrowError();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.initOptional', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should return the expected values', () => {
      let options = {
        'test1' : '1'
      };
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      process.env.AMADEUS_TEST2 = '2';
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initOptional('test1', options)).toBe('1');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initOptional('test2', options)).toBe('2');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initOptional('test3', options)).toBe(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.initOptional('test4', options, '4')).toBe('4');
      // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      process.env.AMADEUS_TEST2 = undefined;
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('.warnOnUnrecognizedOptions', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should return null if all keys are recognised', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions = ['clientId'];
      let client = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        'logger' : { 'log' : jest.fn() },
        'warn' : () => { return true; }
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.warnOnUnrecognizedOptions(options, client, recognizedOptions)).toBe(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logger.log).not.toHaveBeenCalled();
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should log a warning if the key was not recognized', () => {
      let options = { 'clientId' : '123' };
      let recognizedOptions: any = [];
      let client = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        'logger' : { 'log' : jest.fn() },
        'warn' : () => { return true; }
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(validator.warnOnUnrecognizedOptions(options, client, recognizedOptions)).toBe(null);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(client.logger.log).toHaveBeenCalledWith('Unrecognized option: clientId');
    });
  });
});
