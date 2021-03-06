
import Kitsu from 'kitsu'      
let array=[]
const apii = new Kitsu()
export default async function api(data){


 
apii.get('anime',{
  params: {
    include: 'categories'
  }
} )
  .then(async res => { 
   
    await data(res.data)
    })
  
}