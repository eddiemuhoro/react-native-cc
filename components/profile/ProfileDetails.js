import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { COLORS } from '../../constants/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileDetails = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        // fetch data from async storage
        AsyncStorage.getItem('user')
          .then((res) => {
            console.log(res);
            setUser(JSON.parse(res));
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    console.log('====================================');
    console.log(user);
    console.log('====================================');
  return (
    <View style={styles.container}>
          <View style={styles.profileDetails}>
              <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: 'https://media.licdn.com/dms/image/D4D03AQHeiI9baIx5AQ/profile-displayphoto-shrink_200_200/0/1679861419495?e=1688601600&v=beta&t=LVb-LpstGpX7kZdCFUO8Ja6wQ30fibvcD-0BnUDRTYI' }} />
              </View>

              <View>
                  <Text style={styles.text}>{user && user.name}</Text>
                  <Text style={styles.text}>{user && user.email}</Text>
                  <Text style={styles.text}>{user && user.phone}</Text>
              </View>
          </View>

          <View>
               
          </View>
    </View>
  )
}

export default ProfileDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.theme,
    },
    profileDetails :{
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
    },
    imageContainer: {
        width: 100,
        height: 100,
        margin: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 100,
    },
    text: {
        color: COLORS.white,
        fontSize: 16,
        textAlign:'center',
  
    },
})