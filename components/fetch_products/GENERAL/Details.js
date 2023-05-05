import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ userData, setUserData ] = useState(null);

  useEffect(()=>{
    //load data from async storage
    AsyncStorage.getItem('user')
    .then((data)=>{
      const user = JSON.parse(data);
      setUserData(user);
    })
    .catch((error)=>{
      console.log(error);
    }
    )
  }, [])

  console.log('====================================');
  console.log(userData);
  console.log('====================================');

  useEffect(() => {
    axios.get(`${API_URL}/product/${productId}`)
      .then(response => {
        setProduct(response.data);
        //navigate to favorites
      
      })
      .catch(error => {
        console.log(error);
      });
  }, [productId]);

  if (!product) {
    return <Text>Loading...</Text>;
  }


  //add order to cart
  const handleAddOrder = async () => {
    setLoading(true);
    const data = {
      product_id: product.id,
      buyer_id : userData.id,
      quantity: product.quantity,
      buyer_email: userData.email,
      buyer_name: userData.name,
      location: 'Nyeri',
    };

    try {
      const response = await axios.post(`${API_URL}/order/create`, data);
      console.log(response.data);
      setOrders(response.data);
      navigation.navigate('Favorites');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  


  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.images[0] }}
          style={styles.image}
        />
        <Icon name="heart" size={24} color="#ff6b6b" style={{position: 'absolute', right: 10, top: 10}} />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: Ksh {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
     
      <TouchableHighlight
                style={styles.buttonContainer}
                underlayColor="#5467FF"
                onPress={handleAddOrder}
            >
                {
                    loading ? <Text style={styles.buttonText}>Ordering...</Text> : <Text style={styles.buttonText}>Order Now</Text>
                }
               
            </TouchableHighlight>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
   
    backgroundColor: '#15202B',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#E5E6E4',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
},
buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",

},
});

export default ProductDetailsScreen;
