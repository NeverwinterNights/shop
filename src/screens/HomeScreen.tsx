import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialIcons"
import {Card} from "../components/Card";

const CATEGORIES = ["Clothing", "Shoes", "Accessories", "Food", "Cars", "Houses", "Hopes"]

export const HomeScreen = () => {
    const {colors} = useTheme()
    const [categoryIndex, setCategoryIndex] = useState(0);
    return (
        <ScrollView>
            <SafeAreaView style={{paddingVertical: 24, gap: 24}}>
                <View style={styles.header}>
                    <Image
                        source={{uri: "https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/0/39/756717897600390.webp"}}
                        style={styles.icon}/>
                    <View style={styles.headerInfo}>
                        <Text numberOfLines={1}
                              style={{color: colors.text, fontSize: 10, fontWeight: "600", marginBottom: 8}}>Hi, Pavel
                            👋</Text>
                        <Text numberOfLines={1} style={{color: colors.text, fontSize: 10, opacity: 0.75}}>Discover
                            fashion that suit your style</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: 60, aspectRatio: 1, borderRadius: 60 / 2, alignItems: "center",
                        justifyContent: "center", borderWidth: 1, borderColor: colors.border
                    }}>
                        <Icon name="notifications" size={24} color={colors.text}/>
                    </TouchableOpacity>
                </View>
                <View style={{gap: 12, paddingHorizontal: 24, flexDirection: "row"}}>

                    <TouchableOpacity style={{
                        flex: 1, height: 60, borderRadius: 60 / 2, borderWidth: 1, alignItems: "center",
                        borderColor: colors.border, gap: 12, paddingHorizontal: 24, flexDirection: "row"
                    }}>
                        <Icon name="search" size={24} color={colors.text} style={{opacity: 0.5}}/>
                        <Text style={{flex: 1, color: colors.text, opacity: 0.5, fontSize: 16}}>
                            Search
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 60, aspectRatio: 1, borderRadius: 60 / 2, alignItems: "center",
                        justifyContent: "center", backgroundColor: colors.primary
                    }}>
                        <Icon name="tune" size={24} color={colors.background}/>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal: 24}}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12
                    }}>
                        <Text style={{fontSize: 20, fontWeight: "700"}}>New Collection</Text>
                        <TouchableOpacity>
                            <Text>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "row", height: 200, gap: 12}}>
                        <Card/>
                        <View style={{flex: 1, gap: 12}}>
                            <Card/>
                            <Card/>
                        </View>

                    </View>
                </View>
                <FlatList data={CATEGORIES} horizontal keyExtractor={(item, index) => index.toString()}
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{paddingHorizontal: 24, gap: 12}}
                          renderItem={({item, index}) => {
                              const isSelected = categoryIndex === index
                              return (
                                  <TouchableOpacity onPress={() => setCategoryIndex(index)}
                                                    style={{
                                                        backgroundColor: isSelected ? colors.primary : colors.card,
                                                        paddingHorizontal: 24,
                                                        paddingVertical: 16,
                                                        borderRadius: 100,
                                                        borderWidth: isSelected ? 0 : 1,
                                                        borderColor: colors.border
                                                    }}>
                                      <Text style={{
                                          color: isSelected ? colors.background : colors.text,
                                          fontWeight: "600",
                                          fontSize: 16,
                                          opacity: isSelected ? 1 : 0.5
                                      }}>{item}</Text>
                                  </TouchableOpacity>
                              )
                          }
                          }/>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    icon: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 60 / 2,
        resizeMode: "cover"
    },
    headerInfo: {
        flex: 1
    }
});
