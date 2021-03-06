
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
export default class User{


   async setUser(email,password,username,flag,dup){
     
    firestore()
    .collection('Users')
    // Filter results
    .where('email', '==', email)
    .get().then(emailExist=>{

      if (emailExist.empty) {
        firestore()
        .collection('Users')
        // Filter results
        .where('Username', '==', username)
        .get().then(Ph=>{
  
          if (Ph.empty) {
        firestore()
        .collection('Users')
        .add({ 
    email: email,
    Username:username,
    password: password
    
  })
  .then(() => {
    flag(true)  
    console.log('Data set.')});
  firestore()
  .collection('UserID')
  .add({ 
userid: email

})

     }else{
         dup(true)
     }
    })
  }else{dup(true)}
})

}
getUser(Userid,password,flag){
    
        firestore()
        .collection('Users')
        // Filter results
        .where('Username', '==', Userid)
        .get().then(Ph=>{ 
  
          if (!Ph.empty) {
             
                Ph.forEach(e=>{ 
                  if(e.data().password==password){
                    console.log( e.data())
                 flag( e.data())
                }
                }) 
         }else{alert('Username or Password is Invalid')}
         })
      }
      
}