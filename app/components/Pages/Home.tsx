// app/pages/HomePage.tsx

import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../Button';

const Home = () => {
  const handleDigioLaunch = () => {
    Alert.alert('Launching Digio SDK soon...'); // Later replace this with Digio SDK logic
  };

  return (
    <View style={styles.container}>
      <Button title="Open Digio" onPress={handleDigioLaunch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
