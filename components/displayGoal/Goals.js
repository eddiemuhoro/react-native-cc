import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

const Goals = ({goals, handleDelete}) => {
  return (
    <View style={styles.goalsContainer}>
    <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem = {data => {
            return (
                <View style={styles.goalItem}>
                    <Text style={styles.goalText} onPress={()=>handleDelete(data.item)}>{data.item.text}</Text>
                </View>
            )
        }}
     />
    </View>
  )
}

export default Goals

const styles = StyleSheet.create({
  
    goalsContainer: {
        flex:6,
    },
    goalItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'purple',
        borderRadius: 10,
    },
    goalText: {
        color: 'white',
        fontSize: 20
    }
    
})