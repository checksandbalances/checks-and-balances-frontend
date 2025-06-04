import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookmarksScreen() {
  return (
    <View style={styles.container}>
      <Text>Bookmarks Screen</Text>
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
