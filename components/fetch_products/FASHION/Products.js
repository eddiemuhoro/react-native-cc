import React, { useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { API_URL, COLORS } from '../../../constants/constants';

const Fashion = ({ route, navigation, category }) => {


    console.log('====================================');
    console.log(category);
    console.log('====================================');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/product`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [category]);



    // const cutDescription = (description) => {
    //     if (description.length > 15) {
    //       return description.substring(0, 15) + '...'
    //     } else if (description.length <15) {
    //       return description
    //     }
    //   }
    


    const renderItem = ({ item }) => (

        <TouchableOpacity
            style={styles.productItem}
            onPress={()=> navigation.navigate('productDetails', {productId: item.id.toString()})}
        >
            <Image
                source={{ uri: item.images[0] }}
                style={styles.productImage}
            />
            <View style={styles.productDetails} >
                <View style={styles.productNameContainer}>
                    <Text style={styles.productName}>{(item.name)}</Text>
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
                {category}
            </Text>
            <View style={styles.flats}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={products}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
          
        </View>
    )
}

export default Fashion

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
     
        
    },
  
      productItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        width: '50%',
      },
      productImage: {
        width:'100%',
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
        color:COLORS.heading
      },
      productPrice: {
        fontSize: 14,
        color: COLORS.text
      },
})