import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import debounce from 'lodash.debounce';
import BillList from '../components/Bills/BillList';
import BillSearchFilters, { SearchFilters } from '../components/Bills/BillSearchFilters';
import { Bill, fetchBills } from '../api/billsApi';

export default function BillListScreen() {
  const [filters, setFilters] = useState<SearchFilters>({ query: '' });
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(false);

  const loadBills = useCallback(async (f: SearchFilters) => {
    setLoading(true);
    try {
      const data = await fetchBills({
        status: f.status,
        issues: f.issues,
        chamber: f.chamber,
      });
      let results = data;
      if (f.query) {
        const q = f.query.toLowerCase();
        results = data.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.summary.toLowerCase().includes(q),
        );
      }
      setBills(results);
    } finally {
      setLoading(false);
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedLoad = useCallback(debounce(loadBills, 300), [loadBills]);

  useEffect(() => {
    debouncedLoad(filters);
    return () => {
      debouncedLoad.cancel();
    };
  }, [filters, debouncedLoad]);

  return (
    <View style={styles.container}>
      <BillSearchFilters initialFilters={filters} onChange={setFilters} />
      {loading ? <ActivityIndicator /> : <BillList bills={bills} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
