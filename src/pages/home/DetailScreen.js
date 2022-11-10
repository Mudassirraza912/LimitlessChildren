import { useIsFocused } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CardView } from '../../components';
import Loader from '../../components/Loader';
import { AddToPlaylist, RemoveToPlaylist } from '../../stores/actions/user.action';
import { Get } from '../../utils/apicalls/apicalls';

function DetailScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer.users);

  const [data, setSelectedItem] = useState(null);
  const [loader, setLoader] = useState(false)
  const [selectedItem, setselectedCurrentItem] = useState(route?.params?.vedioData);
  const isFocused = useIsFocused()
  const getOneStory = () => {
    setLoader(true)
    Get(
      `https://limitless-dev-backend.herokuapp.com/v1/story/${selectedItem?._id}`,
      {},
      users.token,
    )
      .then(function (response) {
        setLoader(false)
        if (response.status == 200) {
          console.log('response?.data)', response?.data);
          setSelectedItem(response?.data);
        } else {
          console.log('error else');
        }
      })
      .catch(function (error) {
        setLoader(false)
        console.log('GetStoryAction error', error);
      });
  };

  useEffect(() => {
    console.log('useEffect')
    getOneStory();
  }, [isFocused, selectedItem]);


  useEffect(() => {
    setselectedCurrentItem(route?.params?.vedioData);
  }, [isFocused]);



  const addToPlaylist = () => {
    if (!data?.isPlaylist) {
      dispatch(AddToPlaylist({ videoId: data?._id }, users?.token));
    } else {
      dispatch(RemoveToPlaylist({ videoId: data?._id }, users?.token));
    }
  };
  return (
    <>
      <Loader visible={loader} />
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('VideoPlayer', {
              vedioData: data,
            })
          }
          activeOpacity={1}
          style={{ width: '100%', height: '40%' }}> 
          <View style={styles.imageContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={styles.imgcard} >
              <Image style={styles.backpng} source={require('../../assets/backIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={[styles.imgcard, {alignItems:'flex-end'}]} >
              <Image style={styles.backpng} source={require('../../assets/3-dots.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 30,
              top: '35%',
              // left: "10%",
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <Image
              style={styles.playIcon}
              source={require('../../assets/storydetail-play-icon.png')}
            />
          </View>
          <Image
            style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
            source={{ uri: data?.thumbnail }}
          />
        </TouchableOpacity>
        <View style={{ paddingVertical: 10, }}>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', width: '60%', alignItems: "center", justifyContent: "flex-start" }}>
              <Text
                numberOfLines={2}
                style={{ color: '#4d585b', fontFamily: 'Poppins-Bold' }}>
                {data?.title}
              </Text>
              <View style={styles.btn}>
                <Text
                  style={{ fontSize: 10, color: '#ffffff', fontWeight: 'bold' }}>
                  New
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={addToPlaylist}
              style={{ marginTop: 6, justifyContent: "center", alignItems: "center" }}>
              <Image
                style={styles.addPng}
                source={require('../../assets/addLogo.png')}
              />
              <Text style={styles.listText}>
                {data?.isPlaylist ? 'Remove' : 'Add'} to list
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row1}>
            <Image
              style={{ width: 18, height: 18, resizeMode: 'contain' }}
              source={require('../../assets/eye-icon.png')}
            />
            <Text style={styles.view}>{data?.views} View</Text>
            <View
              style={{
                width: 1,
                height: '80%',
                backgroundColor: '#4d585b',
                marginHorizontal: 10,
              }}></View>
            <Text>{data?.duration}</Text>
          </View>
        </View>
        <Text style={styles.dec}>{data?.description}</Text>
        <View style={styles.border}></View>
        <View>
          <Text style={styles.storiesText}>RELATED STORIES</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 8 }}>
            {data?.related.map(item => {
              return (
                <CardView
                  onPress={() => {
                    // navigation.navigate('DetailScreen', {
                    //   vedioData: item,
                    // });
                    setselectedCurrentItem(item)
                  }}
                  image={item?.thumbnail}
                  title={item?.title}
                  description={item.description}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

// const mapStateToProps = state => {
//     return { userInfo: state?.userInfo };
// };

// export default connect(mapStateToProps)(DetailScreen);

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  playIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addPng: {
    width: 24,
    height: 24,
    resizeMode: 'contain',

  },
  btn: {
    backgroundColor: '#bfcfc7',
    // paddingHorizontal: 10,
    // paddingVertical: 3,
    height: 20,
    width: 45,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  dec: {
    paddingHorizontal: 20,
    lineHeight: 20,
    paddingVertical: 10,
    fontSize: 13,
  },
  border: {
    backgroundColor: '#efeeef',
    width: '90%',
    height: 2,
    alignSelf: 'center',
  },
  storiesText: {
    paddingLeft: 20,
    marginTop: 10,
    color: '#4d585b',
    fontWeight: 'bold',
  },
  row1: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  view: {
    paddingHorizontal: 10,
    color: '#4d585b',
  },
  listText: {
    color: '#f8b293',
    fontSize: 12,
    fontWeight: 'bold',
  },
 
  imageContainer: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  imgcard: {
    width: 50,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  backpng: {
    width: 22,
    height: 22,
    tintColor: "#fff",
    resizeMode: "contain"
  },

});
