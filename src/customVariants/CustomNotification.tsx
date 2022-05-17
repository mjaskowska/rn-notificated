import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import TickIcon from '../assets/Tick.png';
import SmileyFace from '../assets/SmileyFace.png'
import SurprisedFace from '../assets/SurprisedFace.png'

type PropsType = {
  text: string
};

export const CustomNotification = (p: PropsType) => {
  return (
    <View style={S.container}>
      <View style={S.content}>
        <Text style={S.title}>{p.text}</Text>
        <Image style={S.icon} source={SmileyFace} />
      </View>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#a2ef89ed',
    borderRadius: 40,
    alignItems: 'center',
    minHeight: 175,
    borderColor: 'limegreen',
    borderWidth: 2,
  },
  content: {
    marginLeft: 20,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: '700',
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
    width: 40,
    height: 40,
    marginTop: 20,
  },
});
