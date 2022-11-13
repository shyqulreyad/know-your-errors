import { db } from '@/firebase/config'
import { ref } from '@vue/reactivity'
import { doc, getDoc } from "firebase/firestore";
const getSinglePost = (id)=>{

    const post = ref(null)
    const error = ref(null)

    const load = async() =>{
        try{
            const docRef = doc(db, "post", id);
           const docSnap = await getDoc(docRef);
           if (docSnap.exists()) {
            post.value = { ...docSnap.data().post, id: docSnap.id}
          } else {
            // doc.data() will be undefined in this case
            throw Error ('The post does not exist')
          }

        }
        catch(err){
                error.value = err.message
        }
    }
    return {post, error, load}
}
export default getSinglePost