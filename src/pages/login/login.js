import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect, useDispatch} from 'react-redux';
import {userLogin} from '../../redux/actions';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import { ButtonView } from '../../components';
import {ToastMessage} from '../../components/ToastMessage/ToastMessage';
import {SignInAction} from '../../stores/actions/user.action';
function Login() {
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const SignInFunc = () => {
    if (!email || !password) {
      ToastMessage('Please fill all fields', null, 'error');
    } else {
      let data = {
        email: email,
        password: password,
      };
      // console.log('data', data);

      dispatch(SignInAction(data, navigation));

      // ToastMessage('done he ', null, 'success');
    }
  };
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'transparent'}/> */}
      <KeyboardAvoidingView style={styles.MainContainer}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/loginbg.jpg')}>
          <View style={styles.container}>
            <View style={{height: '20%'}}>
              <Image
                style={styles.logoImage}
                source={require('../../assets/login-logo.png')}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#a7b0b6"
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <View>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              // onPress={() => navigation.navigate('MainDrawer')}
              onPress={() => {
                SignInFunc();
              }}
              style={styles.btn}>
              <Text style={{color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text style={styles.orLoginText}>OR LOGIN WITH</Text>
            <View style={styles.logoRow}>
              <Image
                style={styles.logoImageFG}
                source={require('../../assets/loginFb.png')}
              />
              <Image
                style={styles.logoImageFG}
                source={require('../../assets/googleLogo.png')}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.accountText}>
                Don't have an account?{' '}
                <Text style={{color: '#699494', fontFamily: 'Poppins-Bold'}}>
                  Signup
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

// const mapStateToProps = state => {
//   return {userInfo: state?.userInfo};
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({userLogin}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

const styles = StyleSheet.create({
  input: {
    height: 56,
    margin: 12,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingLeft: '8%',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: '#e6aea1',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 14,
    marginVertical: 20,
  },
  forgot: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#699494',
    fontFamily: 'Poppins-Bold',
  },
  orLoginText: {
    color: '#4d585b',
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'Poppins-Medium',
  },
  accountText: {
    textAlign: 'center',
    color: '#4d585b',
    paddingVertical: 10,
    fontWeight: 'bold',
    marginTop: 15,
    fontFamily: 'Poppins-Bold',
  },
  logoImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logoImageFG: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  logoRow: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});
