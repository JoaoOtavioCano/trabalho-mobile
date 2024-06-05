import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação (pode ser substituída com a lógica real)
    if (email === 'user@example.com' && password === 'password') {
      Alert.alert('Login Successful');
      // Navegar para a tela principal após login bem-sucedido
      navigation.navigate('Main');
    } else {
      Alert.alert('Invalid email or password');
    }
  };

  return (
        <View style={styles.container}>
            <Image 
        source={require('./assets/login-background.png')} 
        style={styles.image}
        />
            <Text style={styles.title}>Sign In</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 360,
    height: 173,
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
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
    borderRadius: 8,
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
