import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleSum = () => {
    const sum = Number(num1) + Number(num2);
    setResult(`O resultado é ${sum}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        label="Número 1"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Número 2"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleSum} style={styles.button}>
        Calcular Soma
      </Button>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    height: 25,
  },
  button: {
    marginTop: 5,
    height: 40,
    borderRadius: 6,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});