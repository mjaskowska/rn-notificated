import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import TickIcon from '../assets/Tick.png';
import SmileyFace from '../assets/SmileyFace.png'
import SurprisedFace from '../assets/SurprisedFace.png'

type PropsType = {
  title: string
  description?: string
};

export const CustomNotification = (p: PropsType) => {
  return (
    <View style={S.container}>
      <Image source={TickIcon} />
      <View style={S.content}>
        <Text style={S.title}>{p.title}</Text>
        <Image style={S.icon} source={SmileyFace} />
      </View>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'limegreen',
    borderRadius: 40,
    alignItems: 'center',
  },
  content: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 'auto'
  }
});
