import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { API_URL } from '../../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Favorites = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ userData, setUserData ] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('user');
        const user = JSON.parse(data);
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    };
  
    getUserData();
  }, []);

  console.log('====================================');
  console.log(userData);
  console.log('====================================');
  // //fetch orders from api
  useEffect(()=>{
    setLoading(true);
    axios.get(`${API_URL}/order`)
    .then((response)=>{
      console.log(response.data);
      setOrders(response.data);
      setLoading(false);
    }
    )
    .catch((error)=>{
      console.log(error);
    }
    )
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName}>{item.product.name}</Text>
        <Text style={styles.orderItemPrice}>Ksh {item.product.price}</Text>
        <Text style={styles.orderItemPrice}>Quantity: {item.quantity}</Text>
        {/* <Text style={styles.orderItemPrice}>Total: Ksh {item.product.price * item.quantity}</Text> */}
      </View>
      <View style={styles.orderItemStatus}>
        <Text style={styles.orderItemStatusText}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View>
        <Text>Favorites</Text>
     
      <FlatList
    data={orders}
    renderItem={renderItem}
    keyExtractor={item => item.id.toString()}
  />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
    orderItem: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      },
      orderItemDetails: {
        width: '80%',
      },
      orderItemName: {
        fontSize: 18,
        marginBottom: 10,
      },
      orderItemPrice: {
        fontSize: 16,
        color: '#888',
      },
      orderItemStatus: {
        width: '20%',
        alignItems: 'center',
      },
      orderItemStatusText: {
        fontSize: 14,
        color: '#888',
      },

})
