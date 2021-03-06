import React from 'react'
import { StyleSheet,SafeAreaView,ScrollView, Text, View,Dimensions,PixelRatio,Image,
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
import api from './apis'
 
export default class Dashboard extends React.Component {
constructor(){
  super()
  this.Home=true
  this.Browse=false
  this.Library=false
  this.Settings=false
  this.state={array:[]}
}

componentDidMount(){
api(data=>{
  let user=[]
data.forEach(e=>{
user.push( e)
  console.log(e.canonicalTitle)
  console.log(e.synopsis)
  console.log(e.posterImage.original)

})
this.setState({array:user})
  })

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
      ];
     
         renderItem = ({ item }) => (
            <View style={{backgroundColor:'grey',marginHorizontal:wp(2),width:330,height:hp(40),alignSelf:'center',top:hp(0),borderRadius:25}}>
    
            <ImageBackground  source={{uri:item.posterImage.original}} style={{width:330,height:hp(40)}}
             imageStyle={{borderRadius:25}}
             >
                <Text  style={{color:'white',top:hp(20),left:wp(5),height:hp(5),fontWeight:'bold',fontSize:hp(3)}}>
        {item.canonicalTitle}
                </Text>
                
                <Text  style={{color:'white',top:hp(25),left:wp(5)}}>
        Short Description
                </Text>
                <LinearGradient colors={['#FE7F14',  '#B91A15']} style={{top:hp(26),width:wp(70),alignSelf:'center',
                borderRadius:10,height:hp(6)}}>
        <TouchableOpacity 
        onPress={()=>{
          this.props.navigation.navigate('FullView',{Dark:this.props.route.params.Dark,imgurl:item.posterImage.original,title:item.canonicalTitle
          ,content:item.synopsis
          })
        }}
        >
        <Text  style={{color:'white',top:hp(1.2),left:wp(0),alignSelf:'center'}}>
        Read Now
                </Text>
        </TouchableOpacity>
        </LinearGradient>
            </ImageBackground>
            </View>
        );
    render(){
      this.Home=true
      this.Browse=false
      this.Library=false
      this.Settings=false
    return (
        <SafeAreaView style={{flex:1,justifyContent:'space-between' }}>
<ScrollView contentContainerStyle={{ backgroundColor:this.props.route.params.Dark?'black':'white',paddingBottom:hp(10) }}>
     
<Text style={{position:'relative',left:30,top:hp(6),fontSize:hp(3),fontWeight:'700',color:!this.props.route.params.Dark?'black':'white'}}>New for Reading</Text>
<Text style={{position:'relative',left:320,top:hp(3),fontSize:14,fontWeight:'100',color:'#BB1D15'}}>See All</Text>
<View style={{height:hp(40),top:hp(5)}}>
 
<FlatList
        data={this.state.array}
        horizontal={true}
        renderItem={this.renderItem}
       
      />


        
 
      
      
</View>


<Text style={{position:'relative',left:30,top:hp(8),fontSize:hp(3),fontWeight:'700',color:!this.props.route.params.Dark?'black':'white'}}>Continue Reading</Text>
<Text style={{position:'relative',left:320,top:hp(5),fontSize:hp(2),fontWeight:'100',color:'#BB1D15'}}>See All</Text>
<View style={{height:hp(20),top:hp(6)}}>
<FlatList
        data={this.state.array}
        horizontal={true}
        renderItem={({item})=>{
          return(
<TouchableOpacity style={{backgroundColor:'grey',width:wp(50),marginHorizontal:wp(3),height:hp(20),top:hp(0),borderRadius:25}}>
    
    <ImageBackground  source={{uri:item.posterImage.original}} style={{width:wp(50),height:hp(20)}} imageStyle={{borderRadius:25}}>

        <Text  style={{color:'white',top:hp(15),left:wp(5),fontWeight:'bold',fontSize:hp(2)}}>
{item.canonicalTitle}
        </Text>
        
  
    </ImageBackground>
    </TouchableOpacity>
          )
        }}
       
      />
      </View>

<Text style={{position:'relative',left:30,top:hp(8),fontSize:hp(3),fontWeight:'700',color:!this.props.route.params.Dark?'black':'white'}}>On Sale</Text>
<Text style={{position:'relative',left:320,top:hp(5),fontSize:hp(2),fontWeight:'100',color:'#BB1D15'}}>See All</Text>

<View style={{height:hp(25),top:hp(6)}}>
<FlatList
        data={this.state.array}
        horizontal={true}
        renderItem={({item})=>{
          return(
<TouchableOpacity style={{backgroundColor:'grey',width:wp(30),marginHorizontal:wp(3),height:hp(25),top:hp(0),borderRadius:25}}>
    
    <ImageBackground  source={{uri:item.posterImage.original}} style={{width:wp(30),height:hp(25)}} imageStyle={{borderRadius:25}}>

       
        
  
    </ImageBackground>
    </TouchableOpacity>
          )
        }}
       
      />
      </View>



 
</ScrollView>
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
                this.props.navigation.navigate('Browse',{Dark:this.props.route.params.Dark ,array:this.state.array})
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
                this.props.navigation.navigate('Library',{Dark:this.props.route.params.Dark ,array:this.state.array})
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