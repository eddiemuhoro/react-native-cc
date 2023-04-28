import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../../constants/constants'; 
const ProductDetailsScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}product/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <View >

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Button style={{width:'100%'}} title="Add to Cart" onPress={() => {}} />

      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Related Products</Text>
        
      </View>
    </View>
  
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    minHeight: Dimensions.get('window').height + 100, // add 100 for the related products section

  },
  productImage: {
    width: '100%',
    height: 400,
    marginBottom: 10,
    objectFit: 'contain',
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: '#999',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
  },

});

export default ProductDetailsScreen;
