import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

type ButtonPropsType = RectButtonProps & {
  label: string;
  variant: 'success' | 'error' | 'info' | 'warning';
};

export const Button = ({variant, label, ...rest}: ButtonPropsType) => {
  const styles = () => {
    if (variant === 'success') return S.successBtn;
    if (variant === 'error') return S.errorBtn;
    if (variant === 'warning') return S.warningBtn;
    return S.infoBtn;
  };

  return (
    <RectButton {...rest} style={[styles(), S.baseBtn]}>
      <Text style={S.label}>{label}</Text>
    </RectButton>
  );
};

const S = StyleSheet.create({
  baseBtn: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
  },
  successBtn: {
    borderColor: '#00C22B',
    backgroundColor: '#00C22B',
  },
  errorBtn: {
    borderColor: '#FC6060',
    backgroundColor: '#FC6060',
  },
  infoBtn: {
    borderColor: '#8CACFF',
    backgroundColor: '#8CACFF',
  },
  warningBtn: {
    borderColor: '#FFD37D',
    backgroundColor: '#FFD37D',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
