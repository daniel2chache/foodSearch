import React , {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from './components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from './components/ResultList';


const SearchScreen = () => {

    //console.log(props);

    const [term , setTerm]= useState('');
    const [SearchApi, results , errorMessage]= useResults();

    const filterResultsByPrice = (price) => {

        return results.filter (results => {
            return results.price === price ;

        });

    };
   

    //console.log(results);
    return (
        <View style={{flex: 1}}>
            <SearchBar 
            term ={term} 
            onTermChange={ setTerm }
            onTermSubmit= {() => SearchApi(term)}
             />


            { errorMessage ? <Text> {errorMessage}</Text> : null } 
            {/* <Text> We have found {results.length} results </Text> */}
            <ScrollView>
            <ResultList  
            results= {filterResultsByPrice('$')}   
            title = 'Cost Effective'
            
            />
            <ResultList     
            results= {filterResultsByPrice('$$')}
            title = 'Bit Pricier'
            
            />
            <ResultList     
            results= {filterResultsByPrice('$$$')}
            title = 'Big Spender'
            
            />
            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;