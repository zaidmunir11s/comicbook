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
import Dark from '../../assets/home/Dark.png'
import light from '../../assets/home/light.png'
 
 
export default class Dashboard extends React.Component {
constructor(){
  super()
  this.Home=true
  this.Browse=false
  this.Library=false
  this.Settings=false
  this.message=false
  this.Dark=null
}
  
    render(){
    return (
 
 <SafeAreaView style={{flex:1,justifyContent:'center',flexDirection:'row' ,backgroundColor:'#F9F9F9'}}>
 
 
 <TouchableOpacity
 onPress={()=>{
     this.Dark=false
     this.props.navigation.navigate('Home',{Dark:this.Dark})
 }}
 >
     <ImageBackground source={light}  style={{
     opacity:0.9,
     height:hp(100),width:wp(60),alignSelf:'center',resizeMode:'stretch'}}
>
 <View style={{width:wp(34),borderRadius:20,height:hp(7),top:hp(40),alignSelf:'center',backgroundColor:'white'}}>
    <Text style={{alignSelf:'center',top:hp(1.5),fontSize:hp(3),fontWeight:'700'}}>Light Mode</Text>
    </View>
</ImageBackground>
</TouchableOpacity>
<TouchableOpacity
 onPress={()=>{
    this.Dark=true
    this.props.navigation.navigate('Home',{Dark:this.Dark})
}}
>
<ImageBackground source={Dark}  style={{
     opacity:0.9,
     height:hp(100),width:wp(60),alignSelf:'center',resizeMode:'stretch'}}
>
 <View style={{width:wp(34),borderRadius:20,height:hp(7),top:hp(40),alignSelf:'center',backgroundColor:'black'}}>
    <Text style={{alignSelf:'center',top:hp(1.5),fontSize:hp(3),fontWeight:'700',color:'white'}}>Dark Mode</Text>
    </View>
</ImageBackground>
</TouchableOpacity>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    
})
