import React, { useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import axios from 'axios';

const Electronics = ({ route, navigation }) => {



    const [category, setCategory]= useState('ELECTRONICS')
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://usella.fly.dev/product/${category}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    if (!products) {
        return (
            <View style={styles.container}>

                <Text>Loading...</Text>
            </View>
        );
    }

    const categories = [
        {
            id: '1',
            name: 'Hoddies',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMGB0eNS-YJM0UcYjuVQR4LugW2FnNeYfIuZ69DqD&s'
        },
        {
            id: '2',
            name: 'T-Shirts',
            image:'https://wallpaperaccess.com/full/6173932.jpg'
        },
        {
            id: '3',
            name: 'Shorts',
            image:'https://as2.ftcdn.net/v2/jpg/03/11/32/97/500_F_311329748_nBegJ0tVJHABKn1Nr8RmdHXVZczD83Km.jpg'
        },
        {
            id: '4',
            name: 'Bottoms',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BrP7W7Gl-sz4O5h7J9-ZT2gTUj_kqizxr-9ltKHrog&s'
        }
    ]


    const renderItem = ({ item }) => (

        <TouchableOpacity
            style={styles.productItem}
            onPress={()=> setCategory(item.name)}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.productImage}
            />
            <View style={styles.productDetails} >
                <Text style={styles.productName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 20 }}>
                Collections
            </Text>
            <FlatList showsVerticalScrollIndicator={false}
                data={categories}
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
           
        </View>
    )
}

export default Electronics

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
       backgroundColor:'#15202B'
    },
    flatList: {
        flexGrow: 0,
        width: '100%',
      },
      productItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      productImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
        borderRadius: 75,
        resizeMode: 'cover',
      },
      productDetails: {
        alignItems: 'center',
      },
      productName: {
       
        fontSize: 16,
        marginBottom: 3,
        color:'#fff'
      },
      productPrice: {
        fontSize: 14,
        color: '#777',
      },
})