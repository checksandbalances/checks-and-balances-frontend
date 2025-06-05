// Placeholder implementations return dummy data until backend is available

export const fetchUserInfo = async (_token: string) => {
  // TODO: replace with real API call
  void _token;
  return Promise.resolve({
    data: {
      id: 1,
      email: 'demo@example.com',
      name: 'Demo User',
    },
  });
};

export const fetchUserNotifications = async (_token: string) => {
  // TODO: replace with real API call
  void _token;
  return Promise.resolve({
    data: [
      { id: '1', message: 'Bill HR123 was updated.' },
      { id: '2', message: 'Rep Jane Doe voted on SB456.' },
    ],
  });
};
