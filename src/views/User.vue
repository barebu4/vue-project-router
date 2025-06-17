<template>
    <div>
        <h2>Users ID: {{ id }}</h2>
        <router-link :to="{name: 'profile', params: {id}}">Go to Profile</router-link>
        <p>
           <router-link :to="{name: 'about', params: {id}}">Go to user about</router-link> 
        </p>
        <router-view />
    </div>
</template>

<script>
    export default{
        props: ["id"]
    }
</script>