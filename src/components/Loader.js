import React, {Component} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

export default class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount = async () => {
  //     let userDetails = await AsyncStorage.getItem("userDetails")
  //     console.log("details")
  //     console.log(JSON.parse(userDetails))
  //     // this.props.screenProps = JSON.parse(userDetails)
  //     this.props.navigation.navigate(userDetails ? "UserStack" : "AuthStack")
  // }

  render() {
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Modal transparent={true} visible={this.props.visible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <ActivityIndicator color="#f8b293" size={'large'} />
          </View>
        </Modal>
      </View>
    );
  }
}
