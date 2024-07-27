import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStartPage from './component/getStartPage';
import GetLoginPage from './component/loginPage';
import GetSignupPage from './component/signupPage';
import GetProductPage from './component/productPage';
import GetProductList from './component/productListPage';
import Cart from './component/cart';
import GetDashBoard from './component/dashboard';
import FavoriteContextProvider from './component/contextapi';
import Logout from './component/logout';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './component/ProfileScreen';
import SettingsScreen from './component/SettingScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'DashBoard') {
            iconName = 'speedometer-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={GetStartPage}
        options={{ title: '' }}
      />
      <Stack.Screen
        name='Login'
        component={GetLoginPage}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name='Signup'
        component={GetSignupPage}
        options={{ title: 'Signup' }}
      />
      <Stack.Screen
        name='products'
        component={GetProductPage}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name='productList'
        component={GetProductList}
        options={{ title: 'Product List' }}
      />
      <Stack.Screen
        name='dashBoard'
        component={GetDashBoard}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen 
        name='Cart' 
        component={Cart}
        options={{ title: 'Cart' }} 
      />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'DashBoard') {
          iconName = 'speedometer-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        } else if (route.name === 'Settings') {
          iconName = 'settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="DashBoard" component={(GetDashBoard)} />
      <Tab.Screen name="Profile" component={(ProfileScreen)} />
      <Tab.Screen name="Settings" component={(SettingsScreen)} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      drawerIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Cart') {
          iconName = 'cart-outline';
        } else if (route.name === 'Dashboard') {
          iconName = 'speedometer-outline';
        } else if (route.name === 'Logout') {
          iconName = 'log-out-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    options={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
      >
      <Drawer.Screen name="Home" component={MainTabNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Dashboard" component={GetDashBoard} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
