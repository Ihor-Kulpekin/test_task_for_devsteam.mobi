import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const ArrowLeft = ({ onPress }) => (
  <Icon name="arrowleft" style={{ marginLeft: 10 }} size={30} color="#fff" onPress={onPress} />
);

export default ArrowLeft;
