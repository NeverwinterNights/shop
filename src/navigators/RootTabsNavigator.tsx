import {RootTabParamList} from "./navigatorsType";
import {HomeScreen} from "../screens/HomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CartScreen} from "../screens/CartScreen";
import {PaymentScreen} from "../screens/PaymentScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import Icon from "@expo/vector-icons/MaterialIcons"

export const RootTabsNavigator = () => {

    const Tab = createBottomTabNavigator<RootTabParamList>()
    return (
        <Tab.Navigator screenOptions={({route, navigation}) => {
            let iconName: keyof typeof Icon.glyphMap

            return {
                tabBarIcon: ({focused, size,color}) => {
                    if (route.name === "Home") {
                        iconName = "home"
                    }
                    if (route.name === "Cart") {
                        iconName = "shopping-cart"
                    }
                    if (route.name === "Payment") {
                        iconName = "account-balance-wallet"
                    }
                    if (route.name === "Profile") {
                        iconName = "person"
                    }
                    return <Icon name={iconName} size={24} color={color}/>
                },
                tabBarShowLabel:false
            }

        }}>
            <Tab.Screen name={"Home"} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={"Cart"} component={CartScreen}/>
            <Tab.Screen name={"Payment"} component={PaymentScreen}/>
            <Tab.Screen name={"Profile"} component={ProfileScreen}/>
        </Tab.Navigator>
    );
};
