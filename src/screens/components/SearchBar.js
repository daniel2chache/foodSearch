import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { NativeViewGestureHandler, TextInput } from 'react-native-gesture-handler';
import { log } from 'react-native-reanimated';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style ={styles.background}>
            <Feather 
            name="search" 
            style = {styles.iconStyle}
            />

            <TextInput 
            autoCapitalize ='none'
            autoCorrect ={false}
            style= {styles.inputStyle} 
            placeholder ="Search"
            value ={term}
            onChangeText = {onTermChange}
            onEndEditing ={onTermSubmit}
            />   
        </View>
    );
};

const styles = StyleSheet.create({

    background :{
        marginTop : 10,
        backgroundColor : '#dfe6e9',
        height: 50,
        borderRadius : 5,
        marginHorizontal : 15,
        marginBottom: 10,
        
        flexDirection: 'row'
        
    },
    inputStyle: {
        flex : 1,
        fontSize : 18
    },
    iconStyle : {
        fontSize: 35,
        alignSelf:'center',
        marginHorizontal : 4
    }
});

export default SearchBar;