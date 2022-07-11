import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useNotificationController} from 'react-native-notificated';
import Icon from '../assets/thumbsup.png';

export const BellNotification = () => {
  const {remove} = useNotificationController();
  const onPress = () => {
    remove();
  };
  return (
    <View>
      <TouchableOpacity style={s.button} onPress={onPress}>
        <View style={s.container}>
          <Image source={Icon} style={s.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 125,
    right: 0,
  },
  container: {
    width: 45,
    height: 40,
    backgroundColor: '#629da057',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: -15,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
});
