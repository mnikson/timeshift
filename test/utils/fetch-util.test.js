// Utils
import { handleError, handleResponse, makeRequest } from '../../src/utils/fetch-util';

// Mocks
import { data } from '../__mock__/locationsData';

global.fetch = jest.fn();

describe('fetch util tests', () => {
  describe('handleResponse', () => {
    it('should throw an error', async () => {
      const errorMessage = 'Test error';
      const response = {
        ok: false,
        json: () => ({
          message: errorMessage
        })
      };

      try {
        await handleResponse(response);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual(errorMessage);
      }
    });

    it('should return response', async () => {
      const response = {
        ok: true,
        json: () => ({
          data
        })
      };

      try {
        const result = await handleResponse(response);

        expect(result).toEqual(response.json());
      } catch (err) {
        expect(err).not.toBeDefined();
      }
    });
  });

  describe('handleError', () => {
    it('should throw a default error', () => {
      try {
        handleError();
      } catch (err) {
        expect(err).toBeDefined();
        expect(err.message).toEqual('Server Error');
      }
    });

    it('should throw an error', () => {
      const error = new Error('Custom error message');

      try {
        handleError(error);
      } catch (err) {
        expect(err).toBeDefined();
        expect(err).toEqual(error);
      }
    });
  });

  describe('makeRequest', () => {
    it('should throw an error, url doesn\'t exists', async () => {
      try {
        await makeRequest();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });

    it('should return a data', async () => {
      // fetch.mockImplementationOnce(() => Promise.reject("API is down"));
      fetch.mockReturnValue(Promise.resolve({
        json: () => Promise.resolve(data)
      }));
      try {
        const url = 'http://localhost:9999';

        const response = await makeRequest(url);

        expect(response).toEqual(data);
      } catch (err) {
        expect(err).not.toBeDefined();
      }
    });
  });
});
