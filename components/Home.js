import React, { useState } from 'react'
import { useEffect } from "react";
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import axios from 'axios';
import Electronics from './fetch_products/ELECTRONICS/Electronics';
import Fashion from './fetch_products/FASHION/Fashion';

const Home = ({ route, navigation }) => {



    return (
<View style={{flex:1, justifyContent: 'flex-start', }}>
    <ScrollView>

    <Electronics />
    <Fashion />
    </ScrollView>
</View>

    )
}

export default Home
