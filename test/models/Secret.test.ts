import { Secret } from '../../src/models/Secret';
import { SecretTooShortError } from '../../src/errors/SecretTooShortError';

describe('Secret Test', () => {
  it('should create an instance of Secret class', () => {
    expect(new Secret('432abc')).toBeInstanceOf(Secret);
  });
  it('should throw an Error if the secret has less than 4 chars', () => {
    expect(() => new Secret('123')).toThrow(SecretTooShortError);
  });
});
