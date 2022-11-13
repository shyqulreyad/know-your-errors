<template>
<div class="create">
    <form @submit.prevent="handleSubmit" >
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Content:</label>
        <textarea v-model="body" required></textarea>
        <label>Tags (Press enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="addTag">
        <div class="pill" v-for="tag in tags" :key="tag">
          <span style="cursor:pointer" @click="removetag(tag)" > {{tag}}</span>
        </div>
        <button>
            Add Post
        </button>
    </form>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { collection, addDoc } from "firebase/firestore"; 
import { updateDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase/config'
export default {
  setup(){
    const title = ref('')
    const body = ref('')
    const tag = ref('')
    const tags = ref([])

    const router = useRouter()

    const addTag =() =>{
        if(!tags.value.includes(tag.value)){
            tag.value = tag.value.replace(/\s/,'')  //removes white spaces

            tags.value.push(tag.value)
        }
        tag.value = ''
    }
    const removetag = (tag) =>{
        tags.value = tags.value.filter((item)=>{
            return tag !==item
        })
    }
    
    const handleSubmit = async ()=>{
        const post ={
            title:title.value,
            body:body.value,
            tags:tags.value,
            createdAt:serverTimestamp()
        }

        // Add a new document in collection "cities"
            await addDoc(collection(db, "post"), {post});

        router.push({ name:'home'})
    }

    return {title,body,tag,addTag,tags, handleSubmit, removetag}
  }
}
</script>

<style>
form{
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input, textarea{
    outline: none;
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #eee;
    padding: 10px;
}
textarea{
    height: 160px;
}
label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
}
label::before{
    content:"";
    display: block;
    width: 100%;
    height: 100%;
    background: #dfdffd;
    position:absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}
button{
   display: block;
   margin-top: 30px;
   background: #dfdffd;
   color:black;
   border:none;
   padding:8px 16px;
   font-size: 18px;
}
.pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color:#444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>