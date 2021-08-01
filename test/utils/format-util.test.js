// Libs
import MockDate from 'mockdate';

// Utils
import { formatDate } from '../../src/utils/format-util';

// Mock
const date = new Date('1969-07-20 20:17:00');

describe('format util tests', () => {
  afterEach(() => {
    MockDate.reset();
  });

  describe('formatDate', () => {
    it('should return a default date format', () => {
      MockDate.set(date);

      const formattedDate = formatDate(new Date());

      expect(formattedDate).toBe('8:17 pm (+01:00)');
    });

    it('should return a today date', () => {
      MockDate.set(new Date('1969-07-21 19:32:11'));

      const formattedDate = formatDate(new Date());

      expect(formattedDate).toBe('7:32 pm (+01:00)');
    });

    it('should return a date with custom format', () => {
      MockDate.set(date);

      const formattedDate = formatDate(new Date(), 'DD.MM.YYYY');

      expect(formattedDate).toBe('20.07.1969');
    });
  });
});
