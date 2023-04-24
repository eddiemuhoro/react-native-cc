import React, { useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import Goals from './displayGoal/Goals'
import Post from './addGoal/Post'

const Home = () => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    const goalInputHandler = (enteredText) => {{
        setEnteredGoal(enteredText)
    } }

    const addGoalHandler = () => {{
        console.log(enteredGoal)
        setCourseGoals(currentGoals => [...currentGoals, {
            id: Math.random().toString(),
            text: enteredGoal
        }])
    }}

    const handleDelete = (goal) => {
        setCourseGoals(currentGoals => currentGoals.filter((item) => item !== goal))
    }
  
  return (
   <View style={styles.container}>
         <Post goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
        <Goals goals={courseGoals} onDelete={handleDelete} />
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
    },
  
    
})