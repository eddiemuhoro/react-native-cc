import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { API_URL } from '../../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../constants/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';



const Favorites = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ userData, setUserData ] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


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
 useEffect(() => {
  setLoading(true);
  if (userData) {
    axios.get(`${API_URL}/order/user/${userData.id}`)
      .then((response) => {
        console.log(response.data);
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [userData]);

const handlePressMenu = (index) => {
  setShowMenu(!showMenu);
  setSelectedIndex(index);
};

console.log('====================================');
console.log(showMenu);
console.log('====================================');

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={()=>handlePressMenu(item.id)}>
          <Icon name="ellipsis-h" size={17} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.product.images[0] }} />
      </View>
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName}>{item.product.name}</Text>
        <Text style={styles.orderItemPrice}>Ksh {item.product.price}</Text>
        <Text style={styles.orderItemPrice}>Quantity: {item.quantity}</Text>
        {/* <Text style={styles.orderItemPrice}>Total: Ksh {item.product.price * item.quantity}</Text> */}

      </View>
      <Text style={styles.statusText}>status: <Text style={{ color: 'green' }}>not confirmed</Text></Text>
    
      {
        selectedIndex === item.id && showMenu ? (
          <View style={styles.customModal}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
    </View>
  );

  return (
    <View style={styles.container}>
        <Text>My orders</Text>
        <FlatList
          data={[{key:"header"}, ...orders, {key:"footer"}]}
          renderItem={({item})=>
          item.key === 'header' ? (
             <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
          ): item.key === 'footer' ? (
             <View style={{ height: 100 }}></View>
          ): null
          }
        />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.theme,
  },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
      },
      orderItemDetails: {
        width: '80%',
      },
      orderItemName: {
        fontSize: 18,
        marginBottom: 10,
        color: COLORS.heading
      },
      orderItemPrice: {
        fontSize: 16,
        color: COLORS.text

      },
      orderItemStatus: {
        width: '20%',
        alignItems: 'center',
      },
     
      imageContainer:{
        height:100,
        width:'30%',
        marginRight:10,
      },
      image:{
        height:'100%',
        width:'100%',
        resizeMode: 'contain',

      },
      statusText: {
        fontSize: 12,
        color: COLORS.text,
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
      menuIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
      },
      customModal: {
        backgroundColor: COLORS.theme,
     
        height: 'auto',
        padding:10,
        width: 100,
        borderRadius: 10,
        position: 'absolute',
        top: 25,
        right: 0,
        zIndex: 1,
        borderWidth:1,
        borderColor:'gray'

  
      },
      menuItemText:{
        color:'white',
        fontSize:16,
        textAlign:'center'
      
      },
      menuItem:{
        marginBottom:10,
      }

})
