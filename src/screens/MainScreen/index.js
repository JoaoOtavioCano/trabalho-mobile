import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const MainScreen = ({ navigation }) => {
  const transactions = [
    { id: '1', bank: 'Bank of generics', amount: '- R$5,000.00', date: 'Hoje' },
    { id: '2', bank: 'Bank of generics', amount: '+ R$256.00', date: 'Hoje' },
    { id: '3', bank: 'Bank of generics', amount: '- R$399.99', date: 'Hoje' },
    { id: '4', bank: 'Bank of generics', amount: '+ R$2,432.56', date: 'Ontem' },
  ];

  const chartData = {
    labels: ['Alimentação', 'Assinaturas', 'Investimentos'],
    datasets: [
      {
        data: [100, 20, 0],
      },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <MaterialCommunityIcons name="bank" size={24} color="black" />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionBank}>{item.bank}</Text>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greeting}>Bem-vindo, Usuário!</Text>
            </View>

            <View style={styles.summaryContainer}>
              <View style={styles.summaryHeader}>
                <Text style={styles.summaryTitle}>1 Conta Bancária</Text>
                <TouchableOpacity onPress={() => navigation.navigate('BankAccounts')}>
                  <Ionicons name="chevron-forward" size={24} color="orange" />
                </TouchableOpacity>
              </View>
              <Text style={styles.totalBalance}>Saldo Total</Text>
              <Text style={styles.balanceAmount}>R$3,566.88</Text>
              <BarChart
                data={chartData}
                width={Dimensions.get('window').width - 32}
                height={220}
                chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>

          <View style={styles.budgetContainer}>
            <View style={styles.transactionHeader}>
              <Text style={styles.transactionTitle}>Orçamentos</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Budgets')}>
                <Ionicons name="chevron-forward" size={24} color="orange" />
              </TouchableOpacity>
            </View>
            <View style={styles.budgetHeader}>
              <Ionicons name="fast-food" size={24} color="red" />
              <Text style={styles.budgetText}>Alimentação</Text>
              <Text style={styles.budgetAmount}>R$100 restantes</Text>
            </View>
            <View style={styles.budgetHeader}>
              <MaterialIcons name="ondemand-video" size={24} color="blue" />
              <Text style={styles.budgetText}>Assinaturas</Text>
              <Text style={styles.budgetAmount}>R$20 restantes</Text>
            </View>
            <View style={styles.budgetHeader}>
              <FontAwesome5 name="money-bill" size={24} color="green" />   
              <Text style={styles.budgetText}>Investimentos</Text>
              <Text style={styles.budgetAmount}>R$0 restantes</Text>
            </View>
          </View>

            <View style={styles.transactionContainer}>
              <View style={styles.transactionHeader}>
                <Text style={styles.transactionTitle}>Histórico de Transações</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
                  <Ionicons name="chevron-forward" size={24} color="orange" />
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
        renderItem={renderItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddTransaction')}>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#1A272F',
  },
  greetingContainer: {
    paddingVertical: 10,
    backgroundColor: '#1A272F',
  },
  greeting: {
    fontSize: 24,
    marginLeft: 22,
    color: '#fff',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalBalance: {
    fontSize: 16,
    color: 'gray',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  budgetContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  budgetText: {
    fontSize: 16,
  },
  budgetAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  transactionItem: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  transactionDetails: {
    marginLeft: 16,
  },
  transactionBank: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionAmount: {
    fontSize: 16,
    color: 'gray',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
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

export default MainScreen;
