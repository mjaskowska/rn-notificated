import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button} from '../components/Button';
import {notify} from '../../App';
import {interpolate} from 'react-native-reanimated';
import {generateAnimationConfig} from 'react-native-notificated';

export const animationConfig = generateAnimationConfig({
  animationConfigIn: {
    type: 'timing',
    config: {
      duration: 200,
    },
  },
  transitionInStyles: progress => {
    'worklet';
    const translateX = interpolate(progress.value, [0, 1], [45, 0]);

    return {
      transform: [{translateX}],
    };
  },
});

export const BellNotify = () => {
  return (
    <>
      <SafeAreaView style={s.container}>
        <Button
          label="notify"
          variant="primary"
          onPress={() =>
            notify('bellNotification', {
              params: {},
            })
          }
        />
      </SafeAreaView>
    </>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
