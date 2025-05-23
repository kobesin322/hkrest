import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Database } from '@/DraftSchema_0416';

type Restaurant = Database['public']['Tables']['restaurants']['Row'];

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: restaurant.image_src }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.cuisine}>
          {restaurant.cuisine_type?.join(', ')}
        </Text>
        <Text style={styles.address}>
          {restaurant.address}, {restaurant.city}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            ★ {restaurant.average_rating?.toFixed(1) || 'New'}
          </Text>
          <Text style={styles.priceRange}>{restaurant.price_range}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cuisine: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  priceRange: {
    fontSize: 14,
    color: '#666',
  },
}); 