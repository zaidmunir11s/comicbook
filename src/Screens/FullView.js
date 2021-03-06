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
import search from '../../assets/home/search.png'
 
 
export default class Dashboard extends React.Component {
constructor(){
  super()
  this.Home=true
  this.Browse=false
  this.Library=false
  this.Settings=false
  this.message=false
}
  
     
    render(){
    return (
 
 <SafeAreaView style={{flex:1,justifyContent:'space-between' ,backgroundColor:'#F9F9F9'}}>
 
 
 <ImageBackground  source={{uri:this.props.route.params.imgurl}} style={{flex:1,justifyContent:'space-between'}}  >

       <View style={{flexDirection:'row',justifyContent:'space-around',top:hp(3)}}>
      <TouchableOpacity
      onPress={()=>{
          this.props.navigation.goBack()
      }}
      >
       <Image source={back}  style={{height:hp(4),width:wp(4),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
</TouchableOpacity>
<View>
           <Text  style={{color:'white',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'700',fontSize:hp(3)}}>
        {this.props.route.params.title}
                </Text>
                <Text  style={{color:'white',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'100',fontSize:hp(2)}}>
        Short Description
                </Text>
                </View>
<TouchableOpacity
 onPress={()=>{
    this.props.navigation.goBack()
}}
>
                <Image source={cross}  style={{height:hp(4),width:wp(4),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
</TouchableOpacity>

       </View>
       {this.message?null:  
       <View>
       <ScrollView   style={{height:hp(50),width:wp(80),backgroundColor:'#323633',alignSelf:'center',borderRadius:10}}>
           <Text style={{color:'white',padding:5,fontSize:hp(2.5),fontStyle:'italic'}}>{this.props.route.params.content}</Text>
       </ScrollView>
       </View>}
     {this.message?null:   
    <TouchableOpacity 
    onPress={()=>{
        this.message=true
        this.forceUpdate()
    }}
    style={{height:hp(6),width:wp(7),right:wp(8),bottom:hp(10),resizeMode:'contain',alignSelf:'flex-end'}}>  
         <Image source={message}  >

</Image>
</TouchableOpacity>
    }
{this.message? 
<Animated.View 
animation="fadeInLeft"
style={ {
    backgroundColor: this.props.route.params.Dark?'black':'white',
    marginHorizontal: 10,
    borderTopLeftRadius: 30,
     
    borderTopRightRadius: 30,
    height: hp(60),
    width:wp(95),
     
  
} }>
        <View style={{flexDirection:'row',justifyContent:'space-between',top:hp(2)}}>
      <TouchableOpacity style={{backgroundColor:'transparent'}}>
       
</TouchableOpacity>
 
           <Text  style={{color:!this.props.route.params.Dark?'black':'white',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'600',fontSize:hp(2.5)}}>
        19 Comments
                </Text>
               
<TouchableOpacity style={{right:wp(5)}}
onPress={()=>{
    this.message=false
    this.forceUpdate()
}}
>
                <Image source={this.props.route.params.Dark?cross:Close}  style={{height:hp(4),width:wp(4) ,resizeMode:'contain'}}
></Image>
</TouchableOpacity>

       </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',top:hp(3),marginVertical:5}}>
       <LinearGradient colors={['#FE7F14',  '#B91A15']} 
        style = {{
            borderRadius:hp(50),
            height:hp(10) ,width:hp(10) ,
            justifyContent:'center'
          }}
          underlayColor = '#ccc'
       >

       </LinearGradient>
 
       <View>
           <Text  style={{color:'grey',top:hp(0),right:wp(0),alignSelf:'flex-start',fontWeight:'100',fontSize:hp(2)}}>
        mironkadion
                </Text>
                <Text  style={{color:!this.props.route.params.Dark?'black':'white',top:hp(0),right:wp(0),alignSelf:'flex-start',width:wp(50),fontWeight:'300',fontSize:hp(2)}}>
        Interesting Story and Cool Illustration
                </Text>
                </View>
                <View>
                    <TouchableOpacity>
                <Image source={heart}  style={{height:hp(4),width:wp(4),left:wp(0),top:hp(0.5),resizeMode:'contain'}}
></Image>
</TouchableOpacity>
                <Text  style={{color:'#FE7F14',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'100',fontSize:hp(2)}}>
      1
                </Text>
                </View>


       </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',top:hp(3),marginVertical:5}}>
       <LinearGradient colors={['#FE7F14',  '#B91A15']} 
        style = {{
            borderRadius:hp(50),
            height:hp(10) ,width:hp(10) ,
            justifyContent:'center'
          }}
          underlayColor = '#ccc'
       >

       </LinearGradient>
 
       <View>
           <Text  style={{color:'grey',top:hp(0),right:wp(0),alignSelf:'flex-start',fontWeight:'100',fontSize:hp(2)}}>
        mironkadion
                </Text>
                <Text  style={{color:!this.props.route.params.Dark?'black':'white',top:hp(0),right:wp(0),alignSelf:'flex-start',width:wp(50),fontWeight:'300',fontSize:hp(2)}}>
        Interesting Story and Cool Illustration
                </Text>
                </View>
                <View>
                    <TouchableOpacity>
                <Image source={heart}  style={{height:hp(4),width:wp(4),left:wp(0),top:hp(0.5),resizeMode:'contain'}}
></Image>
</TouchableOpacity>
                <Text  style={{color:'#FE7F14',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'100',fontSize:hp(2)}}>
      1
                </Text>
                </View>


       </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',top:hp(3),marginVertical:5}}>
       <LinearGradient colors={['#FE7F14',  '#B91A15']} 
        style = {{
            borderRadius:hp(50),
            height:hp(10) ,width:hp(10) ,
            justifyContent:'center'
          }}
          underlayColor = '#ccc'
       >

       </LinearGradient>
 
       <View>
           <Text  style={{color:'grey',top:hp(0),right:wp(0),alignSelf:'flex-start',fontWeight:'100',fontSize:hp(2)}}>
        mironkadion
                </Text>
                <Text  style={{color:!this.props.route.params.Dark?'black':'white',top:hp(0),right:wp(0),alignSelf:'flex-start',width:wp(50),fontWeight:'300',fontSize:hp(2)}}>
        Interesting Story and Cool Illustration
                </Text>
                </View>
                <View>
                    <TouchableOpacity>
                <Image source={heart2}  style={{height:hp(4),width:wp(4),left:wp(0),top:hp(0.5),resizeMode:'contain'}}
></Image>
</TouchableOpacity>
                <Text  style={{color:'#FE7F14',top:hp(0),left:wp(0),alignSelf:'center',fontWeight:'100',fontSize:hp(2)}}>
      1
                </Text>
                </View>


       </View>
  </Animated.View>
  :null}
</ImageBackground>
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({
    
})
