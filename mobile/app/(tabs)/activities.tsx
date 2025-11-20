import { View, Text, StyleSheet } from 'react-native';

export default function ActivitiesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Activities</Text>
      <Text style={styles.subtitle}>Your upcoming and past activities</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});
