import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TransactionsScreen = ({ navigation }) => {
  const transactions = [
    { id: '1', name: 'Bank of generics', amount: '- R$5,000.00', date: 'Hoje', icon: <MaterialCommunityIcons name="bank" size={24} color="black" /> },
    { id: '2', name: 'Bank of generics', amount: '+ R$256.00', date: 'Hoje', icon: <MaterialCommunityIcons name="bank" size={24} color="black" /> },
    { id: '3', name: 'Bank of generics', amount: '- R$399.99', date: 'Hoje', icon: <MaterialCommunityIcons name="bank" size={24} color="black" /> },
    { id: '4', name: 'Bank of generics', amount: '+ R$2,432.56', date: 'Ontem', icon: <MaterialCommunityIcons name="bank" size={24} color="black" /> },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      {item.icon}
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TRANSAÇÕES</Text>
      </View>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />

      <TouchableOpacity style={styles.addTransactionButton} onPress={() => navigation.navigate('AddTransaction')}>
        <Text style={styles.addTransactionText}>+ Adicionar nova transação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingRight: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionName: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: 'gray',
  },
  transactionDate: {
    marginLeft: 'auto',
    fontSize: 14,
    color: 'gray',
  },
  addTransactionButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  addTransactionText: {
    fontSize: 16,
    color: 'orange',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#333',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabText: {
    color: 'orange',
    fontSize: 24,
  },
});

export default TransactionsScreen;
