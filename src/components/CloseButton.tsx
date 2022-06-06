import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

export const CloseButton = () => {
  return (
    <View style={S.container}>
      <TouchableOpacity>
        <Text>Close</Text>
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
