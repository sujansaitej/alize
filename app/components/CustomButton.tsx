import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Add expo-linear-gradient for gradient effect

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
  isLoading?: boolean;  // To show a loading spinner
  icon?: React.ReactNode;  // To support icons
  disabled?: boolean;  // To disable the button when needed
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, isLoading = false, icon, disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, style, disabled && styles.disabled]} // Adjust the style when disabled
      disabled={disabled}  // Prevents button press when disabled
      activeOpacity={0.7} // For better touch feedback
    >
      {/* Gradient background */}
      <LinearGradient
        colors={['#3498db', '#2980b9']} // Blue gradient effect
        style={[styles.button, disabled && styles.disabled]} // Disable gradient when button is disabled
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* Icon (if present) */}
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        
        {/* Loading spinner if button is loading */}
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4, // Android shadow effect
  },
  button: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // To support icon and text together
  },
  iconContainer: {
    marginRight: 8, // Space between the icon and text
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#bdc3c7', // Light gray background for disabled button
    shadowOpacity: 0, // Remove shadow when disabled
    elevation: 0, // Remove shadow on Android when disabled
  },
});

export default CustomButton;
