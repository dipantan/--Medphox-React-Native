import { createStackNavigator, HeaderBackground } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Splash from "./../screens/Splash";
import Loader from "./../screens/Loader";
import Login from "./../screens/Login";
import Index from "./../screens/Index";
import LoginNumber from "./../screens/LoginNumber";

const screens = {
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false
        },

    },
    Loader: {
        screen: Loader,
        navigationOptions: {
            headerShown: false
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        },
    },
    Index: {
        screen: Index,
        navigationOptions: {
            headerShown: false
        },
    },
    LoginNumber: {
        screen: LoginNumber,
        navigationOptions: {
            headerShown: true,
            title: 'Back',
            HeaderBackground: 'transparent'
        },
    }
}

const Stacks = createStackNavigator(screens);
export default createAppContainer(Stacks);