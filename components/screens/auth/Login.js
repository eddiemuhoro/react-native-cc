import React from 'react'
import { Button, StyleSheet, TouchableHighlight } from 'react-native'
import { TextInput, View } from 'react-native'
import { Text } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Welcome Back!</Text>
                <Text style={styles.textSubHeader}>Please sign in to your account</Text>
            </View>
            <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor="gray" />
            <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="gray" />
            <TouchableHighlight
                style={styles.buttonContainer}
                underlayColor="#5467FF"
                onPress={() => {
                    // Handle button press
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableHighlight>

            <Text style={styles.defaultText} >
                Don't have an account? <Text 
                    onPress={() => navigation.navigate('Register')}
                 style={{ color: '#5467FF' }}>Register</Text>
            </Text>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: '#262A34',
        height: 60,
        color: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        fontSize: 15,
        padding: 10,
        width: '80%',
        borderRadius: 10,
    },
    headerContainer: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#fff',
    },
    textSubHeader: {
        fontSize: 15,
        marginVertical: 10,
        color: '#ccc',
    },
    buttonContainer: {
        backgroundColor: "#5467FF",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: '80%',
        height: 60,
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",

    },
    defaultText: {
        color: "#fff",
    }

})