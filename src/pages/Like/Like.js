import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PlayList from '../../components/PlayList/PlayList';
import {
  AddToFavorite,
  getFavoritelist,
  RemoveToFavorite,
} from '../../stores/actions/user.action';

export default function Like({navigation}) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(state => state.userReducer?.favoriteList);
  const users = useSelector(state => state.userReducer.users);

  useEffect(() => {
    dispatch(getFavoritelist(users?.token));
  }, []);

  const addFavorite = data => {
    console.log('data', data?.isFavourite);
    if (!data?.isFavourite) {
      dispatch(AddToFavorite({videoId: data?._id}, users?.token));
    } else {
      dispatch(RemoveToFavorite({videoId: data?._id}, users?.token));
    }
    setTimeout(() => {
      dispatch(getFavoritelist(users?.token));
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={favoriteList || []}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          vertical={true}
          renderItem={({item}) => {
            return (
              <View>
                <PlayList
                  image={item.thumbnail}
                  title={item.title}
                  fav={require('../../assets/fav-ative.png')}
                  description={item?.category?.name}
                  isfavorite={item?.isFavourite}
                  data={item}
                  onFavorite={addFavorite}
                />
              </View>
            );
          }}
        />
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
  },
});
