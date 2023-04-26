import React, { useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const Fashion = ({ route, navigation }) => {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const cutDescription = (description) => {
        if (description.length > 15) {
          return description.substring(0, 15) + '...'
        } else if (description.length <15) {
          return description
        }
      }
    


    const renderItem = ({ item }) => (

        <TouchableOpacity
            style={styles.productItem}
            onPress={()=> navigation.navigate('ProductDetails', {item})}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.productImage}
            />
            <View style={styles.productDetails} >
                <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{cutDescription(item.title)}</Text>
                    <TouchableOpacity
                        style={styles.favoriteButton}
                        onPress={() => console.log('favorite button pressed')}
                    >
                        {/* <Ionicons name='heart-outline' size={24} color='#ff6b6b' /> */}
                    </TouchableOpacity>
                </View>
                <Text style={styles.productPrice}>Ksh {item.price}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 20, marginBottom:10 }}>
                Products
            </Text>
            <FlatList showsVerticalScrollIndicator={false}
                data={products}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
           
        </View>
    )
}

export default Fashion

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
       backgroundColor:'#15202B'
    },
  
      productItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        width: '50%',
      },
      productImage: {
        width:' 100%',
        height: 180,
       
        borderRadius: 10,
        resizeMode: 'contain',
      },
        productDetails: {
        width: '100%',
               
        },
      productName: {
        fontSize: 16,
        marginBottom: 3,
        color:'#fff'
      },
      productPrice: {
        fontSize: 14,
        color: '#ccc',
      },
   
})