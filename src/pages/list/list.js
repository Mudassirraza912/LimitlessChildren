import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PlayList from '../../components/PlayList/PlayList';
import { AddToFavorite, getPlaylist, RemoveToFavorite } from '../../stores/actions/user.action';

export default function List({navigation}) {
  const [reason, setReason] = useState([
    {},
    {
      image: require('../../assets/home02.png'),
      title: 'Friends, Me & Bus',
      description: 'Child Collection',
    },
    {
      image: require('../../assets/home03.png'),
      description: 'Fantasy Collection',
    },
    {
      image: require('../../assets/home01.png'),
      title: 'Friends, Me & Bus',
      description: 'Sleep Collection',
    },
    {
      image: require('../../assets/home02.png'),
    },
    {
      image: require('../../assets/home03.png'),
      title: 'Friends, Me & Bus',
      description: 'Child Collection',
    },
    {
      image: require('../../assets/home02.png'),
      title: 'Friends, Me & Bus',
      description: 'Fantasy Collection',
    },
    {
      image: require('../../assets/home03.png'),
      description: 'Sleep Collection',
    },
  ]);
  const dispatch = useDispatch()
  const playList = useSelector((state) => state.userReducer?.playList)
  const users = useSelector(state => state.userReducer.users);

  useEffect(() => {
    dispatch(getPlaylist(users?.token))
  }, [])

  const addFavorite = (data) => {
    console.log("data", data?.isFavourite);
    if(!data?.isFavourite) {
      dispatch(AddToFavorite({videoId: data?._id}, users?.token))
    }else {
      dispatch(RemoveToFavorite({videoId: data?._id}, users?.token))
    }
    setTimeout(() => {
      dispatch(getPlaylist(users?.token))
    }, 2000)
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={'#f8b293'}
      />
      <View style={styles.container}>
        {/* <TouchableOpacity
          activeOpacity={0.9}
          // onPress={() => navigation.navigate('DetailScreen')}
          style={{width: '100%', height: '35%'}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 30,
              top: '65%',
              left: '8%',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.platText}>Friends, Me & Bus</Text>
              <Text style={{color: '#ffffff'}}>00:03</Text>
            </View>
            <Image
              style={styles.playIcon}
              source={require('../../assets/playbtn-big.png')}
            />
          </View>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
            source={require('../../assets/playlisTtitle.png')}
          />
        </TouchableOpacity> */}
        <View>
          <FlatList
            contentContainerStyle={{paddingBottom: 34}}
            vertical={true}
            data={playList || []}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              console.log("item?.isFavourite", item?.isFavourite);
              return (
                <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('VideoPlayer', {
                    vedioData: item,
                  })
                }}
                >
                  <PlayList
                    image={item.thumbnail}
                    title={item.title}
                    fav={require('../../assets/fav-ative.png')}
                    description={item?.category?.name}
                    time={item.duration}
                    isfavorite={item?.isFavourite}
                    data={item}
                    onFavorite={addFavorite}
                  />
                </TouchableOpacity>
              );
            }}/>
          {/* <View style={{height: '60%'}}></View> */}
        </View>
      </View>
    </>
  );
}

export function TabBDetails() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tab B Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  platText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  playIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: '42%',
  },
});
