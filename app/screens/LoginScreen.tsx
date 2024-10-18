import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import CustomButton from '../components/CustomButton';
import { COLORS, SIZES } from '../theme'; // Update your COLORS and SIZES accordingly

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here.
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log in</Text>

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton title="Login" onPress={handleLogin} />

        <Text style={styles.switchText}>
          Don't have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9800', // Replace gradient with solid color
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  switchText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  linkText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
