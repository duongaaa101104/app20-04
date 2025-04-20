import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity,
  StyleSheet, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { products } from './Data';
import { useIsFocused } from '@react-navigation/native';

export default function SearchScreen({ navigation, route }) {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    minPrice: null,
    maxPrice: null
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params?.filters) {
      setFilters(route.params.filters);
    }
  }, [isFocused, route.params]);

  const filteredProducts = products.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      !filters?.categories?.length || filters.categories.includes(item.category);

    const matchesBrand =
      !filters?.brands?.length || filters.brands.includes(item.brand);

    const matchesPrice =
      (!filters?.minPrice || item.price >= filters.minPrice) &&
      (!filters?.maxPrice || item.price <= filters.maxPrice);

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#999" style={{ marginRight: 6 }} />
          <TextInput
            placeholder="search"
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1 }}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FiltersScreen')}>
          <Ionicons name="options" size={24} color="#2ecc71" />
        </TouchableOpacity>
      </View>

      {/* Results */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 10,
    backgroundColor: '#f9f9f9'
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    position: 'relative'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  price: {
    color: '#2ecc71',
    fontWeight: 'bold',
    marginTop: 4,
    fontSize: 13
  },
  addButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 6
  }
});
