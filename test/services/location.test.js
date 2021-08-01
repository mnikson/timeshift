/**
 * @jest-environment jsdom
 */
// Services
import { fetchLocations } from '../../src/services/location';

// Mocks
import { data } from '../__mock__/locationsData';
import { makeRequest } from '../../src/utils/fetch-util';

jest.mock('../../src/utils/fetch-util');

describe('location service tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch locations', async () => {
    expect(true).toEqual(true);
    makeRequest.mockImplementation(() => {
      return Promise.resolve(data);
    });

    const response = await fetchLocations();

    expect(response).toEqual(data);
    expect(makeRequest).toHaveBeenCalledTimes(1);
  });
});
