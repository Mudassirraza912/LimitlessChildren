import React from "react";
import { TouchableOpacity, TouchableNativeFeedback, View, Platform,Image,Text } from "react-native";
import styles from "./styles";
export default function CardView ({
    title="Snail Riding",
    description="Rhymes Collection",
    color="#fff",
    image= require('../../assets/home01.png'),
    play=require('../../assets/playbtn-big.png')
}){
    return (
        <View style={styles.container}>
            <Image style={styles.playIcon} source={play} />
             <Image style={styles.moviepng} source={image} />
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.description}>{description}</Text>
        </View>
    )
}