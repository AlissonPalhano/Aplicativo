import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Search, Clapperboard, ShoppingBag, CircleUser } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.text,
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Home color={color} fill={focused ? color : 'transparent'} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: 'Reels',
          tabBarIcon: ({ color }) => <Clapperboard color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) => <ShoppingBag color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <CircleUser color={color} />,
        }}
      />
    </Tabs>
  );
}
