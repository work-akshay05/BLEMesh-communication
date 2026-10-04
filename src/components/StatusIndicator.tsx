import { StyleSheet, Text, View } from 'react-native';

type StatusIndicatorProps = {
  label: string;
};

export function StatusIndicator({ label }: StatusIndicatorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: '#16803c',
  },
  label: {
    color: '#16803c',
    fontSize: 15,
    fontWeight: '600',
  },
});
