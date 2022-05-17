import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export const Demo = () => {
  return (
    <SafeAreaView style={S.mainView}>
      <Button label="Emit notification" variant="success" />
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
    </SafeAreaView>
  );
};

const S = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
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
/>  */
}
