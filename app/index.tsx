import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { supabase } from '../supabase/supabase';

export default function HomeScreen() {
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [error, setError] = useState<string | null>(null);
  const [connectionDetails, setConnectionDetails] = useState<string>('');

  useEffect(() => {
    checkSupabaseConnection();
  }, []);

  const checkSupabaseConnection = async () => {
    try {
      console.log('Attempting to connect to Supabase...');
      
      // Test the connection with a simple query
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .limit(1);

      if (error) {
        console.error('Supabase Error:', error);
        throw error;
      }

      setConnectionStatus('success');
      setConnectionDetails('Successfully connected to Supabase');
      console.log('Connection successful! Data:', data);

    } catch (err) {
      setConnectionStatus('error');
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      setConnectionDetails(`Error details: ${JSON.stringify(err, null, 2)}`);
      console.error('Connection failed:', err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to HK Restaurant</Text>
      <Text style={styles.subtitle}>Discover amazing dining experiences</Text>

      {/* Connection Status Section */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Supabase Connection Status:</Text>
        {connectionStatus === 'checking' && (
          <Text style={styles.statusChecking}>Checking connection...</Text>
        )}
        {connectionStatus === 'success' && (
          <Text style={styles.statusSuccess}>✓ Connected to Supabase</Text>
        )}
        {connectionStatus === 'error' && (
          <View>
            <Text style={styles.statusError}>✗ Connection Error</Text>
            <Text style={styles.errorDetails}>{error}</Text>
            <Text style={styles.errorDetails}>{connectionDetails}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  statusContainer: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  statusChecking: {
    color: '#666',
  },
  statusSuccess: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  statusError: {
    color: '#f44336',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  errorDetails: {
    color: '#666',
    fontSize: 12,
    marginTop: 4,
  }
}); 