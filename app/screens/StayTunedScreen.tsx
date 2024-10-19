import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// StayTunedScreen Component
const StayTunedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/stay_tuned.png')} // Ensure the image is in the correct folder
        style={styles.image}
      />
      <Text style={styles.pendingText}>Admin Approval Pending</Text>
      <Text style={styles.updateText}>Please Check Back later for Updates!</Text>
    </View>
  );
};

// Styles for the StayTunedScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500', // Orange background like the image
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pendingText: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  updateText: {
    fontSize: 16,
    color: '#000',
  },
});

export default StayTunedScreen;
