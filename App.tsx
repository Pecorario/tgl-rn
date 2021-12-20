import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '@screens/Login';
import { ThemeProvider } from 'styled-components';
import theme from '@global/styles/theme';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {
  useFonts,
  Roboto_400Regular_Italic,
  Roboto_700Bold_Italic,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import { Registration } from '@screens/Registration';
import { ForgotPassword } from '@screens/ForgotPassword';
import { Home } from '@screens/Home';
import { NewBet } from '@screens/NewBet';
import { HeaderButtons } from '@components/HeaderButtons';
import { Profile } from '@screens/Profile';
import { LogoutButton } from '@components/LogoutButton';
import { NewBetButton } from '@components/NewBetButton';

function Tabs() {
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
                <NewBetButton onPress={() => navigation.navigate('New Bet')} />
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
        // headerTitleAlign: 'center',
        headerTitle: 'TGL',
        headerRight: () => (
          <LogoutButton
            color="#707070"
            onPress={() => navigation.navigate('Login')}
          />
        )
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home'
        }}
      />
      <Tab.Screen
        name="New Bet"
        component={NewBet}
        options={({ navigation }) => ({
          title: 'New Bet'
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Roboto_700Bold_Italic,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F7F7F7'
            },
            headerTintColor: '#707070',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Authentication' }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ title: 'Registration' }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{ title: 'Reset password' }}
          />
          <Stack.Screen
            name="Logged"
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
