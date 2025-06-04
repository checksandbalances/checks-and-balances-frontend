import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export interface SearchFilters {
  query: string;
  status?: string;
  issues?: string;
  chamber?: string;
}

type Props = {
  initialFilters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
};

export default function BillSearchFilters({ initialFilters, onChange }: Props) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);

  const handleChange = (key: keyof SearchFilters, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onChange(updated);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Search"
        value={filters.query}
        onChangeText={(text) => handleChange('query', text)}
        style={styles.input}
      />
      <TextInput
        label="Status"
        value={filters.status}
        onChangeText={(text) => handleChange('status', text)}
        style={styles.input}
      />
      <TextInput
        label="Issues"
        value={filters.issues}
        onChangeText={(text) => handleChange('issues', text)}
        style={styles.input}
      />
      <TextInput
        label="Chamber"
        value={filters.chamber}
        onChangeText={(text) => handleChange('chamber', text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={() => onChange(filters)}>
        Apply Filters
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  input: {
    marginBottom: 8,
  },
});
