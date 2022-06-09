import React from 'react';
import {Text} from 'react-native';

export const EmojiIcon = (p: {isAppjsAwesome?: boolean}) => (
  <Text>{p.isAppjsAwesome ? '😎' : '😩'}</Text>
);
