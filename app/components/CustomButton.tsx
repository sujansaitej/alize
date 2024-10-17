// app/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const CustomButton: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.buttonHeight,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.borderRadius,
    marginVertical: SIZES.padding,
  },
  buttonText: {
    color: '#fff',
    fontSize: SIZES.fontSize,
    fontWeight: 'bold',
  },
});

export default CustomButton;
