import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Routes(){
  return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="SignIn"
					options={{headerShown:false}} 
					component={SignIn} 
				/>
				<Stack.Screen 
					name="SignUp" 
					options={{
						headerTransparent:true,
						headerTintColor:'#fff',
						headerBackTitleVisible:false,
						headerTitle:'Cadastro'

					}}
					component={SignUp} 
				/>
				<Stack.Screen 
					name="Home"
					options={{headerShown:false}} 
					component={Home} 
				/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}