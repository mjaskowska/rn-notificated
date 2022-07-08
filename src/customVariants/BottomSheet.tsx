import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNotificationController} from 'react-native-notificated';

export const BottomSheet = () => {
  const {height, width} = useWindowDimensions();
  const {remove} = useNotificationController();
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>
          Are you sure you want to submit your application?
        </Text>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => remove()}>
            <Text style={styles.secondaryBtnLabel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => remove()}>
            <Text style={styles.primaryBtnLabel}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 390,
    height: 256,
    marginHorizontal: -15,
    marginVertical: -50,
    shadowColor: '#13192E',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 24,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonsWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  title: {
    fontWeight: `700`,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25,
  },
  primaryBtn: {
    backgroundColor: '#FF8E3C',
    marginTop: 8,
    minWidth: `100%`,
    height: 44,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBtn: {
    backgroundColor: 'white',
    marginTop: 8,
    minWidth: `100%`,
    height: 44,
    borderRadius: 100,
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnLabel: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryBtnLabel: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});
