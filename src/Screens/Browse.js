import React from 'react'
import { StyleSheet,SafeAreaView,ScrollView, Text, View,Dimensions,PixelRatio,Image,TextInput,
  ImageBackground,FlatList,TouchableOpacity } from 'react-native'
import backg from '../../assets/home/2.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var {height, width} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Home from '../../assets/home/Home.png'
import Browse from '../../assets/home/Browse.png'
import Library from '../../assets/home/Library.png'
import settings from '../../assets/home/settings.png'
import Home2 from '../../assets/home/Home2.png'
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
}
    height(val){
        let val2= val/100
        let finalval= val/100
        console.log(finalval)
        return height*finalval
    }
     DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: '58694a0sf-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: '58694a0f-3da1-47w1f-bd96-145571e29d72',
            title: 'Third Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-1145571e29d72',
            title: 'Third Item',
          },
          {
            id: '58694a0f-3d2a1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
      ];
     
         renderItem = ({ item }) => (
            <View style={{backgroundColor:'grey',marginHorizontal:wp(2),width:330,height:hp(40),alignSelf:'center',top:hp(0),borderRadius:25}}>
    
            <ImageBackground  source={backg} style={{width:330,height:hp(40)}}
             imageStyle={{borderRadius:25}}
             >
                <Text  style={{color:'white',top:hp(25),left:wp(5),fontWeight:'bold',fontSize:hp(3)}}>
        Name of the book
                </Text>
                
                <Text  style={{color:'white',top:hp(25),left:wp(5)}}>
        Short Description
                </Text>
                <LinearGradient colors={['#FE7F14',  '#B91A15']} style={{top:hp(26),width:wp(70),alignSelf:'center',
                borderRadius:10,height:hp(6)}}>
        <TouchableOpacity  >
        <Text  style={{color:'white',top:hp(1.2),left:wp(0),alignSelf:'center'}}>
        Read Now
                </Text>
        </TouchableOpacity>
        </LinearGradient>
            </ImageBackground>
            </View>
        );
    render(){
      this.Home=false
      this.Browse=true
      this.Library=false
      this.Settings=false
    return (
        <SafeAreaView style={{flex:1,justifyContent:'space-between' ,backgroundColor:this.props.route.params.Dark?'black':'white'}}>
 
     

 
 

 
 
 <Text style={{position:'relative',left:30,top:hp(6),fontSize:hp(4),fontWeight:'700',width:wp(80),color:!this.props.route.params.Dark?'black':'white'}}>Find the best comics for your Library</Text>
<View style={{width:wp(80),height:hp(6),flexDirection:'row',borderWidth:0,
alignSelf:'center',backgroundColor:'#D5D9DF',top:hp(6),borderRadius:10}}>
<Image source={search}  style={{height:hp(5),width:wp(5),left:wp(2),top:hp(0.5),resizeMode:'contain'}}
></Image>
    <TextInput 
 placeholder={'Search'}
 style={{left:wp(5)}}
> 
 

</TextInput>

</View>

<View style={{height:hp(65),top:hp(6)}}>

<FlatList
        data={this.props.route.params.array}
        numColumns={2}
       columnWrapperStyle={{justifyContent:'space-evenly'}}
        renderItem={({item})=>{
          
          return(
           
<TouchableOpacity style={{backgroundColor:'grey',width:wp(40),marginVertical:hp(2) ,height:hp(25),top:hp(0),borderRadius:25}}>
    
    <ImageBackground   source={{uri:item.posterImage.original}}  style={{width:wp(40),height:hp(25)}} imageStyle={{borderRadius:25}}>

    <Text  style={{color:'white',top:hp(10),left:wp(5),fontWeight:'bold',fontSize:hp(2)}}>
        {item.canonicalTitle}
                </Text>
        
  
    </ImageBackground>
    </TouchableOpacity>
          )
        }}
       
      />
      </View>



 
      <View style={{height:hp(10),flexDirection:'row',justifyContent:'space-evenly',backgroundColor:this.props.route.params.Dark?'black':'white'}}>
             <TouchableOpacity style={{}}
             onPress={()=>{
               this.Home=true
               this.Browse=false
               this.Library=false
               this.Settings=false
               this.props.navigation.navigate('Home',{Dark:this.props.route.params.Dark})
               this.forceUpdate()
               
               
             }}
             >
             <Image source={this.Home?Home2:Home}  style={{height:hp(10),width:wp(10),bottom:hp(1),resizeMode:'contain'}}></Image>
             <Text  style={{color:this.Home?'#BB1D15':'#BCC0C6',bottom:hp(3.5),left:wp(0.5),fontWeight:'bold',fontSize:hp(2)}}>
Home
        </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{}}
              onPress={()=>{
                this.Home=false
                this.Browse=true
                this.Library=false
                this.Settings=false
                this.props.navigation.navigate('Browse',{Dark:this.props.route.params.Dark,array:this.props.route.params.array})
                this.forceUpdate()
              }}
             >
             <Image source={this.Browse?Browse2 :Browse}  style={{height:hp(10),width:wp(10),bottom:hp(1),resizeMode:'contain'}}></Image>
             <Text  style={{color:this.Browse?'#BB1D15':'#BCC0C6',bottom:hp(3.5),left:wp(0.5),fontWeight:'bold',fontSize:hp(2)}}>
Browse
        </Text>          
             </TouchableOpacity>
             <TouchableOpacity style={{}}
              onPress={()=>{
                this.Home=false
                this.Browse=false
                this.Library=true
                this.Settings=false
                this.props.navigation.navigate('Library',{Dark:this.props.route.params.Dark ,array:this.props.route.params.array})
                this.forceUpdate()
              }}
             >
             <Image source={this.Library?Library2:Library}  style={{height:hp(10),width:wp(10),bottom:hp(1),resizeMode:'contain'}}></Image>
             <Text  style={{color:this.Library?'#BB1D15':'#BCC0C6',bottom:hp(3.5),left:wp(0.5),fontWeight:'bold',fontSize:hp(2)}}>
Library
        </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{}}
              onPress={()=>{
                this.Home=false
                this.Browse=false
                this.Library=false
                this.Settings=true
                
                this.forceUpdate()
              }}
             
             >
             <Image source={settings}  style={{height:hp(10),width:wp(10),bottom:hp(1),resizeMode:'contain'}}></Image>
             <Text  style={{color:'#BCC0C6',bottom:hp(3.5),right:wp(1),fontWeight:'bold',fontSize:hp(2)}}>
Settings
        </Text>
             </TouchableOpacity>
             </View> 
        </SafeAreaView>
    )
    }
}

const styles = StyleSheet.create({})
