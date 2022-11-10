import React from "react";
import { TouchableOpacity, StyleSheet, View, Platform, Image, Text } from "react-native";

export default function PlayList({
    title = "Snail Riding",
    description = "Rhymes Collection",
    color = "#fff",
    image = require('../../assets/home01.png'),
    play = require('../../assets/playbtn-big.png'),
    time = "02:38",
    fav = '',
    isfavorite = false,
    data = null,
    onFavorite = (data) => { }
}) {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.playIcon} source={play} />
                <Image style={styles.moviepng} source={{ uri: image }} />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.description}>{description}</Text>
                <Text style={{ color: "#4e595c", fontSize: 12 }}>{time}</Text>
            </View>
            <TouchableOpacity
                style={styles.favoriteIconContainer}
                activeOpacity={0.9}
                onPress={() => onFavorite(data)}>
                <Image style={[styles.playIcon1, { tintColor: isfavorite ? '#f8b293' : '#cdcdcd' }]} source={fav} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop: 2,
        padding: 10,
        backgroundColor:"#f2f2f2"
    },
    imageContainer:{
        height: 70, width: 80, alignSelf: 'flex-start', borderRadius: 12, borderWidth: 0.5,
        borderColor: '#e4e5e4', justifyContent: 'center', alignItems: "center"
    },
    moviepng: {
        height: '100%',
        width: '100%',
        resizeMode: "stretch",
        borderRadius: 12,

    },
    textContainer:{ overflow: "hidden", width: '65%', paddingRight: 5 },
    title: {
        color: "#4d585b",
        fontWeight: "bold",
    },
    description: {
        color: "#4e595c",
        fontSize: 12,
        marginVertical:3

    },
    playIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        zIndex: 1,
        right: -10,
        bottom: -10,
        resizeMode: "contain",
        alignSelf: "center",
    },
    playIcon1: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    favoriteIconContainer:{ alignSelf: 'flex-end', height: 70, width: 30, justifyContent: 'center', alignItems: "center" }
})