import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RepresentativesScreen() {
  return (
    <View style={styles.container}>
      <Text>Representatives Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
