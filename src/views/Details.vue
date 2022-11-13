<template>
   <div class="detail">
         <div v-if="error"> {{error}} </div>
         <div v-if="post" class="post">
                <h3> {{post.title}} </h3>
               <p class="pre"> {{post.body}} </p>

               <button @click="handleClick">Delete</button>
         </div>
         <div v-else>
            <Spinner/>
         </div>
   </div>

</template>

<script>
import getSinglePost from '@/composables/getSinglePost';
import Spinner from '@/components/Spinner.vue';
import { db } from '@/firebase/config';
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from 'vue-router';

export default {
    props: ["id"],
    setup(props) {
      const router = useRouter()
        const { post, error, load } = getSinglePost(props.id);
        load();

        const handleClick = async()=>{
         await deleteDoc(doc(db, "post", props.id));
         router.push({ name:'home'})
        }
        return { error, post,handleClick };
    },
    components: { Spinner}
}
</script>

<style>
.post{
   max-width:1200px;
   margin: 0 auto;
}
.post p {
   color: #444;
   line-height: 1.5em;
   margin-top: 40px;
}
.pre{
   white-space: pre-wrap;
}
.detail{
   text-align: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>