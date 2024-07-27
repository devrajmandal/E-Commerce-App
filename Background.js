import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children, source, style }) => {
  return (
    <ImageBackground
      source={source}
      style={[styles.background, style]}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default Background;