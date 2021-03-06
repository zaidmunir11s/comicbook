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
import profile from '../../assets/profile.png'
import lock from '../../assets/padlock.png'
import email from '../../assets/email.png'
import { Mangakakalot } from 'gechitzen';
import user1 from './database/users'
const user=new user1()
 
export default class Dashboard extends React.Component {
constructor(){
  super()
  this.Home=true
  this.Browse=false
  this.Library=false
  this.Settings=false
  this.message=false
  this.state={username:null,password:null,email:null}
}
   
     
    render(){
    return (
 
 <SafeAreaView style={{flex:1,justifyContent:'space-between' ,backgroundColor:'#F9F9F9'}}>
 
 
 <LinearGradient colors={['#B91A15',  '#404040']} 
 style={{flex:1,justifyContent:'center'}}
 >
     <Image source={Logo}  style={{height:hp(30),width:wp(30),bottom:hp(8),alignSelf:'center',resizeMode:'contain'}}
></Image>
<Text  style={{color:'white',bottom:hp(15),alignSelf:'center',fontWeight:'bold',fontSize:hp(4)}}>
     Symbah
                </Text>
<LinearGradient colors={['#B91A15' , '#404040']} 
 style={{height:hp(50),width:wp(80),borderBottomRightRadius:200,bottom:hp(10),justifyContent:'center',alignSelf:'center',elevation:5}}
 >

<View style={{width:wp(60),height:hp(6),flexDirection:'row',borderWidth:0,
alignSelf:'center',backgroundColor:'#D5D9DF',bottom:hp(8),borderRadius:10}}>
<Image source={profile}  style={{height:hp(5),width:wp(5),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
    <TextInput 
 placeholder={'Enter Username'}
 style={{left:wp(5)}}
 onChangeText={(e)=>{
     this.setState({username:e})
 }}
> 


</TextInput>

</View>
<View style={{width:wp(60),height:hp(6),flexDirection:'row',borderWidth:0,
alignSelf:'center',backgroundColor:'#D5D9DF',bottom:hp(7),borderRadius:10}}>
<Image source={lock}  style={{height:hp(5),width:wp(5),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
    <TextInput 
 placeholder={'Enter Password'}
 secureTextEntry={true}
 style={{left:wp(5)}}
 onChangeText={(e)=>{
    this.setState({password:e})
}}
> 


</TextInput>

</View>
<View style={{width:wp(60),height:hp(6),flexDirection:'row',borderWidth:0,
alignSelf:'center',backgroundColor:'#D5D9DF',bottom:hp(6),borderRadius:10}}>
<Image source={email}  style={{height:hp(5),width:wp(5),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
    <TextInput 
 placeholder={'Enter Email'}
 style={{left:wp(5)}}
 onChangeText={(e)=>{
    this.setState({email:e})
}}
> 


</TextInput>

</View>
<LinearGradient colors={['#B91A15',  '#B91A15']} style={{bottom:hp(3),width:wp(60),alignSelf:'center',
                borderRadius:10,height:hp(6)}}>
        <TouchableOpacity 
        onPress={()=>{
            if(this.state.email!=null && this.state.password!=null && this.state.username!=null){
            user.setUser(this.state.email,this.state.password,this.state.username,flag=>{
                if(flag){
                    this.props.navigation.navigate('SignIn',{Dark:true} )
                }
            },dup=>{
                if(dup){
                    alert('User Already Existed')
                }
            })}
         
        }}
        >
        <Text  style={{color:'white',top:hp(1.2),left:wp(0),alignSelf:'center'}}>
        Sign Up
                </Text>
        </TouchableOpacity>
        </LinearGradient>
      
 </LinearGradient>
 </LinearGradient>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    
})
