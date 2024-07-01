import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useSession } from '../../../App';
import { supabase } from '../../../lib/supabase';

const BudgetsScreen = ({ navigation }) => {
  const session = useSession();
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    async function fetchBudgets() {
      const { data, error } = await supabase
        .from('budgets')
        .select()
        .eq('user_id', session?.user.id);

      if (error) {
        Alert.alert('Algo deu errado. Tente novamente.');
      } else {
        // Ícone padrão
        const defaultIcon = <FontAwesome5 name="money-bill" size={24} color="green" />;

        // Mapeando os dados da resposta e adicionando um ícone padrão
        const budgetsData = data.map((item, index) => ({
          id: (index + 1).toString(), // Gerando IDs dinamicamente a partir do índice
          name: item.budget_name,
          amountLeft: 'R$' + item.budget_limit_value,
          icon: defaultIcon,
        }));

        setBudgets(budgetsData);
      }
    }

    fetchBudgets();
  }, [session]);

  const renderItem = ({ item }) => (
    <View style={styles.budgetItem}>
      {item.icon}
      <Text style={styles.budgetName}>{item.name}</Text>
      <Text style={styles.budgetAmount}>{item.amountLeft} restantes</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ORÇAMENTOS</Text>
      </View>

      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />

      <TouchableOpacity style={styles.addBudgetButton} onPress={() => navigation.navigate('AddBudget')}>
        <Text style={styles.addBudgetText}>+ Adicionar novo orçamento</Text>
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
  budgetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  budgetName: {
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
  budgetAmount: {
    marginLeft: 'auto',
    fontSize: 16,
    color: '#333',
  },
  addBudgetButton: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  addBudgetText: {
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

export default BudgetsScreen;
