import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../../lib/supabase';
import { useSession } from '../../../App';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimrPassword, setcConfimrPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name,
          username: email,
        }
      }
    });
    setLoading(false);

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      // Verificar se a sessão está ativa antes de navegar
      if (session) {
        Alert.alert('Sucesso', 'Cadastro realizado!');
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'Falha ao criar sessão. Tente novamente.');
      }
    }
  }

  const handleAccountCreation = () => {
    if (emailRegex.test(email)) {
      if (password === confimrPassword) {
        signUpWithEmail();
      } else {
        Alert.alert('Erro', 'Campos "Senha" e "Confirme senha" estão diferentes!');
      }
    } else {
      Alert.alert('Erro', 'E-mail inválido!');
    }
  };

  return (
    <View style={styles.container}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    position: 'relative',
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
    borderRadius: 10,
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
