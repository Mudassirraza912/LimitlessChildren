import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { connect, useSelector } from 'react-redux';
import { Get } from '../../utils/apicalls/apicalls';

export default function search({ navigation }) {
  const [search, setSearch] = useState('');
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
  console.log("data=======", data)

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
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

      {data?.docs[0]?.title == null ?
        <View style={styles.notFoundView}>
          <Text>
            No Videos Found!
          </Text>
        </View> : null}


      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: '17%', paddingHorizontal: 10 }}
        data={data?.docs}
        renderItem={({ item, index }) => {
          // console.log('item=========', item,)
          return (
            <>
              {search ?

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    navigation.navigate('VideoPlayer', {
                      vedioData: item,
                    }),
                      setSearch((data?.docs[0]?.title))
                  }}
                  key={index}
                  style={styles.searchVideoButtonPlay}>
                  <View style={styles.buttonContainer}>
                    <View style={styles.ImageContainer}>
                      <Image
                        style={styles.ImageStyle}
                        source={item?.thumbnail
                          ? { uri: item?.thumbnail }
                          : require('../../assets/storydetail-play-icon.png')} />
                    </View>
                    <View style={{ width: '82%' }}>
                      <Text
                        style={styles.textStyle}
                        numberOfLines={2}>
                        {item?.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                : null
              }
            </>)
        }} />

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",

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
  notFoundView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  ImageContainer: {
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    alignSelf: "center",
    borderRadius: 6,
    marginRight: 8,
    overflow: "hidden"
  },
  ImageStyle: {
    height: '100%',
    width: "100%",
    resizeMode: "cover"
  },
  searchVideoButtonPlay: {
    backgroundColor: "#f2f2f2",
    marginVertical: 2,
    width: '100%',
    alignSelf: "center",
    padding: 6,
    borderRadius: 6,
    overflow: "hidden"
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-regular',
  },
})
