export interface Bill {
  id: string;
  title: string;
  summary: string;
  status: string;
  issues: string[];
  chamber: string;
}

// Temporary fetchBills returning dummy data.
export const fetchBills = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _filters: Partial<Pick<Bill, 'status' | 'issues' | 'chamber'>>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _token?: string,
): Promise<Bill[]> => {
  // Placeholder for real API call using axios when backend ready.
  // 'filters' and 'token' are currently unused.
  return Promise.resolve([
    {
      id: '1',
      title: 'Education Reform Act',
      summary: 'A bill to reform education policy.',
      status: 'active',
      issues: ['Education'],
      chamber: 'House',
    },
    {
      id: '2',
      title: 'Healthcare Access Bill',
      summary: 'Improves access to healthcare.',
      status: 'passed',
      issues: ['Health'],
      chamber: 'Senate',
    },
    {
      id: '3',
      title: 'Infrastructure Funding',
      summary: 'Allocates funding for infrastructure projects.',
      status: 'in committee',
      issues: ['Infrastructure'],
      chamber: 'House',
    },
  ]);
};
