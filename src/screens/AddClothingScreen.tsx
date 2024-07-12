import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddClothingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddClothingScreen</Text>
    </View>
  )
}

export default AddClothingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});