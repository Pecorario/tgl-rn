import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LogoutButton, NewBetButton } from '@components/index';
import { Home, NewBet, Profile } from '@screens/index';

const Tab = createBottomTabNavigator();

export function Logged() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'New Bet') {
            if (focused) {
              return (
                <NewBetButton
                  onPress={() => navigation.navigate('New Bet')}
                  active={true}
                />
              );
            } else {
              return (
                <NewBetButton
                  onPress={() => navigation.navigate('New Bet')}
                  active={false}
                />
              );
            }
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-person-sharp' : 'md-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: '#C1C1C1',
        tabBarActiveTintColor: '#B5C401',
        tabBarShowLabel: false,

        headerStyle: {
          backgroundColor: '#F7F7F7'
        },
        headerTintColor: '#707070',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 32
        },
        headerTitle: 'TGL',
        headerRight: () => (
          <LogoutButton
            color="#707070"
            onPress={() => navigation.navigate('Login')}
          />
        )
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen
        name="New Bet"
        component={NewBet}
        options={{ title: 'New Bet' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
