import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Card = ({ photo, goToPhotoDetail }) => {
  debugger;
  return (
    <TouchableOpacity onPress={() => goToPhotoDetail(photo.urls.small)}>
      <View style={styles.cardContainer}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: photo.urls.small }} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Name: {photo.user.name}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Author: {photo.user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowColor: '#000',
    elevation: 5,
    padding: 12,
    marginBottom: 30,
    shadowOffset: { height: 0, width: 0 }
  },
  imageWrapper: {
    marginBottom: 25
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrapper: {
    marginBottom: 20
  },
  text: {
    fontSize: 20
  }
});

export default Card;
