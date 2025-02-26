import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';

const StackLayout = () => {

    const navigation = useNavigation();
    const router = useRouter();

    const onHeaderClick = (canGoBack: boolean) => {
        if (canGoBack) {
            router.back();  // Correct way to navigate back in expo-router
            return;
        }
        navigation.dispatch(DrawerActions.toggleDrawer);
    }

  return (
    <Stack 
    screenOptions={{
        //headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
            backgroundColor: 'white'
        },
        headerLeft: ({tintColor, canGoBack}) => (
            <Ionicons 
                name={canGoBack ? 'chevron-back-circle-outline' : 'grid-outline'} 
                className='mr-5'
                 onPress={() => onHeaderClick(canGoBack) }
                size={20} 
                />
        ),
    }}>

        <Stack.Screen name='home/index' options={{
            title: 'Home Screen'
        }}/>

        <Stack.Screen name='products/index' options={{
            title: 'Products Screen'
        }}/>

        <Stack.Screen name='profile/index' options={{
            title: 'Profile Screen'
        }}/>
           <Stack.Screen name='settings/index' options={{
            title: 'Settings Screen'
        }}/>
            
 
    </Stack>
  )
}

export default StackLayout;
