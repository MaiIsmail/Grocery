import React from 'react';
import {} from 'react-native';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import itemList from '../screen/itemList';
import Cart from '../screen/cart';
import itemDetails from '../screen/itemDetails';

const drNavigator = createDrawerNavigator({
    itemsList: {
        screen: itemList,
    },
    itemsDetails: {
        screen: itemDetails,
    },
    cart: {
        screen: Cart,
    }
});

export default createAppContainer(drNavigator);