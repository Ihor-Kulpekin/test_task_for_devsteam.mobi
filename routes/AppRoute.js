import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ArrowLeft from 'icons/ArrowLeft';
import PhotoDetail from 'screens/PhotoDetail';
import PhotosScreen from 'screens/PhotosScreen';

const Stack = createStackNavigator();

const AppRoute = () => {
  const navigationRef = useRef(null);

  const goBack = () => {
    if (navigationRef) {
      navigationRef.current.navigate('PhotosScreen');
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="PhotosScreen"
          component={PhotosScreen}
          options={{
            headerTitle: 'Photos Screen',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="PhotoScreen"
          component={PhotoDetail}
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => <ArrowLeft onPress={goBack} />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
