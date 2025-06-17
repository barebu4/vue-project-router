<template>
    <div>
        <h1>Main Page</h1>
        <button @click="goToUser">Go to user</button>
    </div>
</template>

<script>
    export default{
        methods:{
            goToUser(){
                this.$router.push({name: "user", params:{id: 1}})
            }
        }
    }
</script>