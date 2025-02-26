import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductoScreen = () => {

    const {id} = useLocalSearchParams();

    const product = products.find( p => p.id === id);

    if(!product){
        return <Redirect href='/'/>
    }

  return (
    <View className='px-5 mt-10'>
         <Text className='text-2xl font-work-black'>{product.title}</Text>
         <Text className=''>{product.description}</Text>
            <View className='flex flex-row justify-between mt-2'>
                <Text className='font-work-black'>{product.price}</Text>
            </View>
    </View>
  )
}

export default ProductoScreen;