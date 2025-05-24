import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { supabase } from '@/supabase/supabase';
import { Database } from '@/DraftSchema_0416';
import { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

type Restaurant = Database['public']['Tables']['restaurants']['Row'];

export default function RestaurantDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantDetails();
  }, [id]);

  const fetchRestaurantDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setRestaurant(data);
    } catch (error) {
      console.error('Error fetching restaurant:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !restaurant) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const hasLocation = restaurant.latitude != null && restaurant.longitude != null;

  return (
    <>
      <Stack.Screen
        options={{
          title: restaurant.name,
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <FontAwesome name="chevron-left" size={20} color="#007AFF" />
            </Pressable>
          ),
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: restaurant.image_src || 'https://via.placeholder.com/400x300' }}
            style={styles.image}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.name}>{restaurant.name}</Text>
          
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <FontAwesome name="star" size={20} color="#FFD700" />
              <Text style={styles.ratingText}>
                {restaurant.average_rating?.toFixed(1) || 'New'}
              </Text>
            </View>
            <Text style={styles.priceRange}>{restaurant.price_range}</Text>
          </View>

          <View style={styles.cuisineContainer}>
            {restaurant.cuisine_type?.map((cuisine, index) => (
              <View key={index} style={styles.cuisineTag}>
                <Text style={styles.cuisineText}>{cuisine}</Text>
              </View>
            ))}
          </View>

          <View style={styles.locationContainer}>
            <FontAwesome name="map-marker" size={20} color="#666" />
            <Text style={styles.locationText}>
              {restaurant.address}, {restaurant.city}
            </Text>
          </View>

          {hasLocation && (
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: restaurant.latitude as number,
                  longitude: restaurant.longitude as number,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: restaurant.latitude as number,
                    longitude: restaurant.longitude as number,
                  }}
                  title={restaurant.name}
                  description={restaurant.address}
                />
              </MapView>
            </View>
          )}

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.description}>
              {restaurant.description || 'No description available.'}
            </Text>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  priceRange: {
    fontSize: 16,
    color: '#666',
  },
  cuisineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  cuisineTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  cuisineText: {
    fontSize: 14,
    color: '#666',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  locationText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 8,
  },
  infoSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  hours: {
    fontSize: 16,
    color: '#666',
  },
  backButton: {
    padding: 8,
    marginLeft: 8,
  },
  mapContainer: {
    height: 200,
    marginVertical: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); 