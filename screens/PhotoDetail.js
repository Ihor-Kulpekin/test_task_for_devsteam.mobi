import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/core';

const PhotoDetail = () => {
  const route = useRoute();

  return (
    <View style={styles.detailContainer}>
      <Image style={styles.image} source={{ uri: route.params.urlsPhoto }} resizeMode="stretch" />
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1
  },
  image: {
    flex: 1
  }
});

export default PhotoDetail;
