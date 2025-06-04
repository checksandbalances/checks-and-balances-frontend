import React from 'react';
import { FlatList } from 'react-native';
import BillItem from './BillItem';
import { Bill } from '../../api/billsApi';

type Props = {
  bills: Bill[];
  onSelectBill?: (bill: Bill) => void;
};

export default function BillList({ bills, onSelectBill }: Props) {
  return (
    <FlatList
      data={bills}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BillItem bill={item} onPress={() => onSelectBill?.(item)} />
      )}
    />
  );
}
