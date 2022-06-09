import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import Cross from '../assets/Cross.png';

export const CloseButton = (p: {onPress?: () => void}) => {
  return (
    <View style={S.container}>
      <TouchableOpacity onPress={() => p.onPress?.()}>
        <Image source={Cross} />
      </TouchableOpacity>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
