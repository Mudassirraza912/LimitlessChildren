import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions';
import { CardView } from '../../components';
import { Get } from '../../utils/apicalls/apicalls';



export default function search({ navigation }) {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null)
    const users = useSelector(state => state.userReducer.users);

    const onSubmit = () => {
        Get(
          `https://limitless-dev-backend.herokuapp.com/v1/story?search=${search}`,
          {},
          users.token,
        )
          .then(function (response) {
            if (response.status == 200) {
              setData(response?.data);
            } else {
              console.log('error else');
            }
          })
          .catch(function (error) {
            console.log('onSubmit error', error);
          });
      };
    
    console.log("data", data)
    return (
        <View style={styles.container}>
            <View>
                <SearchBar
                    platform="ios"
                    placeholder="Search"
                    placeholderTextColor="#000"
                    searchIcon={{ iconStyle: { color: "#000" } }}
                    inputStyle={{ color: "#000", fontSize: 12 }}
                    containerStyle={{ backgroundColor: "#ffffff" }}
                    inputContainerStyle={{
                      shadowColor: "#aeaeae",
                        shadowOffset: {
                            width: 0.5,
                            height: 0.5,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 1.12,
                        elevation: 6
                    }}
                    onChangeText={setSearch}
                    value={search}
                    onEndEditing={() => onSubmit()}
                />
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
    searchbar: {
        paddingHorizontal: 8,
        paddingVertical: 25,
    },
    serc: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    },

})
