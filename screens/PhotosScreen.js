import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import { getPhotos } from 'actions/photoActions';
import Card from 'components/Card';
import { useNavigation } from '@react-navigation/core';

const PhotosScreen = () => {
  const navigation = useNavigation();
  const { photos, loading } = useSelector((state) => state.photoReducer);
  const dispatch = useDispatch();

  const fetchPhotos = () => {
    dispatch(getPhotos());
  };

  const goToPhotoDetail = (urlsPhoto) => {
    navigation.dispatch(
      CommonActions.navigate('PhotoScreen', {
        urlsPhoto: urlsPhoto
      })
    );
  };

  useEffect(fetchPhotos, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={photos}
          renderItem={({ item }) => <Card photo={item} goToPhotoDetail={goToPhotoDetail} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default PhotosScreen;
