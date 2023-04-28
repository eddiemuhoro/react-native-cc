import React, { useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import axios from 'axios';
import Fashion from './fetch_products/FASHION/Products';
import Categories from './fetch_products/ELECTRONICS/Categories';

const Home = ({ route, navigation }) => {



    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', }}>

          
                <Categories navigation={navigation} />
                
         
        </View>

    )
}

export default Home
