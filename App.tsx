import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [randombackgroundColor, setrandomBackgroundColor] = useState('#000000')
  const [randomCircleColor, setRandomCircleColor] = useState('black')
  const [randomCircleColor1, setRandomCircleColor1] = useState('black')

  const generateColor = ()=> {
    let color = '#';
    let color1 = '#';
    let color2 = '#';
    let color3 = '#';
    let values = '1234567890ABCDEF';

    for (let i =0 ; i<6; i++){
      color += values[Math.floor(Math.random() * 16)];

      color1 += values[Math.floor(Math.random() * 16)];
      color2 += values[Math.floor(Math.random() * 16)];
      color3 += values[Math.floor(Math.random() * 16)];

    }

    
    setrandomBackgroundColor(color);
    setRandomCircleColor(color1);
    setRandomCircleColor1(color2);

  }

  return (
    <>
    <StatusBar backgroundColor={randombackgroundColor}/>
    <View style = {[styles.container, {backgroundColor: randombackgroundColor} ]}>
      <View style = {[styles.circle, {backgroundColor : randomCircleColor}]}/>
      <View style = {[styles.circle, {backgroundColor : randomCircleColor1}]}/>

    
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
    width: 130,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  buttonTxt : {
    fontSize: 20
  },
  circle : {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginVertical: 30,
    marginHorizontal: 55
    
  }
})