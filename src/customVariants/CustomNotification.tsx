import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {CloseButton} from '../components/CloseButton';
import {EmojiIcon} from '../components/EmojiIcon';

type PropsType = {
  text: string;
};

export const CustomNotification = (p: PropsType) => {
  return (
    <View style={S.container}>
      <View style={[S.side, S.accentSide]}>
        <EmojiIcon />
      </View>
      <View style={S.center}>
        <Text style={S.text}>{p.text}</Text>
      </View>
      <View style={S.side}>
        <CloseButton />
      </View>
      <View style={S.headerIconContainer}>
        <Text style={S.emojiText}>✌️</Text>
      </View>
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    backgroundColor: '#0033CC',
    flexDirection: 'row',
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
    margin: 8,
  },
  headerIconContainer: {
    position: 'absolute',
    width: '100%',
    top: -14,
    left: 0,
    alignItems: 'center',
  },
  emojiText: {
    fontSize: 24,
  },
  text: {padding: 22, color: 'white', fontWeight: '500'},
  center: {flex: 1},
  side: {backgroundColor: 'red'},
  accentSide: {
    backgroundColor: '#8CACFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderTopLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
});
