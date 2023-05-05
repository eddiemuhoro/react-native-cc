import React, { createContext, useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import axios from 'axios';
//import colors from constants
import { COLORS } from '../../../constants/constants';
import Products from '../GENERAL/Products';
export const CategoryContext = createContext();

const Categories = ({ route, navigation }) => {



    const [category, setCategory]= useState("women's clothing")


    const categories = [
        {
            id: '1',
            name: 'Hoddies',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMGB0eNS-YJM0UcYjuVQR4LugW2FnNeYfIuZ69DqD&s',
            category:"men's clothing"

        },
        {
            id: '2',
            name: 'Elecronics',
            image:'https://wallpaperaccess.com/full/6173932.jpg',
            category:'electronics'
        },
        {
            id: '3',
            name: 'Shorts',
            image:'https://as2.ftcdn.net/v2/jpg/03/11/32/97/500_F_311329748_nBegJ0tVJHABKn1Nr8RmdHXVZczD83Km.jpg',
            category:'jewelery'
        },
        {
            id: '4',
            name: 'Bottoms',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BrP7W7Gl-sz4O5h7J9-ZT2gTUj_kqizxr-9ltKHrog&s',
            category:"women's clothing"
        },
        {
            id: '5',
            name: 'T-Shirts',
            image:'https://wallpaperaccess.com/full/6173932.jpg',
            category:"men's clothing"
        }

    ]



    const renderItem = ({ item }) => (

        <TouchableOpacity
        style={[
            styles.categoryItem,
            item.category === category && styles.categoryProductItem, // apply selected style if category matches
          ]}
            onPress={()=> setCategory(item.category)}
        >
            <Image
                source={{ uri: item.image }}
                style={styles.categoryImage}
            />
            <View style={styles.categoryDetails} >
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
     
        <View style={styles.container}>
        <FlatList
          data={[{ key: 'header' },  { key: 'footer' }]}
          renderItem={({ item }) =>
            item.key === 'header' ? (
              <View style={styles.content}>
                <Text style={styles.title}>Collections</Text>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={categories}
                  style={styles.flatList}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
  
                <Products navigation={navigation} category={category} />
              </View>
            ) : item.key === 'footer' ? (
              <View style={{ height: 100 }}><Text>footer</Text></View>
            ) : null
          }
          keyExtractor={(item) => item.key}
        />
      </View>
      
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
       backgroundColor:'#15202B',
       flex:1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff'

    },
    flatList: {
        flexGrow: 0,
        width: '100%',
      },
      categoryItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      categoryImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
        borderRadius: 75,
        resizeMode: 'cover',
      },
      categoryDetails: {
        alignItems: 'center',
      },
      categoryName: {
       
        fontSize: 16,
        marginBottom: 3,
        color:'#fff'
      },
      categoryProductItem: {
        borderRadius: 10,
        paddingHorizontal: 5,
       backgroundColor:'#cc2b5e'
      },
    
})