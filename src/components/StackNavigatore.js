import React from 'react';
import LoginForm from '../screen/LoginForm';
import SignupForm from '../screen/SignupForm';
import itemList from '../screen/itemList';
import Cart from '../screen/cart';
import itemDetails from '../screen/itemDetails';
import {createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";

const LoginScreenNav = createStackNavigator(
    {
        Login: {
            screen: LoginForm,
            navigationOptions: () => ({
                header: null
            }),
        }
    }
);

const SignUpScreenNav = createStackNavigator(
    {
        SignUp: {
            screen: SignupForm,
            navigationOptions: () => ({
                header: null
            }),
        }

    }
);

const itemsListScreenNav = createStackNavigator(
    {
        itemsList: {
            screen: itemList,
        }
    }
);

const itemsDetailsScreenNav = createStackNavigator(
    {
        itemsDetails: {
            screen: itemDetails,
        }
    }
);

const cartScreenNav = createStackNavigator(
    {
        cart: {
            screen: Cart,
        }
    },
    {
        navigationOptions: ({ navigation }) => ({

        }),
    }
);

const RootNavigator = createDrawerNavigator({
    Login: {
        screen: LoginScreenNav,
        navigationOptions: ({navigation})=>({
            drawerLockMode: 'locked-closed',
            drawerLabel: () => null,
        })

    },
    SignUp: {
        screen: SignUpScreenNav,
        navigationOptions: ({navigation})=>({
            drawerLockMode: 'locked-closed',
            drawerLabel: () => null,
        })
    },
    itemsList: {
        screen: itemsListScreenNav,
    },
    itemsDetails: {
        screen: itemsDetailsScreenNav,
    },
    cart: {
        screen: cartScreenNav,
    }
    },
        {
            drawerPosition: 'right',
                initialRouteName: 'Login',
            drawerBackgroundColor: 'orange',
            drawerWidth: 200
        }
    );


export default createAppContainer(RootNavigator);