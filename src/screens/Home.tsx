import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
// import {notify} from '../../App';

export const Home = () => {
  return (
    <SafeAreaView style={S.mainView}>
      {/* BASIC USAGE - NO CONFIG */}
      <Button
        label="Emit success"
        variant="success"
      />
      {/* <Button
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
      /> */}

      {/* INSTANCE RANGE CUSTOMISATION */}
      {/* <Button
        variant="success"
        label="Emit success"
        onPress={() => {
          notify('success', {
            params: {
              title: 'Success!',
              description: 'That was easy!',
              style: {
                defaultIconType: 'no-icon',
                accentColor: 'darkgreen',
                borderRadius: 20,
                titleSize: 22,
                multiline: 2,
              },
            },
            config: {
              notificationPosition: 'center',
              duration: 5000,
              animationConfig: ZoomInDownZoomOutUp,
            },
          })
        }
      /> */}

      {/* CUSTOM VARIANT TRIGGER */}
      {/* <Button
        variant="info"
        label="Emit custom event"
        onPress={()=> notify('customEvent', {
          params: {
            title: 'Some custom title',
          },
          config: {
            animationConfig: ZoomInDownZoomOutDown
          }
        })}
      /> */}

      {/* Default animations */}
      {/* <Button
        label="Notify"
        variant="info"
        onPress={() => notify('info', {params: {title: `How you doin'?`}})}
      /> */}
    </SafeAreaView>
  );
};

const S = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});


// "react-native-notificated": "^0.0.1-alpha.0",