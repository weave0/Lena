import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Discover Activities</Text>
        <Text style={styles.subtitle}>Find people and activities near you</Text>
        
        {/* Map component will go here */}
        <View style={styles.mapPlaceholder}>
          <Text>Map View</Text>
        </View>

        {/* Activity feed will go here */}
        <View style={styles.feedPlaceholder}>
          <Text>Nearby Activities Feed</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
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
    marginBottom: 20,
  },
  mapPlaceholder: {
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  feedPlaceholder: {
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
