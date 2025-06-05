import { fetchBills } from './billsApi';

describe('fetchBills', () => {
  it('returns dummy data', async () => {
    const result = await fetchBills({}, '');
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBeGreaterThan(0);
  });
});
