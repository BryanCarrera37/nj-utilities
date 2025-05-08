import { Regex } from '@/const-values';

describe('Regex', () => {
  describe('STRING_DATE', () => {
    it('should match valid DDMMYYYY dates', () => {
      expect(Regex.STRING_DATE.test('01012023')).toBeTruthy();
      expect(Regex.STRING_DATE.test('31122099')).toBeTruthy();
    });

    it('should not match invalid DDMMYYYY dates', () => {
      expect(Regex.STRING_DATE.test('20230101')).toBeFalsy();
      expect(Regex.STRING_DATE.test('12345678')).toBeFalsy();
      expect(Regex.STRING_DATE.test('')).toBeFalsy();
    });
  });

  describe('EMAIL', () => {
    it('should match valid email addresses', () => {
      expect(Regex.EMAIL.test('test@example.com')).toBeTruthy();
      expect(Regex.EMAIL.test('user.name+tag+sorting@example.com')).toBeTruthy();
    });

    it('should not match invalid email addresses', () => {
      expect(Regex.EMAIL.test('plainaddress')).toBeFalsy();
      expect(Regex.EMAIL.test('@missingusername.com')).toBeFalsy();
    });
  });

  describe('URL', () => {
    it('should match valid URLs', () => {
      expect(Regex.URL.test('http://example.com')).toBeTruthy();
      expect(Regex.URL.test('https://example.com/path?query=1')).toBeTruthy();
    });

    it('should not match invalid URLs', () => {
      expect(Regex.URL.test('example.com')).toBeFalsy();
      expect(Regex.URL.test('http:/example.com')).toBeFalsy();
    });
  });

  describe('UUID', () => {
    it('should match valid UUIDs', () => {
      expect(Regex.UUID.test('123e4567-e89b-12d3-a456-426614174000')).toBeTruthy();
    });

    it('should not match invalid UUIDs', () => {
      expect(Regex.UUID.test('123e4567-e89b-12d3-a456')).toBeFalsy();
    });
  });

  describe('PHONE', () => {
    it('should match valid phone numbers', () => {
      expect(Regex.PHONE.test('+123-456-7890')).toBeTruthy();
      expect(Regex.PHONE.test('123 456 7890')).toBeTruthy();
    });

    it('should not match invalid phone numbers', () => {
      expect(Regex.PHONE.test('123-abc-7890')).toBeFalsy();
    });
  });

  describe('POSTAL_CODE', () => {
    it('should match valid postal codes', () => {
      expect(Regex.POSTAL_CODE.test('12345')).toBeTruthy();
      expect(Regex.POSTAL_CODE.test('12345-6789')).toBeTruthy();
    });

    it('should not match invalid postal codes', () => {
      expect(Regex.POSTAL_CODE.test('1234')).toBeFalsy();
    });
  });

  describe('IP_ADDRESS', () => {
    it('should match valid IP addresses', () => {
      expect(Regex.IP_ADDRESS.test('192.168.1.1')).toBeTruthy();
      expect(Regex.IP_ADDRESS.test('255.255.255.255')).toBeTruthy();
    });

    it('should not match invalid IP addresses', () => {
      expect(Regex.IP_ADDRESS.test('999.999.999.999')).toBeFalsy();
    });
  });

  describe('CURRENCY', () => {
    it('should match valid currency values', () => {
      expect(Regex.CURRENCY.test('123')).toBeTruthy();
      expect(Regex.CURRENCY.test('123.45')).toBeTruthy();
    });

    it('should not match invalid currency values', () => {
      expect(Regex.CURRENCY.test('123.456')).toBeFalsy();
    });
  });

  describe('HEX_COLOR', () => {
    it('should match valid hex color codes', () => {
      expect(Regex.HEX_COLOR.test('#FFF')).toBeTruthy();
      expect(Regex.HEX_COLOR.test('#FFFFFF')).toBeTruthy();
    });

    it('should not match invalid hex color codes', () => {
      expect(Regex.HEX_COLOR.test('#FFFF')).toBeFalsy();
    });
  });

  describe('TIME', () => {
    it('should match valid time values', () => {
      expect(Regex.TIME.test('23:59')).toBeTruthy();
      expect(Regex.TIME.test('00:00')).toBeTruthy();
    });

    it('should not match invalid time values', () => {
      expect(Regex.TIME.test('24:00')).toBeFalsy();
    });
  });
});