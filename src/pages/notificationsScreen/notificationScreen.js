import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image ,TouchableOpacity,Platform,ScrollView} from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export default function NotificationsScreen({navigation}) {
  const [reason, setReason] = useState([{ title: "Today", image: require('../../assets/playbtn-big.png') },
  { title: "def", image: require('../../assets/playButton.png') },
   { title: "def", image: require('../../assets/payment.png') },
    { title: "jhi", image: require('../../assets/crossButton.png') }, 
    { title: "This Week", image: require('../../assets/playButton.png') }, 
    { title: "abc", image: require('../../assets/playButton.png') }, 
    { title: "abc", image: require('../../assets/crossButton.png') },
    { title: "abc", image: require('../../assets/payment.png') },
    { title: "abc", image: require('../../assets/playButton.png') },
    { title: "abc", image: require('../../assets/payment.png') },
    { title: "abc", image: require('../../assets/crossButton.png') }]);

  return (
    <View style={styles.container}>
    <View style={styles.notification}>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()} style={styles.imgcard} >
            <Image style={styles.backpng} source={require('../../assets/backIcon.png')} />
        </TouchableOpacity>
        <Text style={styles.notificationText}>NOTIFICATIONS</Text>
    </View>
    <View style={styles.today}>
        <FlatList
        contentContainerStyle={{paddingBottom:'25%'}}
            data={reason}
            vertical={true}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                if(item.title=="Today"){
                    return (
                        <Text style={styles.textdv}>TODAY</Text>
                    )
                }
                else if(item.title=="This Week"){
                    return (
                        <Text style={styles.textdv}>THIS WEEK</Text>
                    )
                }
                return (
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    style={styles.card2}>
                        <Image style={styles.icon2} source={item.image} />
                        <View>
                            <Text style={styles.disney2}>New Vlog From Disney</Text>
                            <Text style={styles.pm2}>11.35 PM</Text>
                        </View>
                        <View style={styles.righticon}>
                        <Image style={styles.iconpng} source={require('../../assets/rightarrow1.png')}></Image>
                        </View>
                    </TouchableOpacity>
                )
                
            }}  >
                
        </FlatList>
        {/* <View style={{height:"20%"}}></View> */}
    </View>
</View>
);
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#ffffff",
    //   paddingHorizontal: 10
  },
  notification: {
    flexDirection:'row',
    marginTop:22,
    paddingLeft:12,
    alignItems:"center",
    width:"100%",
    height:60,
    backgroundColor: '#ffffff',
    borderBottomWidth:0.7,
    borderColor:'#e4e5e4', 
  },
  backpng: {
      width: 22,
      height: 22,
      tintColor:"#f8b293",
      resizeMode:"contain"
  },
  vlogers: {
      paddingTop: 10,
      paddingLeft: 38,
      paddingBottom: 4,
      marginVertical: 12,
      fontSize: 12,
      color: "white",
      position: "relative",
      fontFamily:'Poppins-Regular'
  },
  iconpng:{
      width:14,
      height:14,
      resizeMode:"contain"
  },
  righticon:{
      flex:1,
      alignItems:"flex-end",
      paddingHorizontal:10,
      paddingVertical:10,
  },
  imgcard: {
      width: 40,
      height: 50,
      justifyContent:"center",
  },
  pm: {
      color: "#bbbbbd",
      paddingLeft: 14,
      fontSize: 10,
      fontFamily:'Poppins-Regular'
  },
  today: {
      paddingHorizontal: 10,
      
  },
  disney: {
      color: "#ffffff",
      paddingLeft: 14,
      paddingTop: 6,
      fontSize: 12,
      fontFamily:'Poppins-Regular'
  },
  icon: {
      width: 40,
      height: 40,
      marginTop: 0,
  },
  textdv: {
    color:"#4d585b",
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingVertical:8
    //   fontFamily:'Poppins-Regular'

  },
  card: {
      backgroundColor: "#171928",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      marginVertical: 6,
      borderRadius: 10,
      flexDirection: "row",
  },
  week: {
      flex: 4,
      paddingVertical: 10
  },
  textdd: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
      paddingLeft: 10,
      fontFamily:'Poppins-Regular'
  }, 
  pm2: {
      color: "#fff",
      paddingLeft: 14,
      fontSize: 10,
      fontWeight:"bold",
      marginTop:"2%"
  },
  disney2: {
      color: "#fff",
      paddingLeft: 14,
      paddingTop: 6,
      fontSize: 12,
      fontFamily:'Poppins-Regular',
      fontWeight:"bold",
  },
  icon2: {
      width: 40,
      height: 40,
      marginTop: 0,
  },
  card2: {
      backgroundColor: "#c7d2d7",
      paddingHorizontal: 10,
      paddingVertical: 18,
      marginHorizontal: 10,
      marginVertical: 6,
      borderRadius: 10,
      flexDirection: "row",
  },
  notificationText:{
      color:"#f8b293",
      fontWeight:"bold",
      marginLeft:20,
      fontSize:20,
      fontFamily: 'Poppins-Regular',
  }

})