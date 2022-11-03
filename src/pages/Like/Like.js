import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions';
import PlayList from '../../components/PlayList/PlayList';
import { getFavoritelist } from '../../stores/actions/user.action';



export default function Like({ navigation }) {
    const[reason,setReason ] = useState ([
        {},
        {
            image:require("../../assets/home02.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home03.png"),
            description:"Sleep Collection"
         
        },
        {
            image:require("../../assets/home01.png"),
            title:"Friends Me & Bus",
            description:"Fantasy Collection"
        },
        {
            image:require("../../assets/home02.png"),
        
        },
        {
            image:require("../../assets/home03.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home02.png"),
            title:"Friends Me & Bus",
            description:"Sleep Collection"
        },
        {
            image:require("../../assets/home03.png"),
            description:"Fantasy Collection"
         
        },
        {
            image:require("../../assets/home01.png"),
            title:"Friends Me & Bus",
            description:"Child Collection"
        },
        {
            image:require("../../assets/home02.png"),
            description:"Sleep Collection"
        
        },
        {
            image:require("../../assets/home03.png"),
            title:"Friends Me & Bus",
            description:"Fantasy Collection"
        },
    ])
    const dispatch = useDispatch()
    const favoriteList = useSelector((state) => state.userReducer?.favoriteList)
    const users = useSelector(state => state.userReducer.users);

    useEffect(() => {
        dispatch(getFavoritelist(users?.token))
      })
    return (
        <View style={styles.container}>
            <View>
            <FlatList
                  data={favoriteList || []}
                  keyExtractor={(item, index) => index}
                  showsVerticalScrollIndicator={false} 
                  vertical={true}
                  renderItem={({item}) => {
                      return(
                          <View>
                             <PlayList
                                image={item.thumbnail}
                                title={item.title}
                                fav={require('../../assets/fav-ative.png')}
                                description={item?.category?.name}
                            />
                          </View>
                      )
                  }}
                  >
                  </FlatList>
                  {/* <View style={{paddingBottom:"60%",backgroundColor:"red"}}></View> */}
            </View>
        </View>
    );
}

// export function TabBDetails() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tab B Details</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10
    },
})
