import React from 'react';
import Category from '../screens/Category';
import ProductDetails from '../screens/ProductDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
const Stack = createNativeStackNavigator();
function CategoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.Category} component={Category} />
      <Stack.Screen name={routes.ProductDetails} component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default CategoryNavigator;
