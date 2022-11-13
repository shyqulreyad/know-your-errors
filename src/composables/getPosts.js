import { ref } from '@vue/reactivity'
import {db} from '../firebase/config'
import { collection, getDocs } from "firebase/firestore"; 
import { query, orderBy, limit } from "firebase/firestore";  
const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)

    const load = async ()=>{

      try{

        const querySnapshot = await getDocs(collection(db, "post"));
        // query(collection(db, 'post'), orderBy('createdAt'));
        posts.value = querySnapshot.docs.map(doc =>{
            return { ...doc.data().post, id: doc.id}
        })
      }
      catch(err){
          error.value = err.message;
          console.log(error.value)
      }
    }

    return { posts, error, load}
}

export default getPosts