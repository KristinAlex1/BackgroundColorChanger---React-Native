import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [randombackgroundColor, setrandomBackgroundColor] = useState('#000000')

  const generateColor = ()=> {
    let color = '#';
    let values = '1234567890ABCDEF';

    for (let i =0 ; i<6; i++){
      color += values[Math.floor(Math.random() * 16)]

    }
    setrandomBackgroundColor(color);

  }

  return (
    <>
    <StatusBar backgroundColor={randombackgroundColor}/>
    <View style = {[styles.container, {backgroundColor: randombackgroundColor} ]}>
      <TouchableOpacity onPress={generateColor}>
        <View style = {styles.button}>
          <Text style = {styles.buttonTxt}>Press me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  button : {
    
    height: 50,
    width: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTxt : {
    
  }
})