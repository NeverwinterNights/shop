import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type CardPropsType = {}

export const Card = ({}: CardPropsType) => {
    return (
        <View style={{flex: 1, position: "relative", overflow: "hidden", borderRadius: 23}}>
            <Image source={require("../images/image-1.jpg")} resizeMode={"cover"}
                   style={{position: "absolute", top: 0, left: 0, bottom: 0, right: 0}}/>
            <View
                style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    backgroundColor: "rgba(0,0,0,0.25)",
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 100
                }}>
                <Text style={{color: "#fff", fontSize: 14, fontWeight: "600"}}>$130</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});
