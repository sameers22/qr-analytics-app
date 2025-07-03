import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';

export default function AnalyticsScreen() {
  const { text, name } = useLocalSearchParams<{ text: string; name: string }>();

  if (!text || !name) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Missing QR data. Please go back and select a project.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>{name}</Title>
      <Text style={styles.label}>QR Code:</Text>
      <View style={styles.qrWrapper}>
        <QRCode value={text} size={200} />
      </View>

      <Text style={styles.label}>Encoded Content:</Text>
      <Text style={styles.content}>{text}</Text>

      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={() => {}} style={styles.button}>
          Customize
        </Button>
        <Button mode="outlined" onPress={() => {}} style={styles.button}>
          Track
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: '600',
  },
  content: {
    fontSize: 14,
    marginTop: 4,
    color: '#333',
    textAlign: 'center',
  },
  qrWrapper: {
    marginTop: 12,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 32,
  },
  button: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
