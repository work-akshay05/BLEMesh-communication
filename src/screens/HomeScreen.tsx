import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StatusIndicator } from '../components/StatusIndicator';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>BLE Offline Chat</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Bluetooth</Text>
        <Text style={styles.value}>Not checked yet</Text>
      </View>

      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          BLE scanner will be implemented in Step 2
        </Text>
      </View>

      <StatusIndicator label="Project setup complete" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f6f8fa',
  },
  title: {
    marginBottom: 28,
    color: '#17212b',
    fontSize: 28,
    fontWeight: '700',
  },
  card: {
    marginBottom: 16,
    padding: 18,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  label: {
    marginBottom: 6,
    color: '#667085',
    fontSize: 14,
  },
  value: {
    color: '#17212b',
    fontSize: 17,
  },
  placeholder: {
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#d0d5dd',
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  placeholderText: {
    color: '#667085',
    textAlign: 'center',
    fontSize: 16,
  },
});
