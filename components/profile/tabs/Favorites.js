import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { API_URL } from '../../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../constants/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Orders from './Orders';
import MyPosts from './MyPosts';



const Favorites = () => {
 
  const [showMenu, setShowMenu] = useState(false);
  const [myOrders, setmyOrders] = useState(true);
  const [posts, setPosts]= useState(false);
  const [pendingOrders, setPendingOrders] = useState(false);

  const handleOrders = ()=>{
    setmyOrders(true);
    setPosts(false);
    setPendingOrders(false);
  }

  const handlePosts = ()=>{
    setmyOrders(false);
    setPosts(true);
    setPendingOrders(false);
  }

  const handlePendingOrders = ()=>{
    setmyOrders(false);
    setPosts(false);
    setPendingOrders(true);
  }

  // const styles = StyleSheet.create({
  //   tabText:{
  //     borderBottomWidth:1,
  //     borderBottomColor: myOrders ? COLORS.primary : 'transparent'
  //   }
  // })



  return (
    <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={handleOrders}>
              <Text style={[styles.tabText, {borderColor:myOrders ? 'gray': 'transparent', borderBottomWidth:1}]}> Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePosts}>
              <Text  style={[styles.tabText, {borderColor:posts ? 'gray': 'transparent', borderBottomWidth:1}]}> Posts</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>My orders</Text> */}

{
  myOrders ? (
    <Orders />
  ): pendingOrders ? (
    <Orders status="pending" />
  ): posts ? (
    <MyPosts status="posted" />
  ): null
}
       

      </View>
    </TouchableWithoutFeedback>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.theme,
  },
      //tab styles
      tabContainer:{
        flexDirection:'row',
       
        alignItems:'center',
        padding:10,
      },
      tabText:{
        fontSize:16,
        color:COLORS.text,
        fontWeight:'bold',
        padding:10,
      }
})
