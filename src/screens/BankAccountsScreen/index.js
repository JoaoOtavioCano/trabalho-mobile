import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const BankAccountsScreen = ({ navigation }) => {
  const bankAccounts = [
    { id: '1', name: 'A Bank Account' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bankAccountItem}>
      <MaterialCommunityIcons name="bank" size={24} color="black" />
      <Text style={styles.bankAccountName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BANCOS</Text>
      </View>

      <FlatList
        data={bankAccounts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />

      <TouchableOpacity style={styles.addAccountButton} onPress={() => navigation.navigate('AddBank')}>
        <Text style={styles.addAccountText}>+ Adicionar nova conta bancária</Text>
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
  bankAccountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  bankAccountName: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
  addAccountButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  addAccountText: {
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

export default BankAccountsScreen;
