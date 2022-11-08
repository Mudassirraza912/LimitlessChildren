import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform,
  Image,
  Text,
} from 'react-native';
import styles from './styles';
export default function CardView({
  title = 'Snail Riding',
  description = 'Rhymes Collection',
  color = '#fff',
  image = require('../../assets/home01.png'),
  play = require('../../assets/playbtn-big.png'),
  onPress,
}) {
  return (
    <View
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress} style={styles.imageContainer}>
        <Image style={styles.playIcon} source={play} />
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </TouchableOpacity>

      <View style={{ width: 155, marginTop: 5 }}>
        <Text
          numberOfLines={1}
          style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
