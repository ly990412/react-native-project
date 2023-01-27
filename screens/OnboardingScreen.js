import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import {View,Text,Button,Image,TouchableOpacity,StyleSheet} from 'react-native';
const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ?'rgba(0,0,0,0.8)': 'rgba(0, 0, 0, 0.3)';
    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}
const Skip = ({...props}) =>(
    <Button
    title="Skip"
    color='black'
    {...props}
    />
)
const Next = ({...props}) =>(
    <Button
    title="Next"
    color='black'
    {...props}
    />
)
const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({navigation})=>{
    return (
        <Onboarding
        SkipButtonComponent = {Skip}
        NextButtonComponent = {Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip = {() => navigation.navigate("Login")}
        onDone = {() => navigation.navigate("Login")}
            pages={[
        {
      backgroundColor: '#fdeb93',
      image: <Image source={require('../images/onboarding-img1.png')} />,
      title: 'Connect the world',
      subtitle: 'Become a star in the world',
        },
        {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../images/onboarding-img2.png')} />,
            title: 'Share your monments',
            subtitle: 'Happiness is often in the little things',
        },
        {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../images/onboarding-img3.png')} />,
            title: 'Text your friends',
            subtitle: 'Send messages to yout friends',
        },
   
        ]}
    />

    );
};
export default OnboardingScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});