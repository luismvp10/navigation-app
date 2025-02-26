import CustomButton from '@/components/shared/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View className='px-10 mt-5'>
        

            <CustomButton className='mb-2' color='primary' onPress={()=> router.push('/tabs/(stack)/products')}>Productos</CustomButton>
            <CustomButton className='mb-2' color='secondary' onPress={()=> router.push('/tabs/(stack)/profile')}>Profile</CustomButton>
            <CustomButton className='mb-2' color='tertiary' onPress={()=> router.push('/tabs/(stack)/settings')}>Ajustes</CustomButton>

            <CustomButton className='mb-10' color='primary' onPress={()=> router.push('/tabs/(stack)/products')} variant='text-only'>Productos</CustomButton>
           
       { /*    <Link className='mb-5' href='/products'>Products</Link>
            <Link className='mb-5' href='/profile'>Profile</Link>
            <Link className='mb-5' href='/settings'>Ajustes</Link> */}
        </View>
    </SafeAreaView>
   
  )
}

export default HomeScreen;