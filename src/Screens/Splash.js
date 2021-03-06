import React from 'react'
import { StyleSheet,SafeAreaView,ScrollView, Text, View,Dimensions,PixelRatio,Image,TextInput,StatusBar,Animated,
  ImageBackground,FlatList,TouchableOpacity } from 'react-native'
import backg from '../../assets/home/2.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import back from '../../assets/home/back.png'
import cross from '../../assets/home/cross.png'
import Close from '../../assets/home/Close.png'
import message from '../../assets/home/message.png'
import heart from '../../assets/home/heart.png'
import heart2 from '../../assets/home/heart2.png'
import Browse2 from '../../assets/home/Browse2.png'
import Library2 from '../../assets/home/Library2.png'
import Logo from '../../assets/home/Logo.png'
import { Mangakakalot } from 'gechitzen';
 
export default class Dashboard extends React.Component {
constructor(){
  super()
  this.Home=true
  this.Browse=false
  this.Library=false
  this.Settings=false
  this.message=false
}
  componentDidMount(){
    setTimeout(() => {
        this.props.navigation.navigate('SignIn')
    }, 1000)
  }
     
    render(){
    return (
 
 <SafeAreaView style={{flex:1,justifyContent:'space-between' ,backgroundColor:'#F9F9F9'}}>
 
 
 <LinearGradient colors={['#FE7F14',  '#B91A15']} 
 style={{flex:1,justifyContent:'center'}}
 >
<Image source={Logo}  style={{height:hp(40),width:wp(40),alignSelf:'center',resizeMode:'contain'}}
></Image>
<Text  style={{color:'white',bottom:hp(8),alignSelf:'center',fontWeight:'bold',fontSize:hp(6)}}>
     Symbah
                </Text>
 </LinearGradient>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    
})
