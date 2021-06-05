import React,{} from 'react';

import Home from'../pages/Home'
import Exams from'../pages/Exams'
import Schedule from'../pages/Schedule'

import {Feather} from'@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home" component={Home} />
    <HomeStack.Screen
      name="Schedule" component={Schedule} />
  </HomeStack.Navigator>
)


const AppRoutes = () => {
    return(
        <Tab.Navigator
            tabBarOptions={
              {
                activeTintColor: 'tomato',
                inactiveTintColor: '#ccc'
              }
            }
        >
            <Tab.Screen
                name = "Home"
                component = {HomeStackScreen}
                options = {
                    {
                        tabBarIcon : ({color}) => (
                        <Feather
                            name = "home"
                            size = {32}
                            color = {color}
                        />
                        )
                    }
                }
            />
            <Tab.Screen
                name = "Exames"
                component = {Exams}
                options = {
                    {
                        tabBarIcon : ({color}) => (
                        <Feather
                            name = "file-text"
                            size = {32}
                            color = {color}
                        />
                        )
                    }
                }
            />

        </Tab.Navigator>
    )

}

export default AppRoutes;