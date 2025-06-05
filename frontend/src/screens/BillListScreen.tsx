import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BillList from '../components/Bills/BillList';
import BillSearchFilters, { BillFilters } from '../components/Bills/BillSearchFilters';
import { Bill } from '../components/Bills/BillItem';
import { fetchBills } from '../api/billsApi';
import debounce from 'lodash.debounce';

export default function BillListScreen() {
  const [filters, setFilters] = useState<BillFilters>({
    query: '',
    status: '',
    issues: '',
    chamber: '',
  });
  const [bills, setBills] = useState<Bill[]>([]);

  const loadBills = async (f: BillFilters) => {
    const res = await fetchBills(f, 'fake-token');
    setBills(res.data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedLoad = React.useCallback(debounce(loadBills, 300), []);

  useEffect(() => {
    debouncedLoad(filters);
  }, [filters, debouncedLoad]);

  return (
    <View style={styles.container}>
      <BillSearchFilters filters={filters} onChange={setFilters} />
      <BillList bills={bills} onSelect={(bill) => { console.log(bill); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
