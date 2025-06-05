import React from 'react';
import { FlatList } from 'react-native';
import BillItem, { Bill } from './BillItem';

interface Props {
  bills: Bill[];
  onSelect: (bill: Bill) => void;
}

export default function BillList({ bills, onSelect }: Props) {
  return (
    <FlatList
      data={bills}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <BillItem bill={item} onPress={onSelect} />
      )}
    />
  );
}
