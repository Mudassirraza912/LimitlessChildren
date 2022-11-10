// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding:10,
        marginHorizontal:1,
    },
   imageContainer: {
        height:110,
        width:155,
        borderRadius:18,
        justifyContent:"center",
        alignItems:"center",
        overflow:'hidden',
        borderWidth:0.5,
        borderColor:'#e4e5e4'
    },
    imageStyle: {
        height:'100%',
        width:'100%',
        borderRadius:16,
        resizeMode:'stretch'
},
    title:{
        color:"#4d585b",
        fontWeight:"bold",
        fontFamily:"Poppins-Bold",
        textAlign:'left'
    },
    description:{
        color:"#4d585b",
        fontSize:11,
        fontFamily:"Poppins-Regular",
    },
    playIcon:{
        width:50,
        height:50,
        position:"absolute",
        zIndex:30,
        resizeMode:"contain",
    }
});
