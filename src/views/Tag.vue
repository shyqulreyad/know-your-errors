<template>
    <div class="tag">
      <div v-if="error"> {{error}} </div>
      <div v-if="posts.length" class="layout">
      
        <PostList :posts = "postWithTag"/>
        <TagCloud :posts="posts"/>
      </div>
      <div v-else>
        <Spinner/>
      </div>
    </div>
  
  </template>
  
  <script>
  import PostList from '../components/PostList.vue'
  import getPosts from '@/composables/getPosts'
  import Spinner from '../components/Spinner.vue'
  import { useRoute } from 'vue-router'
  import { computed } from '@vue/runtime-core'
  import TagCloud from '@/components/TagCloud.vue'
  // @ is an alias to /src
  
  
  export default {
    name: 'HomeView',
    components:{ PostList, Spinner, TagCloud },
    setup(){

        const route = useRoute()
  
      const {posts,error,load} = getPosts()
  
      load()
      const postWithTag = computed (()=>{
        return posts.value.filter((p)=> p.tags.includes(route.params.tag))
      })
  
      return {posts,error,postWithTag}
    }
  
  }
  </script>
  
  <style>
    .tag{
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
    }
    .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  </style>
  