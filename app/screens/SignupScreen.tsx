import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Ionicons } from '@expo/vector-icons'; // For icons like date and back arrow
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

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Sign up</Text>

      {/* Already have account */}
      <Text style={styles.switchText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
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
        <Ionicons name="calendar" size={20} color="gray" style={styles.iconRight} />
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Set Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Ionicons name="eye-off" size={20} color="gray" style={styles.iconRight} />
      </View>

      {/* Register Button */}
      <CustomButton title="Register" onPress={() => { /* Handle registration */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFBB33', // Set the background color to match the image you shared
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
  },
  loginLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    justifyContent: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  passwordInput: {
    flex: 1,
    height: 48,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
  dateTimePicker: {
    width: '100%',
  },
});

export default SignupScreen;
