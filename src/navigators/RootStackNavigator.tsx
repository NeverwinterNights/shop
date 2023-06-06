import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./navigatorsType";
import {HomeScreen} from "../screens/HomeScreen";
import {DetailsScreen} from "../screens/DetailsScreen";
import {RootTabsNavigator} from "./RootTabsNavigator";

export const RootStackNavigator = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>()
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Tabs"} component={RootTabsNavigator} options={{headerShown:false}}/>
            <Stack.Screen name={"Details"} component={DetailsScreen}/>
        </Stack.Navigator>
    );
};
