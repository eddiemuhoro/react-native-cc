import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { TextInput, View } from 'react-native'

const Post = ({goalInputHandler, addGoalHandler }) => {
      //text does not support rounded corners in ios
    //child element cannot inherit parents style
    //styling a view does not affect the text inside it
    //scrollview not good for long list of items
    //scrollview renders all items at once bringing performance issues
    //flatlist renders items as you scroll
    //we dont have children in flatlist
    //flatlist has a prop , renderItem which takes a function that return jsx for each item
  return (
      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='add goal' onChangeText={goalInputHandler} />
          <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
  )
}

export default Post

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    textInput: {
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        padding: 10
    }
})