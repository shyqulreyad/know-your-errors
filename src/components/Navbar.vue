<template>
<header>
    <h1>
        Know your Errors
    </h1>
    <nav>
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-link :to="{name : 'Create'}">Create Post</router-link>
    </nav>
</header>  
</template>

<script>
export default {

}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    
}
header h1{
    color: #dfdfdf;
    font-size: 48px;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(1.5deg);
}
/* header h1::before{
    content:"";
    width: 50%;
    height: 10%;
    background: #dfdffd;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
} */
header a{
    color: #bbb;
    margin-left: 20px;
    text-decoration: none;
}
header a.router-link-active{
    color: #444;
    font-weight: bold;
}
</style>