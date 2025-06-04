import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Bill } from '../../api/billsApi';

type Props = {
  bill: Bill;
  onPress?: () => void;
};

export default function BillItem({ bill, onPress }: Props) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Title title={bill.title} subtitle={`Status: ${bill.status}`} />
      <Card.Content>
        <Text variant="bodyMedium">{bill.summary}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 4,
  },
});
