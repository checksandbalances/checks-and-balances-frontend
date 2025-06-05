// Placeholder implementation returning dummy data until backend is available
// import axios from 'axios';
// const API_URL = 'https://example.com/api';

export interface BillFilters {
  query?: string;
  status?: string;
  issues?: string;
  chamber?: string;
}

export const fetchBills = async (_filters: BillFilters, _token: string) => {
  void _filters;
  void _token;
  // In the future, this will call:
  // const params = new URLSearchParams(_filters as Record<string, string>).toString();
  // return axios.get(`${API_URL}/bills/search/?${params}`, {
  //   headers: { Authorization: `Bearer ${_token}` },
  // });
  return Promise.resolve({
    data: [
      { id: '1', title: 'Education Reform Act', status: 'In Committee' },
      { id: '2', title: 'Healthcare Improvement Bill', status: 'Passed House' },
    ],
  });
};
