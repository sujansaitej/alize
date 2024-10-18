import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import CustomButton from '../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns'; // Optional for formatting date nicely

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

interface Props {
  navigation: SignupScreenNavigationProp;
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const onChangeDate = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(false);
    setBirthdate(currentDate);
  };

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const handleSignup = () => {
    // Add signup logic here
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Sign Up</Text>

        {/* Already have an account? */}
        <Text style={styles.switchText}>
          Already have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>

        {/* Full Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Birthdate Picker */}
        <TouchableOpacity onPress={showPicker} style={styles.input}>
          <Text>{format(birthdate, 'dd/MM/yyyy')}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={birthdate}
            mode="date"
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={onChangeDate}
          />
        )}

        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Register Button */}
        <CustomButton title="Register" onPress={handleSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9800', // Consistent background color
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
    elevation: 5, // Shadow effect for Android
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  linkText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default SignupScreen;
