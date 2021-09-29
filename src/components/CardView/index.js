import React from "react";
import { TouchableOpacity, TouchableNativeFeedback, View, Platform,Image,Text } from "react-native";
import styles from "./styles";
export default function CardView ({
    title="Snail Riding",
    description="Rhymes Collection",
    color="#fff",
    image= require('../../assets/01-tile.png')
}){
    return (
        <View style={styles.container}>
             <Image style={styles.moviepng} source={image} />
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.description}>{description}</Text>
        </View>
    )
}