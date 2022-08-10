import { UrlId } from '../../src/models/UrlId';
import { UrlIdTooShortError } from '../../src/errors/UrlIdTooShortError';

describe('UrlId Test', () => {
  it('should create an instance of UrlId class', () => {
    expect(new UrlId('1233432abc')).toBeInstanceOf(UrlId);
  });
  it('should throw an Error if the urlId has less than 10 chars', () => {
    expect(() => new UrlId('123456')).toThrow(UrlIdTooShortError);
  });
});
