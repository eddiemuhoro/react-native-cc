import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View , ActivityIndicator} from 'react-native'
import { API_URL } from '../../../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../constants/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import EditProducts from './EditProducts';
import EditProductModal from './EditProducts';



const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ userData, setUserData ] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showEdit , setShowEdit] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);


 

  // const styles = StyleSheet.create({
  //   tabText:{
  //     borderBottomWidth:1,
  //     borderBottomColor: myOrders ? COLORS.primary : 'transparent'
  //   }
  // })


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
    axios.get(`${API_URL}/product/user/${userData.id}`)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [userData,showEdit]);

const handlePressMenu = (index) => {
  setShowMenu(!showMenu);
  setSelectedIndex(index);
};

const handleEdit = (index) => {
    setShowEdit(!showEdit);
    setSelectedIndex(index);
  };


if (loading) {
    return (
     
        <ActivityIndicator size="large" color="#ff6b6b" />
     
    );
  }

  if (posts.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>No posts yet</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (

    <View style={styles.orderItem}>
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={()=>handlePressMenu(item.id)}>
          <Icon name="ellipsis-h" size={17} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.images[0] }} />
      </View>
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName}>{item.name}</Text>
        <Text style={styles.orderItemPrice}>Ksh {item.price}</Text>
        <Text style={styles.orderItemPrice}>Quantity: {item.quantity}</Text>
        {/* <Text style={styles.orderItemPrice}>Total: Ksh {item.product.price * item.quantity}</Text> */}

      </View>
      {/* <Text style={styles.statusText}>status: <Text style={{ color: 'green' }}>not confirmed</Text></Text> */}
    
      {
        selectedIndex === item.id && showMenu ? (
          <View style={styles.customModal}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText} onPress={()=>handleEdit(item.id)}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ) : null
      }
      {
        showEdit ? (
            <EditProductModal isVisible={showEdit} product={item} onClose={()=> setShowEdit(false)} />
        ):
        null
      }
    </View>
    
  );

  return (
    <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
      <View style={styles.container}>
       
        <FlatList
          data={[{ key: "header" }, ...posts, { key: "footer" }]}
          renderItem={({ item }) =>
            item.key === 'header' ? (
              <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            ) : item.key === 'footer' ? (
              <View style={{ height: 100 }}></View>
            ) : null
          }
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MyPosts

const styles = StyleSheet.create({
  container:{
    flex:1,

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
      },
      //tab styles
      tabContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
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
