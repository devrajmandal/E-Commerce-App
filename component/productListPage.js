import React from 'react';
import { Text, View, SectionList, StyleSheet, ImageBackground } from 'react-native';
import Data from './sectionData';
import backgroundImage from '../assets/back.jpg';

const GetProductList = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
        <SectionList
          sections={Data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item}</Text>
          )}
          renderSectionHeader={({ section: { productcategory } }) => (
            <Text style={styles.header}>{productcategory}</Text>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default GetProductList;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#a8f8f8',
    padding: 10,
  },
});
