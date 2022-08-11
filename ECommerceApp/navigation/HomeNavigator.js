import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import HeaderRight from '../components/HeaderRight';
import SearchScreen from '../screens/SearchScreen';
import Product from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import WishList from '../screens/WishList';
import Cart from '../screens/Cart';
import Payment from '../screens/Payment';
import SearchBar from '../components/SearchBar';
import routes from './routes';
import OrderDetails from '../screens/OrderDetails';
import NewAddress from '../screens/NewAddress';

function HomeNavigator({navigation}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerTitle: () => (
            <SearchBar
              title={'Home'}
              onPress={() => navigation.navigate('SearchScreen')}
            />
          ),
          headerRight: () => (
            <HeaderRight
              wishList={() => {
                navigation.navigate('WishList');
              }}
              cart={() => {
                navigation.navigate('Cart');
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name={routes.SearchScreen}
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.WishLists}
        component={WishList}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name={routes.Cart}
        component={Cart}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name={routes.NewAddress}
        component={NewAddress}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name={routes.Payment}
        component={Payment}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name={routes.PlaceOrder}
        component={OrderDetails}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name={routes.Products}
        component={Product}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name={routes.ProductDetails} component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
