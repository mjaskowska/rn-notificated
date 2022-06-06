import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import Logo from '../assets/rnn-logo.png';
import {FadeInFadeOut, useNotifications} from 'react-native-notificated';

export const Demo = () => {
  const {notify} = useNotifications();
  return (
    <SafeAreaView style={S.mainView}>
      <Button
        label="Emit notification"
        variant="success"
        onPress={() =>
          notify('success', {
            params: {
              title: 'Wow!',
              description: 'That was easy!',
              style: {
                defaultIconType: 'no-icon',
                accentColor: 'darkgreen',
                borderRadius: 20,
                titleSize: 22,
              },
            },
            config: {
              animationConfig: FadeInFadeOut,
              notificationPosition: 'center',
            },
          })
        }
      />
      <Button
        label="Emit custom success"
        variant="success"
        onPress={() =>
          notify('success', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit info"
        variant="info"
        onPress={() =>
          notify('info', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit error"
        variant="error"
        onPress={() =>
          notify('error', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit warning"
        variant="warning"
        onPress={() =>
          notify('warning', {
            params: {title: 'Hello!', description: 'Some text goes here'},
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

{
  /* <Button
        label="Emit info"
        variant="info"
        onPress={() =>
          notify('info', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit error"
        variant="error"
        onPress={() =>
          notify('error', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      />
      <Button
        label="Emit warning"
        variant="warning"
        onPress={() =>
          notify('warning', {
            params: {title: 'Hello!', description: 'Some text goes here'},
          })
        }
      /> */
}
