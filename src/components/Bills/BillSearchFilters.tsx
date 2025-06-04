import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, TextInput } from 'react-native-paper';

export interface BillFilters {
  query: string;
  status: string;
  issues: string;
  chamber: string;
}

interface Props {
  filters: BillFilters;
  onChange: (filters: BillFilters) => void;
}

export default function BillSearchFilters({ filters, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search bills"
        value={filters.query}
        onChangeText={(query) => onChange({ ...filters, query })}
      />
      <TextInput
        label="Status"
        value={filters.status}
        onChangeText={(status) => onChange({ ...filters, status })}
        style={styles.input}
      />
      <TextInput
        label="Issues"
        value={filters.issues}
        onChangeText={(issues) => onChange({ ...filters, issues })}
        style={styles.input}
      />
      <TextInput
        label="Chamber"
        value={filters.chamber}
        onChangeText={(chamber) => onChange({ ...filters, chamber })}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    marginTop: 8,
  },
});
