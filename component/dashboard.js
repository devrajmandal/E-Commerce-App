import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import backgroundImage from '../assets/back.jpg';

const GetDashBoard = ({ navigation }) => {
  const username = "User";

  return ( 
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.loggedInContainer}>
        <Text style={styles.loggedInText}>Welcome, {username}!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('products')}
        >
          <Text style={styles.buttonText}>Go to product View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('productList')}
        >
          <Text style={styles.buttonText}>Go to List View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.buttonText}>Cart</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GetDashBoard;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
