import React , {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [results, setResults]= useState([]);
    const [errorMessage,setErrorMessage]= useState('');

const SearchApi = async (searchTerm)=>{

    //console.log("hello world ");   // to test how many times this api runs check console 
    try{
   const response = await yelp.get ('/search', {
       params :{
           limit: 50,
           term: searchTerm,
           location: 'san jose'
       }
   });

   setResults(response.data.businesses) ;
} catch (err){
    setErrorMessage('Something Went Wrong')

}
};

//-----------------------to run the first time the app runs it only runs once----------
useEffect(()=>{

    SearchApi ('pasta');
}, []);

//----------------------------------------------------------------------------------

return [SearchApi, results , errorMessage];

};