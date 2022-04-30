import React, { useState } from 'react';
import {StyleSheet, Text, Button ,Alert, View, TouchableOpacity,TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {LikeButton, RatingButton} from './Buttons.js';
import Video from './Video.js';




const Main = (items) => {
    return (
        
        <View style={styles.main}>
            <View style={styles.heartbox}>
                <LikeButton style={styles.Like}/>
            </View>
        <View style={styles.wrapper}>
            <View style={styles.descwrapper}>
                    <Text style={styles.title}>{items.title}</Text>
                    <ScrollView nestedScrollEnabled={true}>
                    <Text style={styles.info}>{items.description}</Text>
                    </ScrollView>
            </View> 
        </View>
            <Video episode="Episode 1 : Better later than never"/> 
        </View>    
    )
};




const styles= StyleSheet.create({

    main: {
        borderRadius:35,
        flexDirection:'column',
        backgroundColor:'#FFF',
        height:'100%',
        position:'relative',
        top:'-4.5%',
        width:'100%',
        left:0,
        opacity:1,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 7,
                    },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 5,
        paddingHorizontal:20,
    },

    wrapper: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
 
    descwrapper: {
        maxHeight:150,
        width:'100%',
        flexDirection:'column',
        alignItems:'baseline',
        borderRadius:10,
        position:'relative',
        marginBottom:20, 
    },

    title: {
        fontSize:24,
        textAlign:'left',
        fontWeight:'bold',
        color:'#494949',
        top:'-13%',
        opacity:0.9,
       
    },

    info: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        textAlign:'justify',
        lineHeight:20,
        fontSize:16,
        color:'#bdbdbd',
        maxHeight:200,
        zIndex:99,
        marginBottom:10,
        paddingHorizontal:10, 
        textShadowColor: '#e0e0e0', textShadowOffset: { width: 0.1, height: 1.2 }, textShadowRadius: 1,
      
    },

    heartbox: {
        position:'relative',
        width:70,
        left:"75%",
        height:70,
        backgroundColor:'#FFF',
        top:'-3.5%',
        borderRadius:50,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
                    },
        shadowOpacity: 0.29,
        shadowRadius: .65,
        elevation: 7,
        paddingHorizontal:4.7,
    },

  
     
});

export default Main;