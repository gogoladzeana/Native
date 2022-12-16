import React, {useState , useEffect} from 'react';

import {Button,View,Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const  HomeScreen = () => {
    const navigation = useNavigation();

    const [products,setProducts]= useState([])



    const Product = async()=>{
     const response = await axios.get('https://psp.ge/category/823/products?page=1')
          
            setProducts(response?.data?.data?.items)
            console.log(response.data)
            
    }  
    useEffect (()=>{
      Product();
    }, [])   
    
    return (
       <ScrollView style={{backgroundColor:'#8BC34A'}}> 

         
        <Button title={'Go to About Page'} onPress={()=>{ navigation.navigate('About')}}  />
       {products?.map(product =>(
        <View  style={{marginHorizontal: 10,
                        marginVertical: 5,
                          borderRadius: 10,
                          borderColor: '#ddd',
                            borderWidth: 1, 
                            padding: 10 ,
                            backgroundColor:'#CDDC39'}}  >

          <Text  style={{ fontSize:15,fontWeight: 'bold'}}>{product?.name}</Text>

          <Text style={{marginTop:5,color:'gray',fontSize:14}} >
            {product?.price_range.maximum_price.final_price.value + ' ლარი'}</Text>

          <Image  source = {product?.thumbnail.url }/>
          
          </View>
        
       ))}
        
        
      </ScrollView>
    );
  }
export default HomeScreen