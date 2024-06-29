import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // npm install @react-native-picker/picker
import { Ionicons } from '@expo/vector-icons'; // npm install @expo/vector-icons

const AddBudgetScreen = ({ navigation }) => {

  const [budgetName, setBudgetName] = useState('');
  const [budgetFrequency, setBudgetFrequency] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddBudget = () => {
    if (!budgetName.trim() || !budgetFrequency.trim() || !amount.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de adicionar budget
    Alert.alert('Sucesso', 'Orçamento Adicionado!');
    navigation.navigate('Budgets');
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
        <Text style={styles.headerTitle}>ADICIONAR NOVO ORÇAMENTO</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Orçamento"
          placeholderTextColor="#aaa"
          value={budgetName}
          onChangeText={text => setBudgetName(text)}
        />
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Frequência:</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={budgetFrequency}
              style={styles.picker}
              onValueChange={(itemValue) => setBudgetFrequency(itemValue)}
            >
              <Picker.Item label="[vazio]" value="" color="#aaa" />
              <Picker.Item label="Diário" value="diario" color="black" />
              <Picker.Item label="Semanal" value="semanal" color="black" />
              <Picker.Item label="Mensal" value="mensal" color="black" />
              <Picker.Item label="Anual" value="anual" color="black" />
            </Picker>
          </View>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TouchableOpacity
          style={[styles.addButton, (!budgetName.trim() || !budgetFrequency.trim() || !isValidAmount(amount)) && { backgroundColor: '#ccc' }]}
          onPress={handleAddBudget}
          disabled={!budgetName.trim() || !budgetFrequency.trim() || !isValidAmount(amount)}
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
    paddingRight: 20,
  },
  pickerWrapper: {
    paddingLeft: 70, 
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

export default AddBudgetScreen;
