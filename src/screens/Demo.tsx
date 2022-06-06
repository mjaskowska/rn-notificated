import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import Logo from '../assets/rnn-logo.png';
import {notify} from '../../App';
import {RotateZIn} from 'react-native-notificated';

export const Demo = () => {
  return (
    <SafeAreaView style={S.mainView}>
      <Button
        label="Emit notification"
        variant="success"
        onPress={() =>
          notify('totallyCustomEvent', {
            params: {text: 'How you doin?', isAppjsAwesome: true},
            config: {animationConfig: RotateZIn},
          })
        }
      />
      <Image source={Logo} style={S.logo} />
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
