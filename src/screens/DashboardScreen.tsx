import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeCard from '../components/Dashboard/WelcomeCard';
import RecentUpdatesList, { UpdateItem } from '../components/Dashboard/RecentUpdatesList';
import { fetchUserInfo, fetchUserNotifications } from '../api/userApi';

export default function DashboardScreen() {
  const [name, setName] = useState('');
  const [updates, setUpdates] = useState<UpdateItem[]>([]);

  useEffect(() => {
    const load = async () => {
      const userRes = await fetchUserInfo('fake-token');
      setName(userRes.data.name || userRes.data.email);
      const updatesRes = await fetchUserNotifications('fake-token');
      setUpdates(updatesRes.data);
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <WelcomeCard name={name} />
      <RecentUpdatesList updates={updates} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
