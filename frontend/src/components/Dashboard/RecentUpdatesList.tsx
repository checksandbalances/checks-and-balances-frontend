import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export interface UpdateItem {
  id: string;
  message: string;
}

interface Props {
  updates: UpdateItem[];
}

export default function RecentUpdatesList({ updates }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Updates</Text>
      <FlatList
        data={updates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.message}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  item: {
    paddingVertical: 4,
  },
});
