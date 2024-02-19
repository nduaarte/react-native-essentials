import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

const RootRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootRoutes;
