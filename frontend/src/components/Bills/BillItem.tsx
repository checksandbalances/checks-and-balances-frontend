import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface Bill {
  id: string;
  title: string;
  status: string;
}

interface Props {
  bill: Bill;
  onPress?: (bill: Bill) => void;
}

export default function BillItem({ bill, onPress }: Props) {
  return (
    <TouchableOpacity onPress={() => onPress?.(bill)}>
      <View style={styles.container}>
        <Text style={styles.title}>{bill.title}</Text>
        <Text style={styles.status}>{bill.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
});
