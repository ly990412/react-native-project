import React,{useState} from "react";
import {View,Text,TouchableOpacity,Image,Button,StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
const LoginScreen = ({navigation})=>{
    const [PhoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const {login, googleLogin, fbLogin} = useContext(AuthContext);
    return (
        <View style = {styles.container} >
            <Image
        source={require('../images/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>App</Text>
      <FormInput
        labelValue={PhoneNumber}
        onChangeText={(userPhoneNumber) => setPhoneNumber(userPhoneNumber)}
        placeholderText= 'Phone Number'
        keyboardType ="phone-pad"
        autoCapitalize = 'none'
        autoCorrect = {false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText= 'Password'
        secureTextEntry={true}

      />
    <FormButton
    buttonTitle= "Sign In"
    onPress = {() => login(PhoneNumber, password)}
    />
    <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="user"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
        />

        <SocialButton
            buttonTitle="Sign In with Google"
            btnType="user"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
        </View>

    );
};
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily:'Times New Roman',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Times New Roman',
    },
  });
