import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HeaderButtons, NewBetButton } from '@components/index';
import { AddType, EditTypes, Home, NewBet, Profile } from '@screens/index';
import { RootStateOrAny, useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export function Logged() {
  const isAdmin = useSelector(
    (state: RootStateOrAny) => state.auth.user.isAdmin
  );

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Add game') {
            return (
              <MaterialCommunityIcons
                name="playlist-plus"
                size={size + 10}
                color={color}
              />
            );
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
          } else if (route.name === 'Edit games') {
            return (
              <MaterialCommunityIcons
                name="playlist-edit"
                size={size + 10}
                color={color}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Ionicons
                name={focused ? 'md-person-sharp' : 'md-person-outline'}
                size={size}
                color={color}
              />
            );
          }
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
          <HeaderButtons color="#707070" navigation={navigation} />
        )
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      {isAdmin === 1 && (
        <Tab.Screen
          name="Add game"
          component={AddType}
          options={{ title: 'Add game' }}
        />
      )}
      <Tab.Screen
        name="New Bet"
        component={NewBet}
        options={{ title: 'New Bet' }}
      />
      {isAdmin === 1 && (
        <Tab.Screen
          name="Edit games"
          component={EditTypes}
          options={{ title: 'Edit games' }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
