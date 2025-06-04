import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
}

export default function WelcomeCard({ name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
