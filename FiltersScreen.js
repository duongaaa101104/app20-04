// FiltersScreen.js
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  ScrollView, TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { products } from './Data';

export default function FiltersScreen({ navigation }) {
  // Lấy danh sách duy nhất từ dữ liệu
  const allCategories = [...new Set(products.map(p => p.category))];
  const allBrands = [...new Set(products.map(p => p.brand))];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const toggleItem = (item, list, setList) => {
    setList(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice('');
    setMaxPrice('');
  };

  const applyFilters = () => {
    navigation.navigate('SearchScreen', {
      filters: {
        categories: selectedCategories,
        brands: selectedBrands,
        minPrice: parseFloat(minPrice) || null,
        maxPrice: parseFloat(maxPrice) || null
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={resetFilters}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        {/* Categories */}
        <Text style={styles.section}>Categories</Text>
        {allCategories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={styles.checkbox}
            onPress={() => toggleItem(cat, selectedCategories, setSelectedCategories)}
          >
            <Ionicons
              name={selectedCategories.includes(cat) ? 'checkbox' : 'square-outline'}
              size={20}
              color="#2ecc71"
            />
            <Text style={styles.checkboxLabel}>{cat}</Text>
          </TouchableOpacity>
        ))}

        {/* Brands */}
        <Text style={styles.section}>Brand</Text>
        {allBrands.map(brand => (
          <TouchableOpacity
            key={brand}
            style={styles.checkbox}
            onPress={() => toggleItem(brand, selectedBrands, setSelectedBrands)}
          >
            <Ionicons
              name={selectedBrands.includes(brand) ? 'checkbox' : 'square-outline'}
              size={20}
              color="#2ecc71"
            />
            <Text style={styles.checkboxLabel}>{brand}</Text>
          </TouchableOpacity>
        ))}

        {/* Price Range */}
        <Text style={styles.section}>Price Range</Text>
        <View style={styles.priceRow}>
          <TextInput
            keyboardType="numeric"
            placeholder="Min"
            value={minPrice}
            onChangeText={setMinPrice}
            style={styles.priceInput}
          />
          <Text style={{ marginHorizontal: 10 }}>-</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Max"
            value={maxPrice}
            onChangeText={setMaxPrice}
            style={styles.priceInput}
          />
        </View>
      </ScrollView>

      {/* Apply Button */}
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', paddingHorizontal: 16,
    marginBottom: 10
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  resetText: { color: '#e74c3c', fontWeight: 'bold' },

  section: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  checkbox: {
    flexDirection: 'row', alignItems: 'center',
    marginVertical: 10
  },
  checkboxLabel: { marginLeft: 10 },
  priceRow: {
    flexDirection: 'row', alignItems: 'center',
    marginTop: 10
  },
  priceInput: {
    flex: 1, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 8, padding: 8, textAlign: 'center'
  },
  applyButton: {
    backgroundColor: '#2ecc71', padding: 16,
    alignItems: 'center', borderRadius: 10,
    margin: 16
  },
  applyText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
