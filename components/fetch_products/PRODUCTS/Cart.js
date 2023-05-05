import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../../constants/constants'

const Cart = () => {
  return (
   <View style={styles.container}>
        <Text style={styles.text}>No Cart Products</Text>
   </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.theme,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: 'bold',
     

    }

})