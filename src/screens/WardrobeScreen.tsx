import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WardrobeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WardrobeScreen</Text>
    </View>
  );
};

export default WardrobeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
