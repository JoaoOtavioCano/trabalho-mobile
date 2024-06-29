import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // npm install @expo/vector-icons

const AddBankScreen = ({ navigation }) => {

  const [nomeBanco, setNomeBanco] = useState('');
  const [saldo, setSaldo] = useState('');

  const handleAddBank = () => {
    if (!nomeBanco.trim() || !saldo.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de adicionar banco
    Alert.alert('Sucesso', 'Conta Bancária Adicionada!');
    navigation.navigate('BankAccounts');
  };


  const isValidSaldo = (value) => {
    // Expressão regular para validar saldo (aceita números inteiros e decimais)
    return /^[0-9]+([,.][0-9]+)?$/.test(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ADICIONAR NOVO BANCO</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Banco"
          placeholderTextColor="#aaa"
          value={nomeBanco}
          onChangeText={text => setNomeBanco(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Saldo"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={saldo}
          onChangeText={text => setSaldo(text)}
        />
        <TouchableOpacity
          style={[styles.addButton, (!nomeBanco.trim() || !saldo.trim() || !isValidSaldo(saldo)) && { backgroundColor: '#ccc' }]}
          onPress={handleAddBank}
          disabled={!nomeBanco.trim() || !isValidSaldo(saldo)}
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

export default AddBankScreen;
