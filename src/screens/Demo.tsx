import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import Logo from '../assets/rnn-logo.png';
import {useNotificationController} from 'react-native-notificated';
import {notify, slideSideWithJump, slideWithJump} from '../../App';

export const Demo = () => {
  return (
    <SafeAreaView style={S.mainView}>
      <Button
        label="Submit application"
        variant="primary"
        onPress={() =>
          notify('bottomSheet', {
            params: {},
            config: {
              animationConfig: slideWithJump,
              notificationPosition: 'bottom',
              gestureConfig: {
                direction: 'y',
              },
            },
          })
        }
      />
      <Button
        label="Discard changes"
        variant="primary"
        onPress={() =>
          notify('info', {
            params: {},
            config: {
              notificationPosition: 'center',
              animationConfig: slideSideWithJump,
              gestureConfig: {
                direction: 'x',
              },
            },
          })
        }
      />
      {/* <Image source={Logo} style={S.logo} /> */}
    </SafeAreaView>
  );
};

const S = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 1,
  },
  logo: {
    position: 'absolute',
    top: 100,
    right: 20,
    width: 350,
    height: 350,
    opacity: 0.4,
    transform: [{rotate: '-10deg'}],
  },
});
