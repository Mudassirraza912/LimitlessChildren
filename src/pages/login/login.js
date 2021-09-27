import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
// import { ButtonView } from '../../components';

function Login({navigation, userInfo, userLogin,}) {
  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.MainContainer}>
      <ImageBackground
        style={{height: '100%', width: '100%'}}
        source={require('../../assets/LoginBackground.png')}>
        <View style={styles.LogoContainer}>
          <Image
            style={styles.Logo}
            source={require('../../assets/LogoWithLogin.png')}
          />
        </View>
        <View style={{flex: 1.5}}>
          <View style={styles.InputContainer}>
            <View
              style={{
                marginVertical: 10,
                height: 50,
                width: 280,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                source={require('../../assets/InputBackground1.png')}>
                <View style={{marginLeft: 8}}>
                  <Input
                    placeholder="Email"
                    inputContainerStyle={{borderBottomWidth: 0}}
                    keyboardType="email-address"
                    style={styles.InputTextField}
                    leftIcon={
                      <Image
                        style={styles.InputLogo}
                        source={require('../../assets/EmailMsgIcon.png')}
                      />
                    }
                  />
                </View>
              </ImageBackground>
            </View>

            <View
              style={{
                marginVertical: 10,
                height: 50,
                width: 280,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
                source={require('../../assets/InputBackground1.png')}>
                <View style={{marginLeft: 8}}>
                  <Input
                    placeholder="Password"
                    inputContainerStyle={{borderBottomWidth: 0}}
                    secureTextEntry={hidePass ? true : false}
                    style={styles.InputTextField}
                    leftIcon={
                      <Image
                        style={styles.InputLogo}
                        source={require('../../assets/EmailLockIcon.png')}
                      />
                    }
                    rightIcon={
                      <Icon
                        name={hidePass ? 'eye-off' : 'eye'}
                        size={15}                        
                        color="#b2b5be"
                        // color="#d6dadf"
                        onPress={() => setHidePass(!hidePass)}
                      />
                    }
                  />
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.forgotPassword}>
            <Text style={{fontSize: 10, color: '#fff'}}>Forget Password?</Text>
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              activeOpacity={0.7}
              style={{flex: 0.8, flexDirection: 'row'}}>
              <Image
                style={styles.Button}
                source={require('../../assets/signinButton.png')}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={styles.linedv}></View>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 10,
                  fontFamily: 'Raleway-Regular',
                  paddingHorizontal: 10,
                }}>
                Or Login with
              </Text>
              <View style={styles.linedv}></View>
            </View>

            <View
              style={{flex: 1, flexDirection: 'row', marginHorizontal: '9%'}}>
              <TouchableOpacity 
                activeOpacity={0.7}
                style={{flex: 1, width: '100%', paddingHorizontal: 5,}}>
                <Image
                  style={styles.Button}
                  source={require('../../assets/facebookButton.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}                
                style={{flex: 1, width: '10%', paddingHorizontal: 5,}}>
                <Image
                  style={styles.Button}
                  source={require('../../assets/googleButton.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', fontSize: 10}}>
              Don't have an account?
              <Text
                onPress={() => navigation.navigate('Signup')}
                style={{color: '#fe8000', fontSize: 10}}>
                Signup
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = state => {
  return {userInfo: state?.userInfo};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogin}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  LogoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Logo: {
    height: '75%',
    width: '90%',
    resizeMode: 'contain',
  },
  InputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputTextField: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
  },
  InputLogo: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  forgotPassword: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginHorizontal: '12%',
  },
  ButtonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  Button: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  linedv: {
    width: 18,
    backgroundColor: '#fff',
    height: 0.6,
  },
});
