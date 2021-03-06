import React from 'react';
import {View, Text, Image, TouchableOpacity,ImageBackground,StyleSheet,ScrollView} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Entypo';
import { windowWidth } from '../utils/Dimensions';

Icon.loadFont();




export default function AiringList({navigation,data}) {
  const [loaded] = useFonts({
    RobotoM: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoB: require('../assets/fonts/Roboto-Bold.ttf'),
    LatoR: require('../assets/fonts/Lato-Regular.ttf'),
    LatoB: require('../assets/fonts/Lato-Bold.ttf'),
    LatoBL: require('../assets/fonts/Lato-Black.ttf'),
    

  });
  
  if (!loaded) {
    return null;
  };



    if (data.status !== "Airing") {
      return AiringList;
    }
    


  return (
        
        <ImageBackground
          source={data.mainimage}
          imageStyle={{ borderRadius:10}}
          style={{width: 168,height: 247, borderRadius: 15, backgroundColor:'#BE4242', shadowColor: "#BE4242",
          shadowOffset: {
            width: 0, 
            height: 12,
          },
          shadowOpacity:  0.5,
          shadowRadius: 12.65,
          elevation: 2, }}>
          <View style={[styles.overlay,{borderRadius:10,}]} />
         </ImageBackground>
     

  )
}
const styles = StyleSheet.create({

overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: '(154,106,255,0.14)',
},


});