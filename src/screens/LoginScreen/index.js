import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação (pode ser substituída com a lógica real)
    if (email === 'teste@gmail.com' && password === '12345') {
      Alert.alert('Sucesso', 'Login bem sucedido!');
      // Navegar para a tela principal após login bem-sucedido
      navigation.navigate('Main');
    } else {
      Alert.alert('Erro', 'E-mail ou Senha inválidos!');
    }
  };

  return (
        <View style={styles.container}>
            <Image 
        source={require('../../assets/login-background.png')} 
        style={styles.image}
        />
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerText}>Não possue uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  form: {
    position:'relative',
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  input: {
    height: 50,
    borderBottomColor: '#1A272F',
    borderBottomWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1A272F',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: '#DE8011',
    textAlign: 'center',
  },
});

export default LoginScreen;
