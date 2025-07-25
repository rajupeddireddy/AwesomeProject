// app/pages/HomePage.tsx

import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../Button';
import {
  Digio,
  DigioConfig,
  GatewayEvent,
  Environment,
  ServiceMode,
} from '@digiotech/react-native';

const Home = () => {
  const config: DigioConfig = {
    environment: Environment.PRODUCTION, // or Environment.SANDBOX
    serviceMode: ServiceMode.OTP,
    logo: 'https://yourdomain.com/logo.png', // Optional
    theme: {
      primaryColor: '#007AFF',
      secondaryColor: '#000000',
    },
  };

  const digio = new Digio(config);

  useEffect(() => {
    const listener = digio.addGatewayEventListener((event: GatewayEvent) => {
      console.log('Digio Event:', event);
    });

    return () => {
      listener.remove();
    };
  }, []);

  const triggerDigio = async () => {
    const documentId = 'YOUR_DOCUMENT_ID';
    const identifier = '9493613197'; // or phone number
    const tokenId = 'YOUR_TOKEN_ID_FROM_DIGIO';

    try {
      const response = await digio.start(documentId, identifier, tokenId);
      console.log('Digio response:', response);
    } catch (e) {
      console.error('Digio error:', e);
    }
  };

  const handleDigioLaunch = () => {
    Alert.alert('Launching Digio SDK soon...'); // Later replace this with Digio SDK logic
  };

  return (
    <View style={styles.container}>
      <Button title="Open Digio" onPress={triggerDigio} />
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
