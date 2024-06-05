import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimrPassword, setcConfimrPassword] = useState('');
  const [name, setName] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const handleAccountCreation = () => {
    if ( emailRegex.test(email)) {
        if (password === confimrPassword){
            navigation.navigate('Main');
        }else {
            Alert.alert('Campos "Senha" e "Confirme senha" estão diferentes!');
        }
    } else {
      Alert.alert('Email inválido!');
    }
  };

  return (
        <View 
        style={styles.container}
        >
            <Image 
            source={require('../../assets/login-background.png')} 
            style={styles.image}
            />
            <View style={styles.form}>
                <Text style={styles.title}>Criar conta</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#aaa"
                    autoCapitalize="none"
                    value={name}
                    onChangeText={setName}
                    />
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
                    placeholder="Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    />
                    <TextInput
                    style={styles.input}
                    placeholder="Confirme a senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                    value={confimrPassword}
                    onChangeText={setcConfimrPassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAccountCreation}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signInText}>Possue uma conta? Entre</Text>
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
    height: 35,
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
  signInText: {
    marginTop: 20,
    color: '#DE8011',
    textAlign: 'center',
  },
});

export default RegisterScreen;
