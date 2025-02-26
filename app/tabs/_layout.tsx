import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { Component } from 'react';

export class TabsLayout extends Component {
  render() {
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'indigo',
            headerShown: false,
           // tabBarStyle: {
           //     backgroundColor: 'black'
            //    }
            }}>

        <Tabs.Screen
          name="(stack)"
          options={{
            title: 'Stack',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
          }}
        />

        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="favorites/index"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
          }}
        />

      </Tabs>
    )
  }
}

export default TabsLayout;