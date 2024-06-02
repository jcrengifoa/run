import { getAdults, getAdultsNames, getNames, pipe } from './run';

describe('run', () => {
  // PreArrange
  const users = [
    { name: 'Alice', age: 40 },
    { name: 'Bob', age: 30 },
    { name: 'Eve', age: 19 },
  ];

  describe('getAdults', () => {
    it('returns an array of users who are 20 years or older', () => {
      // Arrange
      const result = [
        { name: 'Alice', age: 40 },
        { name: 'Bob', age: 30 },
      ];

      // Act
      const adults = getAdults(users);

      // Assert
      expect(adults).toEqual(result);
    });
  });

  describe('getNames', () => {
    it('returns an array with the name of each user', () => {
      expect(getNames(users)).toEqual(['Alice', 'Bob', 'Eve']);
    });
  });

  describe('getAdultsNames', () => {
    it('returns an array with the name of the adult users', () => {
      expect(getAdultsNames(users)).toEqual(['Alice', 'Bob']);
    });
  });

  describe('pipe', () => {
    it('returns a function that applies a series of functions with its resultant values in order to reduce them', () => {
      // Arrange
      const fn1 = jest.fn().mockReturnValue(1);
      const fn2 = jest.fn().mockReturnValue(2);

      // Act
      const piped = pipe(fn1, fn2);
      const result = piped('x');

      // Assert
      expect(fn1).toHaveBeenCalledWith('x');
      expect(fn2).toHaveBeenCalledWith(1);
      expect(result).toBe(2);
    });
  });
});
