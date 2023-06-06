import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./src/screens/HomeScreen";
import {DefaultTheme, NavigationContainer, Theme} from "@react-navigation/native";
import {RootStackNavigator} from "./src/navigators/RootStackNavigator";
import {useMemo} from "react";

export default function App() {
    const theme: Theme = useMemo(() => ({...DefaultTheme, colors:{
        ...DefaultTheme.colors,
            background:"#f5f5f5",
            text: "#191919",
            border:"#D9D9D9",
            primary:"#191919",
        }}), [])
    return (
        <View style={styles.container}>
            <NavigationContainer theme={theme}>
                <StatusBar style="dark"/>
                <RootStackNavigator/>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
