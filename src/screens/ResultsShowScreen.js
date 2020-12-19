import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen =({navigation}) => {

    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');
    //console.log(result);


    const getResult = async (id) => {
       const response =  await yelp.get(`/${id}`);
       setResult (response.data);
    };

    useEffect(()=> {

        getResult(id)

    }, []);

    if (!result){
        return null;
    }


    return(
        <View>
            <Text style= {styles.titleStyle}>{result.name}</Text>
            <Text style = { styles.phoneStyle}>{result.phone}</Text>
            <FlatList
            data ={result.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({item})=>{
                return <Image style= {styles.image} source={{uri: item }} />
            } }  
            />
        </View>
    );
};

const styles = StyleSheet.create({

    image: {

        width : 250,
        height: 120,
        borderRadius : 4,
        marginBottom: 20,
        alignSelf: 'center'
    },
    titleStyle:{
        fontSize : 24,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        alignSelf : 'center'
    },

    phoneStyle:{
        fontSize : 18,
        alignSelf: 'center',
        marginBottom: 15

    }
});

export default ResultsShowScreen;

