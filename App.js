import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { supabase } from './lib/supabase';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MainScreen from './src/screens/MainScreen';
import BankAccountsScreen from './src/screens/BankAccountsScreen';
import AddBankScreen from './src/screens/AddBankScreen';
import BudgetsScreen from './src/screens/BudgetsScreen';
import AddBudgetScreen from './src/screens/AddBudgetScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import AddTransactionScreen from './src/screens/AddTransactionScreen';

const Stack = createStackNavigator();

const SessionContext = createContext(null);

export const useSession = () => useContext(SessionContext);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Main" 
            component={MainScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="BankAccounts" 
            component={BankAccountsScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="AddBank" 
            component={AddBankScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Budgets" 
            component={BudgetsScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="AddBudget" 
            component={AddBudgetScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Transactions" 
            component={TransactionsScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="AddTransaction" 
            component={AddTransactionScreen} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionContext.Provider>
  );
}
