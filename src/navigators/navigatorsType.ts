import {NavigatorScreenParams} from "@react-navigation/native";
import {RootTabsNavigator} from "./RootTabsNavigator";

export type RootStackParamList = { // типизация стаков
    Tabs: NavigatorScreenParams<RootTabParamList>;
    Details: undefined;
};

export type RootTabParamList = { // типизация стаков
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
};
