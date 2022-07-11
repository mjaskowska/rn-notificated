import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNotificationController} from 'react-native-notificated';

export const ModalNotification = () => {
  const {remove} = useNotificationController();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Discard changes?</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.description}>
          Are you sure you want to discard all of your changes? This is
          irreversible and you may loose your progress.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => remove()}>
          <Text style={styles.secondaryBtnLabel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => remove()}>
          <Text style={styles.primaryBtnLabel}>Discard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f38232',
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  topContainer: {
    borderBottomColor: '#ffffff87',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  middleContainer: {
    marginTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomColor: '#ffffff87',
    borderBottomWidth: 1,
  },
  bottomContainer: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  primaryBtn: {
    backgroundColor: 'white',
    width: 90,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginLeft: 15,
  },
  primaryBtnLabel: {
    color: '#FF8E3C',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryBtnLabel: {
    color: 'white',
    fontSize: 14,
  },
});
