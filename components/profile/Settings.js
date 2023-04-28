import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings = () => {
  return (
    <View style={styles.container}>
        <View>

      
                <Text style={styles.title} >Settings</Text>
                <View style={styles.settingsItems}>
                    <Text style={styles.subTitle}>Profile Settings</Text>
                    <TouchableOpacity style={styles.settingsItem}>
                        <Text style={styles.settingsItemText}>Security and Privacy</Text>
                        <Icon name="angle-right" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsItem}>
                        <Text style={styles.settingsItemText}>Change Password</Text>
                        <Icon name="angle-right" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingsItem}>
                        <Text style={styles.settingsItemText}>Devices</Text>
                        <Icon name="angle-right" size={20} color="#fff" />
                    </TouchableOpacity>
                   
                   
                </View>

                <View style={styles.settingsItems}>
                    <Text style={styles.subTitle}>General</Text>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingsItemText}>Push notifications</Text>
                        <Icon name="toggle-on" size={20} color="#ff6b6b" />
                    </View>
                    <View style={styles.settingsItem}>
                        <Text style={styles.settingsItemText}>Dark Theme</Text>
                        <Icon name="toggle-on" size={20} color="#ff6b6b" />
                    </View>
                </View>
    </View>

    {
        //logout button
    }
 
          <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
              <Text style={styles.text}>LOGOUT</Text>
          </TouchableOpacity>
    </View>
    
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
       backgroundColor:'#15202B',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
       textAlign:'center',
         marginBottom:10,
            color:'#fff'

    },
    subTitle:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10,
        color:'#fff'

    },
    settingsItems:{
        width:'100%',
       color:'#fff',
        padding:10,
        borderRadius:10,
        marginBottom:10,

    },
    settingsItem: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    settingsItemText:{
        color:'#E5E6E4'
    },
    button: {
        backgroundColor: '#ff6b6b',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
      },
      text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
})