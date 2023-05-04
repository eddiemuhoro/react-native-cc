import axios from 'axios';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_URL } from '../../../constants/constants';

const EditProductModal = ({ isVisible, onClose, product }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price.toString());


  const handleSave = () => {
    // Save the updated product details here
    const data = {
        name,
        description,
        price : parseInt(price)
       
        };
        axios.put(`${API_URL}/product/update/${product.id}`, data)
        .then((response)=>{
            console.log(response.data);
            onClose();
        }
        )
        .catch((error)=>{
            console.log(error);
        }
        )
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="times" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Edit Product</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Name"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={(text) => setDescription(text)}
              placeholder="Description"
              placeholderTextColor="#ccc"
            />
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
              keyboardType="numeric"
              placeholder="Price"
              placeholderTextColor="#ccc"
            />
         
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#15202B',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
    padding: 10,
    alignSelf: 'stretch',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EditProductModal;
