import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker
import { Ionicons } from '@expo/vector-icons'; // npm install @expo/vector-icons
import { supabase } from '../../../lib/supabase';
import { useSession } from '../../../App';

const AddTransactionScreen = ({ navigation }) => {

  const [transactionName, setTransactionName] = useState('');
  const [budgetType, setBudgetType] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [amount, setAmount] = useState('');
  const session = useSession();


  async function handleAddTransaction(){
    if (!transactionName.trim() || !budgetType.trim() || !amount.trim() || !bankAccount.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Tá mt estranho essa parte da transação, véi kkkkk

    // const { error } = await supabase
    // .from('transaction')
    // .insert({ user_id: session?.user?.id, budget_name: budgetName, budget_limit_value: amount})

    // if (error){
    //   Alert.alert('Erro', 'Erro ao inserir dados. Tente novamente.');
    //   navigation.navigate('Budgets');
    //   return;
    // }

    // Simulação de adicionar transação
    Alert.alert('Sucesso', 'Transação Adicionada!');
    navigation.navigate('Transactions');
  };

  const isValidAmount = (value) => {
    // Expressão regular para validar saldo (aceita números inteiros e decimais)
    return /^[0-9]+([,.][0-9]+)?$/.test(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ADICIONAR NOVA TRANSAÇÃO</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Transação"
          placeholderTextColor="#aaa"
          value={transactionName}
          onChangeText={text => setTransactionName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Tipo de Orçamento:</Text>
          <View style={styles.pickerWrapper1}>
            <Picker
              selectedValue={budgetType}
              style={styles.picker}
              onValueChange={(itemValue) => setBudgetType(itemValue)}
            >
              <Picker.Item label="[vazio]" value="" color="#aaa" />
              <Picker.Item label="Alimentação" value="alimentacao" color="black" />
              <Picker.Item label="Assinaturas" value="assinaturas" color="black" />
              <Picker.Item label="Investimentos" value="investimentos" color="black" />
            </Picker>
          </View>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Conta Bancária:</Text>
          <View style={styles.pickerWrapper2}>
            <Picker
              selectedValue={bankAccount}
              style={styles.picker}
              onValueChange={(itemValue) => setBankAccount(itemValue)}
            >
              <Picker.Item label="[vazio]" value="" color="#aaa" />
              <Picker.Item label="Bank of generics" value="1" color="black" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.addButton, (!transactionName.trim() || !budgetType.trim() || !bankAccount.trim() || !isValidAmount(amount)) && { backgroundColor: '#ccc' }]}
          onPress={handleAddTransaction}
          disabled={!transactionName.trim() || !budgetType.trim() || !bankAccount.trim() || !isValidAmount(amount)}
        >
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
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
  formContainer: {
    position: 'absolute',
    top: '20%',
    width: '100%',
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerContainer: {
    width: '100%',
    height: 40,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 16,
  },
  pickerWrapper1: {
    paddingLeft: 20, 
    borderBottomColor: '#ccc',
    borderBottomEndRadius: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  pickerWrapper2: {
    paddingLeft: 30, 
    borderBottomColor: '#ccc',
    borderBottomEndRadius: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  picker: {
    height: 40,
    width: '100%',
  },
  addButton: {
    width: '100%',
    backgroundColor: '#1A272F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
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

export default AddTransactionScreen;
